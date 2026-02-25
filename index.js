"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories = ["家電", "PC", "ゲーム"];
const stockCounts = [10, 5, 2];
console.log(`カテゴリ一覧：${categories.join(",")}`);
const myComputer = {
    name: "ノートパソコン",
    price: 55000,
    isOnSale: false
};
console.log(`商品名：${myComputer.name} (価格： ${myComputer.price}円)`);
const myGame = {
    name: "シミュレーションゲーム",
    price: 2000,
    isOnSale: true
};
console.log(`商品名：${myGame.name} (価格： ${myGame.price}円)`);
//# sourceMappingURL=index.js.map