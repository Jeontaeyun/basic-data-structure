# Dollar Problem

n, m = map(int, input().split())
data = []
MAX_VALUE = 10001
dynamic_table = [MAX_VALUE] * 10001

for i in range(0, n):
    data.append(int(input()))

data.sort()

for goal_dollar in range(1, m+1):
    for dollar in data:
        index = goal_dollar-dollar
        if goal_dollar == dollar:
            dynamic_table[goal_dollar] = 1
        if dynamic_table[index] != -1:
            dynamic_table[goal_dollar] = min(
                dynamic_table[index] + 1, dynamic_table[goal_dollar])

if dynamic_table[m] == MAX_VALUE:
    print(-1)
else:
    print(dynamic_table[m])
