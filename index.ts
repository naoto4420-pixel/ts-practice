interface Character{
  id: string;
  name: string;
};

const hero: Character = {
  id: "CH-001",
  name: "勇者"
};

console.log(`${hero.name} (ID: ${hero.id})`);

interface Player extends Character {
  level: number;
  job: string;
};

const myPlayer: Player = {
  id: "PL-100",
  name: "剣士タロウ",
  level: 50,
  job: "ナイト"
};

console.log(`プレイヤー: ${myPlayer.name}, 職業: ${myPlayer.job}, レベル: ${myPlayer.level}`);

interface Enemy extends Character {
  hp: number;
  dropItem?: string;
};

const enemyA: Enemy = {
  id: "EN-001",
  name: "スライム",
  hp: 100,
  dropItem: "ポーション"
};

const enemyB: Enemy = {
  id: "EN-002",
  name: "スケルトン",
  hp: 50,
};

console.log(`敵1: ${enemyA.name}, HP: ${enemyA.hp}${enemyA.dropItem ? `, ドロップアイテム: ${enemyA.dropItem}` : ""}`);
console.log(`敵2: ${enemyB.name}, HP: ${enemyB.hp}${enemyB.dropItem ? `, ドロップアイテム: ${enemyB.dropItem}` : ""}`);