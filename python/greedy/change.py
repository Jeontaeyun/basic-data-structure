# Change Problem
# 거스름 돈 문제는 가장 큰 돈으로 먼저 동전을 주는 그리드 알고리즘으로 해결할 수 있다.
# Time Complexity O(K), K is the number of coin
n = 1280
solution = 0

coin_types = [500, 100, 50, 10]

for coin in coin_types:
    solution += n // coin
    n %= coin

print(solution)
