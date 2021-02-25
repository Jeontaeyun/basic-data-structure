# Floor Repair

n = int(input())

dynamic_table = [0] * 1001
DIVIDE_NUMBER = 796796

dynamic_table[1] = 1
dynamic_table[2] = 3
for row in range(3, n+1):
    dynamic_table[row] = (dynamic_table[row - 1]) + \
        (dynamic_table[row-2] * 2)

print(dynamic_table[n] % DIVIDE_NUMBER)
