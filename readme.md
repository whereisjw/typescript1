# npm i -g typescript

리액트 기존폴더

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

리액트 새폴더

```
npx create-react-app my-app --template typescript
```

# index.ts

# tsconfig.json

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}

```

# tsc -w

```
let 이름: string = "웡키방";
let age: number = 30;
let place: string = "beijing";

let object: { name: string; song: string } = {
  name: "성시경",
  song: "먹방을좋아해",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
```

```
let 회원들: (string | number)[] = [1, "2", 3];

let 오브젝트: { a: string | number } = { a: 1 };

//let 이름: any; //타입이라고 보다는 쉴드 해제의 뜻이라 typescript라고 하긴 좀 그럼
let 이름: unknown; //any 보다 조금 더 안전함
이름 = 123;
이름 = true;

// let 나이: string | number;
// 나이 + 1;  //union 타입이 이아니라 string이나 number둘중에 하나였으면 에러안떴음

let 나이: unknown = 1;
나이 - 1;
```
