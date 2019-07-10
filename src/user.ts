import { Repo } from "./repo";

export class User {
    login: string;
    fullName: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[];
}