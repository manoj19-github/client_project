export interface UserMain {
  userDetails?: UserDetails;
}

export interface UserDetails {
  email: string;
  userid: number;
  userType: string;
  roleType: string;
  accessToken: string;
  userName: string;
  contact: string;
}

export interface UserLoginModel {
  userid: string;
  password: string;
}
