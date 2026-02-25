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
