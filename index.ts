const categories: string[] = ["家電","PC","ゲーム"];
const stockCounts: number[] = [10,5,2];

console.log(`カテゴリ一覧：${categories.join(",")}`);

type Product = {
  name: string;
  price: number;
  isOnSale: boolean;
};

const myComputer: Product = {
  name: "ノートパソコン",
  price: 55000,
  isOnSale: false
};

console.log(`商品名：${myComputer.name} (価格： ${myComputer.price}円)`);

const myGame: Product = {
  name: "シミュレーションゲーム",
  price: 2000,
  isOnSale: true
};

console.log(`商品名：${myGame.name} (価格： ${myGame.price}円)`);
