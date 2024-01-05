interface Igoods {
  brand: string;
  serialNumber: number;
  model: string[];
}

interface Icart {
  product: string;
  price: number;
}

interface Icard extends Icart {
  card: boolean;
}

let 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };

let 장바구니: Icart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface I오브젝트 {
  data: string;
}

var 어레이: (number | string)[] = [1, "2", 3]; //  union type
var 오브젝트: I오브젝트 = { data: "123" };

// unknown vs any type 차이 알아두기

//에러나는이유
/* let 나이: unknown = 1;
나이 + 1; */
/* unknown 타입인 변수를 조작하려면 

내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야합니다. 

그것이 타입스크립트의 근간이 되는 코딩방법이고

변수에 뭐가 들어있을지 애매한, 추측해야하는 상황이 나오는 시점에선 반드시 사용해야합니다. 

좀 길어서 그건 뒤에 나오는 강의에서 알아봅시다.  */

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | undefined | boolean)[] = [user, age, married];

interface ISchool {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
}

let 학교: ISchool = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function hiFn(a: string): void {
  if (a) {
    console.log(a);
  } else {
    console.log("이름이 없습니다");
  }
}

function lengthFn(a: number | string): number {
  return a.toString().length;
}

function 결혼확률함수(income: number, house: boolean, face: string): number {
  let score = 0;
  score = score + income;
  if (house) score = score + 500;
  if (face === "상") score = score + 100;
  return score;
}

// type narrowing

function 내함수(x: number | string) {
  if (typeof x === "number") {
    return x + 1;
  } else if (typeof x === "string") {
    return x + 1;
  } else {
    return 0;
  }
}
//Type Assertion
function fn(x: number | string) {
  return (x as number) + 1;
}
/* console.log(fn(123)); */

function 클리닝함수(a: (number | string)[]): void {
  console.log(a.map(Number));
}

클리닝함수(["1", 2, "3"]);

interface ITeacher {
  subject: string | string[];
}

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function subFn(a: ITeacher) {
  if (typeof a.subject === "string") {
    console.log(a.subject);
  } else {
    console.log(a.subject.reverse()[0]);
  }
}

subFn(철수쌤);
subFn(영희쌤);

interface IObject {
  color?: string;
  size: number;
  readonly position: number[];
}

let 테스트용변수: IObject = {
  size: 123,
  position: [1, 2, 3],
};

interface Ihome3 {
  name: string;
  phone: number;
  email: string;
}

type User = {
  name: string;
  phone: number;
  email?: string;
  adult: boolean;
};
let 회원가입정보: User = {
  name: "kim",
  adult: false,
  phone: 1234,
};

//Literal Type
let john: "대머리";
let kim: "솔로";

function game(): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}

//arrow function type 지정
type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};

interface I회원정보 {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
}

let 회원정보: I회원정보 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

type cutType = (x: string) => string;

const cutZero: cutType = (x) => {
  let result;
  result = x.replace(/^0/, "");
  return result;
};

let person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }): void {
  console.log(student, age);
}
// 함수({ student: true, age: 20 });

//인터페이스 한번하고 파트 2 시작 ㄱㄱ

//레스트파라미터
/* function 함수오(...a: number[]) {
  console.log(a);
}

함수오(1, 2, 3, 4, 5, 6, 7); */

/* function 함수오({ student, age }: { student: boolean; age: number }): void {
  console.log(student, age);
}

함수오({ student: true, age: 209 });

function 최댓값오(...a: number[]): void {
  console.log(a.sort().reverse()[0]);
}

최댓값오(1, 9, 3, 5); */

interface I함수오 {
  user: string;
  comment: number[];
  admin: boolean;
}

function 함수오({ user, comment, admin }: I함수오) {}

함수오({ user: "kim", comment: [3, 5, 4], admin: false });
