export interface IUser {
    username: string,
    _id: string,
    avatar: string
}

export type InitUserState = {
  user: IUser;
  isLoading: boolean;
  isAuth: boolean;
};

