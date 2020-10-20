let hello: string = 'hello';
console.log(hello);





// オブジェクトについて
const user: { name: string, age: number} = {
  name: "ebihara",
  age: 44,
};
console.log(user.name); // ebihara
console.log(user.aga); // エラー： プロパティ名が間違っている
console.log(user.age.length); // エラー： age は number 型で length プロパティはない