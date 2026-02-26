"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userA = {
    id: 100,
    username: "Taro",
    age: 30
};
const userB = {
    id: "F-100",
    username: "Hanako"
};
console.log(userA);
console.log(userB);
const calculateTotal = (price, amount) => {
    return price * amount;
};
const total = calculateTotal(1500, 3);
console.log(`合計金額は${total}円です`);
const reportTestStatus = (productName, hasBugs) => {
    if (hasBugs) {
        console.log(`[報告] ${productName}は引き続き不具合の調査が必要です。`);
    }
    else {
        console.log(`[報告] ${productName}はテスト完了、リリース可能です。`);
    }
};
reportTestStatus("新作アクションゲーム", true);
reportTestStatus("ECサイトのカート機能", false);
const displayUserInfo = (user) => {
    if (user.age) {
        console.log(`ユーザー名: ${user.username}, 年齢: ${user.age}歳 (ID:${user.id})`);
    }
    else {
        console.log(`ユーザー名: ${user.username}(ID:${user.id})`);
    }
};
displayUserInfo(userA);
displayUserInfo(userB);
//# sourceMappingURL=index.js.map