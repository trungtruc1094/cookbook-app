import { AuthUser } from "./auth-user.model";

export interface User extends AuthUser {
    userId?: string;
    fullName: string;
    // email: string;
    // password: string;
    avatar?: string;
}