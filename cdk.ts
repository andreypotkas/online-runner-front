import * as cdk from "aws-cdk-lib";
import * as cf from "aws-cdk-lib/aws-cloudfront";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as deployment from "aws-cdk-lib/aws-s3-deployment";

const app = new cdk.App();

const stack = new cdk.Stack(app, "RunConnectFrontendStack", {
  env: { region: "eu-west-1" },
});

const bucket = new s3.Bucket(stack, "RunConnectFrontendBucket", {
  bucketName: "run-connect-frontend",
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
  websiteIndexDocument: "index.html",
});

const originAccessIdentity = new cf.OriginAccessIdentity(
  stack,
  "RunConnectFrontendBucketOAI"
);

bucket.grantRead(originAccessIdentity);

const distribution = new cf.CloudFrontWebDistribution(
  stack,
  "RunConnectFrontendDistribution",
  {
    originConfigs: [
      {
        s3OriginSource: {
          s3BucketSource: bucket,
          originAccessIdentity: originAccessIdentity,
        },
        behaviors: [{ isDefaultBehavior: true }],
      },
    ],
    defaultRootObject: "index.html",
    errorConfigurations: [
      {
        errorCode: 404,
        responseCode: 200,
        responsePagePath: "/index.html",
      },
    ],
  }
);

new deployment.BucketDeployment(stack, "RunConnectFrontendDeployment", {
  destinationBucket: bucket,
  sources: [deployment.Source.asset("./dist")],
  distribution,
  distributionPaths: ["/*"],
});

new cdk.CfnOutput(stack, "S3bucket Url", {
  value: bucket.bucketWebsiteUrl,
});

new cdk.CfnOutput(stack, "Cloudfront Url", {
  value: distribution.distributionDomainName,
});
