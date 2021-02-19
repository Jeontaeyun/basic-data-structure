# Number Card Game Problem
# Solution : "각 행마다 가장 작은 수를 찾은 뒤 그 수 중에서 가장 큰 수"를 찾는 것

n, m = map(int, input().split())
# Multidimensional Array Input
data = [[int(x) for x in input().split()] for _ in range(n)]

solution = 0

for row in range(0, n):
    data[row].sort()
    rowMinValue = data[row][0]
    if solution < rowMinValue:
        solution = rowMinValue

print(solution)
