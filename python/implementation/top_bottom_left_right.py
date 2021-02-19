# Top Bottom Left Right Problem
n = int(input())
data = list(map(str, input().split()))

# [top,bottom,left,right]
direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]
position = [1, 1]

for command in data:
    if command == "U":
        if position[0] + direction[0][0] >= 1:
            position[0] += direction[0][0]
    if command == "D":
        if position[0] + direction[1][0] <= n:
            position[0] += direction[1][0]
    if command == "L":
        if position[1] + direction[2][1] >= 1:
            position[1] += direction[2][1]
    if command == "R":
        if position[1] + direction[3][1] <= n:
            position[1] += direction[3][1]

print(position[0], position[1])
