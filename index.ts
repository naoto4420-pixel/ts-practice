type User = {
  id: number | string;
  username: string;
  age?: number;
};

const userA: User = {
  id: 100,
  username: "Taro",
  age: 30
};

const userB: User = {
  id: "F-100",
  username: "Hanako"
};

console.log(userA);
console.log(userB);

const calculateTotal = (price: number, amount: number): number => {
  return price * amount;
};

const total = calculateTotal(1500, 3);
console.log(`合計金額は${total}円です`);

const reportTestStatus = (productName: string, hasBugs: boolean): void => {
  if (hasBugs){
    console.log(`[報告] ${productName}は引き続き不具合の調査が必要です。`);
  }else{
    console.log(`[報告] ${productName}はテスト完了、リリース可能です。`);
  }
};

reportTestStatus("新作アクションゲーム", true);
reportTestStatus("ECサイトのカート機能", false);

const displayUserInfo = (user: User): void => { 
  if (user.age){
    console.log(`ユーザー名: ${user.username}, 年齢: ${user.age}歳 (ID:${user.id})`);
  }else{
    console.log(`ユーザー名: ${user.username}(ID:${user.id})`);
  }
};

displayUserInfo(userA);
displayUserInfo(userB);