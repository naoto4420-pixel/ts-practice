type ResultStatus = "success" | "error" | "loading";

let currentStatus: ResultStatus = "loading";
console.log(`現在のステータス: ${currentStatus}`);

currentStatus = "success";
console.log(`現在のステータス: ${currentStatus}`);

interface ApiCall {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  status: ResultStatus;
};

const fetchUserData: ApiCall = {
  endpoint: "/user/1",
  method: "GET",
  status: "success"
};

console.log(`${fetchUserData.method}通信で ${fetchUserData.endpoint} にアクセスし、結果は ${fetchUserData.status} でした。`);

type TaskStatus = "Todo" | "inProgress" | "Done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus
};

const taskA: Task = {
  id: 1,
  title: "タスクA",
  status: "Done"
};

const taskB: Task = {
  id: 2,
  title: "タスクB",
  status: "inProgress"
};

console.log(`タスク名: ${taskA.title}, ステータス: ${taskA.status}`);
console.log(`タスク名: ${taskB.title}, ステータス: ${taskB.status}`);