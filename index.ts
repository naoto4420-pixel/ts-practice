const fetchGreeting = async (): Promise<string> => {
  return "サーバーからの挨拶：こんにちは！";
};

const runProgram = async (): Promise<void> => {
  console.log("通信を開始します．．．");

  const message = await fetchGreeting();

  console.log(message);
  console.log("通信が完了しました。");
};

runProgram();

interface Item {
  id: number;
  name: string;
  price: number;
};

const fetchItemData = async (): Promise<Item> => {
  return {
    id: 1,
    name: "りんご",
    price: 100,
  };
};

const displayItemData = async (): Promise<void> => {
  const item = await fetchItemData();

  console.log(`商品名：${item.name}, 価格：${item.price}円`);
};

displayItemData();