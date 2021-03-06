# C++와 함께하는 자료구조 Data Structure

C++는 C언어의 스펙상의 단점을 보완하는 언어이며 객체 지향 특성을 가미했습니다.

- 데이터와 동작을 통합한 `class` 제공. 이를 통해 `encapsulation`, `inheritance`, `polymorphism` 구현
- `Reference`, `Inline Function`, 변수 중간 선언
- `Function overload`, 새로운 메모리 할당
- `template` 기능 제공

## C ++ 데이터 타입

| DataType               | 설명                             |
| ---------------------- | -------------------------------- |
| Primitive data type    | `char`, `int`, `float`, `double` |
| Derived data type      | `array`, `pointer`, `reference`  |
| User Defined data type | `structure`, `union`, `class`    |

## C ++ 언어 구성 요소

| 구성요소     | 설명                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| Operator     | 산술, 할당, 비트, 논리, 관계, 선택, 멤버, 조건, 구분자, operator overloading                                        |
| Flow Control | `if else`, `switch`, `while`, `do while`, `for`, `goto`, `continue`, `break`                                        |
| Function     | `Function Name` , `argument`, `return value`, `body`, `default argument`, `function overloading`, `inline function` |

## 포인터 Pointer

포인트는 *메모리의 주소를 가리키는 변수*로 `주소(Address)`와 `타입(Type)`의 요소로 규정하고 주소만 있는 포인터는 `void` 타입을 주면된다.

```c++
   void* pointer;
```

| 연산자 | 설명                 |
| ------ | -------------------- |
| \*     | dereference operator |
| &      | Address of operator  |

포인터를 쓰면 Low-Level 프로그래밍이 가능하지만 잘못 사용하면 프로그램이 위험해진다.
