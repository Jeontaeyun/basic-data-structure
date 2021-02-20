# TIme problem
# 00:00:00 - n:59:59
# 해당 문제는 완전 탐색 유형(Brute Forcing)으로도 풀 수 있다.
# 완전 탐색 알고리즘은 가능한 경우의 수를 모두 검사해보는 탐색 방법이다.
# 시간 복잡도로 인해서 일반적으로 알고리즘 문제를 풀 때 확인(탐색)해야 하는 전체 데이터의 개수가 100만개 이하 일 때 완전 탐색을 사용하면 적절하다.
# 내가 푼 방법은 완전 탐색보다는 시간 복잡도를 O(N)으로 감소하여 처리하는 알고리즘이다. 이는 일정한 데이터 제한 안에서 휴리스틱을 적용했다.
# Heuristic
# 01. 시간에 3이 포함되면 분과 초의 경우의 수 모두가 참이다
# 02. 분에 3이 포함되면 모든 초의 경우의 수가 참이다
# 03. 데이터는 0~59, 0~23의 범위를 가진다.

n = int(input())

solution = 0

hour_three_case = 0
minute_three_case = 0
second_three_case = 0

for number in range(0, n + 1):
    if "3" in str(number):
        hour_three_case += 1

for number in range(0, 60):
    if "3" in str(number):
        minute_three_case += 1

for number in range(0, 60):
    if "3" in str(number):
        second_three_case += 1

print(hour_three_case, minute_three_case, second_three_case)

solution += hour_three_case * 60 * 60
solution += (n - hour_three_case + 1) * (minute_three_case * 60)
solution += (n - hour_three_case + 1) * \
    (60-(minute_three_case)) * second_three_case

print(solution)
