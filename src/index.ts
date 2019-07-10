import {GithubApiService} from './GithubApiService';
import { User } from './user';
import { Repo } from './repo';
import * as _ from 'lodash';

let svc = new GithubApiService();

svc.getUserInfo('mi4en', (user: User) => {

    svc.getRepos('mi4en', (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]); // this * -1 reverse the order
        let filteredRepos = _.take(sortedRepos, 5)
        user.repos = filteredRepos;
        console.log(user);
    })
});

