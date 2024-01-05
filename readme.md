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

```
function hi(x?: string) {
  if (x) {
    console.log("ㅎㅇ" + x);
  } else {
    console.log("ㄴㄱ?");
  }
}

hi("웡키");

function 세알려함수(x: number | string): number {
  return x.toString().length;
}

function 결혼가능한가(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼쌉가능";
  }
}
```

```type Girlfriend = {
  name?: string;
};

const 여친: Girlfriend = {
  name: "애슐리",
};

여친.name = "유라";
```

/_ type alias 타입변수 _/

```
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;
/* object를 extend하고싶을때 이렇게 사용하면됨 */
let position: NewType = { x: 10, y: 20 };
```

```
type PositionX = { x: number };
type PositionY = { x: number };

type Newtype = PositionX & PositionY;

type 이타입 = {
  color: string;
  size: number;
  readonly position: number[];
};

type User = { name: string; email?: string; phone: number; adult: boolean };
```

```
/* type 함수타입 = (a: string) => number;

let 함수: 함수타입 = function (a) {
  return 10;
}; */

/* type 함수타입 = (a: number) => number;

let 회원정보 = {
  name: "kim",
  plusOne :(a:number)=> number,
  changeName : () => void,
};

회원정보.plusOne(); */
```
