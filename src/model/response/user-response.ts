export class UserResponse {
  private username?: string;
  private displayname?: string;
  private email?: string;

  //Set Constructor
  constructor(username?: string, displayname?: string, email?: string) {
    this.username = username;
    this.displayname = displayname;
    this.email = email;
  }

  //Get and Set
  public getUsername(): string | undefined {
    return this.username;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public getEmail(): string | undefined {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getDisplayname(): string | undefined {
    return this.displayname;
  }

  public setDisplayname(displayname: string): void {
    this.displayname = displayname;
  }
}
