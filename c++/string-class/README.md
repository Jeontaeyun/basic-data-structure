# String Class

C++에서의 스트링은 다음 특징을 가진다.

- null-terminated char array (char\*)
- 사용자가 메모리 할당하고 해제해야 한다.
- 잘못된 사용에 대한 방어 방법이 없고 스트링 조작이 불편한다.

## String Class 디자인 목표

- 메모리 할당에 신경쓰지 않아도 되도록 개발
- 잘못된 스트링 사용에도 안전하게 처리
- 편리한 스트링 조작함수 방법 제공
- 직관적인 operator 들 제공 (+, ==, = 등)
