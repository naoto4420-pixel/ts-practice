"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const hero = {
    id: "CH-001",
    name: "勇者"
};
console.log(`${hero.name} (ID: ${hero.id})`);
;
const myPlayer = {
    id: "PL-100",
    name: "剣士タロウ",
    level: 50,
    job: "ナイト"
};
console.log(`プレイヤー: ${myPlayer.name}, 職業: ${myPlayer.job}, レベル: ${myPlayer.level}`);
;
const enemyA = {
    id: "EN-001",
    name: "スライム",
    hp: 100,
    dropItem: "ポーション"
};
const enemyB = {
    id: "EN-002",
    name: "スケルトン",
    hp: 50,
};
console.log(`敵1: ${enemyA.name}, HP: ${enemyA.hp}${enemyA.dropItem ? `, ドロップアイテム: ${enemyA.dropItem}` : ""}`);
console.log(`敵2: ${enemyB.name}, HP: ${enemyB.hp}${enemyB.dropItem ? `, ドロップアイテム: ${enemyB.dropItem}` : ""}`);
//# sourceMappingURL=index.js.map