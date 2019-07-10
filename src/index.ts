import {GithubApiService} from './GithubApiService';
import { User } from './user';
import { Repo } from './repo';
import * as _ from 'lodash';

let svc = new GithubApiService();

if (process.argv.length < 3) {
    console.log('Please enter Github username as argument')
}
else {
    let username = process.argv[2];

    svc.getUserInfo(username, (user: User) => {

        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]); // this * -1 reverse the order
            let filteredRepos = _.take(sortedRepos, 5)
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}



