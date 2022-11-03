export type User = {
  _id: string;
  email: string;
  name?: string;
  data?: any[];
  signupDate: Date;
  lastlogin?: Date;
  access: string;
};
