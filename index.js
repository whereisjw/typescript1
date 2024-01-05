var 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var 어레이 = [1, "2", 3]; //  union type
var 오브젝트 = { data: "123" };
// unknown vs any type 차이 알아두기
//에러나는이유
/* let 나이: unknown = 1;
나이 + 1; */
/* unknown 타입인 변수를 조작하려면

내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야합니다.

그것이 타입스크립트의 근간이 되는 코딩방법이고

변수에 뭐가 들어있을지 애매한, 추측해야하는 상황이 나오는 시점에선 반드시 사용해야합니다.

좀 길어서 그건 뒤에 나오는 강의에서 알아봅시다.  */
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function hiFn(a) {
    if (a) {
        console.log(a);
    }
    else {
        console.log("이름이 없습니다");
    }
}
function lengthFn(a) {
    return a.toString().length;
}
function 결혼확률함수(income, house, face) {
    var score = 0;
    score = score + income;
    if (house)
        score = score + 500;
    if (face === "상")
        score = score + 100;
    return score;
}
// type narrowing
function 내함수(x) {
    if (typeof x === "number") {
        return x + 1;
    }
    else if (typeof x === "string") {
        return x + 1;
    }
    else {
        return 0;
    }
}
//Type Assertion
function fn(x) {
    return x + 1;
}
/* console.log(fn(123)); */
function 클리닝함수(a) {
    console.log(a.map(Number));
}
클리닝함수(["1", 2, "3"]);
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function subFn(a) {
    if (typeof a.subject === "string") {
        console.log(a.subject);
    }
    else {
        console.log(a.subject.reverse()[0]);
    }
}
subFn(철수쌤);
subFn(영희쌤);
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3],
};
var 회원가입정보 = {
    name: "kim",
    adult: false,
    phone: 1234,
};
//Literal Type
var john;
var kim;
function game() {
    return ["가위", "보"];
}
var ABC = function (x, y) {
    return x + y;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
var cutZero = function (x) {
    var result;
    result = x.replace(/^0/, "");
    return result;
};
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
function 함수오(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
}
함수오({ user: "kim", comment: [3, 5, 4], admin: false });
