import {GithubApiService} from './GithubApiService';
import { User } from './user';
import { Repo } from './repo';

let svc = new GithubApiService();

svc.getUserInfo('mi4en', (user: User) => {
    console.log(user);
});

svc.getRepos('mi4en', (repos: Repo[]) => {
    console.log(repos);
})