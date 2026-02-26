"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentStatus = "loading";
console.log(`現在のステータス: ${currentStatus}`);
currentStatus = "success";
console.log(`現在のステータス: ${currentStatus}`);
;
const fetchUserData = {
    endpoint: "/user/1",
    method: "GET",
    status: "success"
};
console.log(`${fetchUserData.method}通信で ${fetchUserData.endpoint} にアクセスし、結果は ${fetchUserData.status} でした。`);
;
const taskA = {
    id: 1,
    title: "タスクA",
    status: "Done"
};
const taskB = {
    id: 2,
    title: "タスクB",
    status: "inProgress"
};
console.log(`タスク名: ${taskA.title}, ステータス: ${taskA.status}`);
console.log(`タスク名: ${taskB.title}, ステータス: ${taskB.status}`);
//# sourceMappingURL=index.js.map