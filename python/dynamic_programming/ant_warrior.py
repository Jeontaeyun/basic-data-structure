# Ant Warrior

n = int(input())
data = list(map(int, input().split()))

dynamic_table = [0] * 101


for select_point in range(0, n):
    if select_point == 0:
        dynamic_table[0] = data[0]
    elif select_point == 1:
        dynamic_table[1] = max(data[0], data[1])
    else:
        dynamic_table[select_point] = max(
            dynamic_table[select_point - 1], dynamic_table[select_point-2] + data[select_point])

print(dynamic_table[n-1])
