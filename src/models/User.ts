import bcrypt from "bcryptjs";

interface IUser {
  username: string;
  passwordHash: string;
}

class User implements IUser {
  public username: string;
  public passwordHash: string;

  constructor(username: string, passwordHash: string) {
    this.username = username;
    this.passwordHash = passwordHash;
  }

  static async create(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User(username, hashedPassword);
    User.users.push(newUser);
    return newUser;
  }

  static findByUsername(username: string): User | undefined {
    return User.users.find((user) => user.username === username);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }

  static users: User[] = [];
}

export default User;
