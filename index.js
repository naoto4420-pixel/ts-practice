"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchGreeting = async () => {
    return "サーバーからの挨拶：こんにちは！";
};
const runProgram = async () => {
    console.log("通信を開始します．．．");
    const message = await fetchGreeting();
    console.log(message);
    console.log("通信が完了しました。");
};
runProgram();
;
const fetchItemData = async () => {
    return {
        id: 1,
        name: "りんご",
        price: 100,
    };
};
const displayItemData = async () => {
    const item = await fetchItemData();
    console.log(`商品名：${item.name}, 価格：${item.price}円`);
};
displayItemData();
//# sourceMappingURL=index.js.map