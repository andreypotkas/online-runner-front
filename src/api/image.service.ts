import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library for generating a unique identifier

export class ImageService {
  private s3: AWS.S3;

  constructor() {
    AWS.config.update({
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
    });

    this.s3 = new AWS.S3({
      params: { Bucket: import.meta.env.VITE_AWS_DEFAULT_S3_BUCKET },
      region: import.meta.env.VITE_AWS_S3_REGION,
    });
  }

  generateUniqueFilename(file: File): string {
    const fileExtension = file.name.split(".").pop(); // Get the file extension
    const uniqueFilename = `${uuidv4()}.${fileExtension}`; // Generate a unique filename using uuid
    return uniqueFilename;
  }

  async upload(file: File): Promise<string> {
    const uniqueFilename = this.generateUniqueFilename(file);

    const params = {
      Bucket: import.meta.env.VITE_AWS_DEFAULT_S3_BUCKET,
      Key: `uploads/${uniqueFilename}`, // Use the unique filename in the S3 key
      Body: file,
    };

    try {
      await this.s3.putObject(params).promise();
      const imageUrl = `https://${
        import.meta.env.VITE_AWS_DEFAULT_S3_BUCKET
      }.s3.${import.meta.env.VITE_AWS_S3_REGION}.amazonaws.com/${params.Key}`;
      console.log("Image URL:", imageUrl);
      return imageUrl;
    } catch (e) {
      console.log(e);
      return "";
    }
  }

  async remove(imageUrl: string): Promise<void> {
    try {
      const key = imageUrl.split(".com/")[1]; // Extract key from the image URL
      const params = {
        Bucket: import.meta.env.VITE_AWS_DEFAULT_S3_BUCKET,
        Key: key,
      };
      await this.s3.deleteObject(params).promise();
      console.log("Image removed:", imageUrl);
    } catch (e) {
      console.log(e);
      throw e; // You might want to handle errors more gracefully in a real application
    }
  }
}

export const imageService = new ImageService();
