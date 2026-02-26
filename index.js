"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const updateUser = {
    name: "新・タロウ"
};
console.log(`更新データ: ${updateUser.name}`);
;
const safeUser = {
    id: 1,
    name: "ハナコ"
};
console.log(`公開ユーザー情報: ID ${safeUser.id}, 名前 ${safeUser.name}`);
;
const articlePrev = {
    id: 1,
    title: "記事タイトル"
};
const updateArticle = {
    content: "差し替え記事"
};
console.log(`記事名: ${articlePrev.title}`);
console.log(`更新記事内容: ${updateArticle.content}`);
//# sourceMappingURL=index.js.map