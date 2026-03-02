"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const fetchUserInfo = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
};
const runProgram = async () => {
    const user = await fetchUserInfo("naoto4420-pixel");
    console.log(`ユーザー名： ${user.login}`);
    console.log(`ID： ${user.id}`);
    console.log(`GitHubのURL： ${user.html_url}`);
    console.log(`公開リポジトリ数： ${user.public_repos}`);
};
runProgram();
//# sourceMappingURL=index.js.map