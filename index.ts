const echo =<T>(arg: T): T => {
  return arg;
};

const word = echo<string>("こんにちは");
const num = echo<number>(100);

console.log(word);
console.log(num);

interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
};

interface User{
  name: string;
};

interface Article {
  title: string;
};

const userResponse: ApiResponse<User> = {
  status: "success",
  data: {name: "Taro"}
};

const articleResponse: ApiResponse<Article> = {
  status: "success",
  data: {title: "TypeScript入門"}
};

console.log(`ユーザー取得: ${userResponse.data.name}`);
console.log(`記事取得: ${articleResponse.data.title}`);

interface Box<T> {
  item: T;
};

const swordBox: Box<string> = {
  item: "剣"
};

const goldBox: Box<number> = {
  item: 500
};

console.log(`箱の中身: ${swordBox.item}`);
console.log(`箱の中身: ${goldBox.item}`);