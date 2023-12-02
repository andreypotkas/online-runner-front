export type AuthFormInitialValues = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

export enum AuthFormTypes {
  LOGIN = "login",
  REGISTER = "register",
}
