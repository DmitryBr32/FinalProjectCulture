export interface IUserSignInData {
  email: string;
  password: string;
}

export interface IUserSignUpData extends IUserSignInData {
  username: string;
}

export interface IUser {
  isAdmin: boolean;
  id: number;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthResponseData {
  user: IUser;
  accessToken: string;
}
