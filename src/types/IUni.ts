// "image": "https://unicodebootcamp.s3.amazonaws.com/Frame%208-4.png?AWSAccessKeyId=AKIA6I7HJPZBHVYNRPTB&Expires=1676727486&Signature=qX1UUImMIPu9tnzvScox4DEV41M%3D",
export interface IUni {
  _id: string;
  description: string;
  comments: [];
  image: File;
  user: string;
  created_at: string;
  likes: number;
};

export type Authorization = {
  user: IUni[];
  isLoading: boolean;
};

export interface Author {
  username: string;
  password: string;
};
