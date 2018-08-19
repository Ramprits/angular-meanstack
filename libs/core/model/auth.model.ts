export class AuthModel {
  username: string;
  email: string;
  password: string;
}

export class LoginModel {
  constructor(public username: string, public password: string) {}
}
