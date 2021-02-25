# To be one
# 해당 문제에 대해 구현하는 부분에서 생각보다 고민이 많았는데 이전 결과가 영향을 미친다는 사실을 파악하는 것이 중요하다.
# 이를 위해 하나의 재귀 함수를 만들고 순열의 패턴을 파악하고 그 연관성을 파악하는 연습을 하는 것이 중요하다.
n = int(input())

# 제한된 정수(n)가 1 <= n <= 30,000
dynamic_table = [-1] * 30001


# Top-Down 방식으로 진행
def calculator(x):
    if x == 1:
        dynamic_table[x] = 0
        return dynamic_table[x]

    # Memoization Code
    if dynamic_table[x] != -1:
        return dynamic_table[x]

    # Memoization Check Code
    print("f(", x, ")")

    dynamic_table[x-1] = calculator(x-1)
    result = dynamic_table[x-1]
    if x % 2 == 0:
        dynamic_table[x//2] = calculator(x//2)
        result = min(dynamic_table[x//2], result)
    if x % 3 == 0:
        dynamic_table[x//3] = calculator(x//3)
        result = min(dynamic_table[x//3], result)
    if x % 5 == 0:
        dynamic_table[x//5] = calculator(x//5)
        result = min(dynamic_table[x//5], result)
    return result + 1


print(calculator(n))
