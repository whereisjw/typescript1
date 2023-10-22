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
