"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const echo = (arg) => {
    return arg;
};
const word = echo("こんにちは");
const num = echo(100);
console.log(word);
console.log(num);
;
;
;
const userResponse = {
    status: "success",
    data: { name: "Taro" }
};
const articleResponse = {
    status: "success",
    data: { title: "TypeScript入門" }
};
console.log(`ユーザー取得: ${userResponse.data.name}`);
console.log(`記事取得: ${articleResponse.data.title}`);
;
const swordBox = {
    item: "剣"
};
const goldBox = {
    item: 500
};
console.log(`箱の中身: ${swordBox.item}`);
console.log(`箱の中身: ${goldBox.item}`);
//# sourceMappingURL=index.js.map