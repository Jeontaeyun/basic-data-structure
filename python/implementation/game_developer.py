# Game Developer
# 전형적인 시뮬레이션 게임, 별도의 알고리즘이 필요하기 보다는
# 문제에서 요구하는 내용을 오류 없이 성실하게 구현만 할 수 있다면 풀 수 있다는 특징이 있음
# 게임 캐릭터가 맵 안에서 움직이는 시스템 개발, 캐릭터가 있는 장수 1*1 단위의 N*N 크기의 맵
# 육지(0), 바다(1)
# 북(0), 동(1), 남(2), 서(3)

n, k = map(int, input().split())
position_data = list(map(int, input().split()))
map_data = [[int(x) for x in input().split()] for _ in range(n)]

# [up, down, left, right]
directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

current_position = [position_data[0], position_data[1]]
current_direction = position_data[2]
count_scan = 0

memoization = []


def turn_left():
    global count_scan
    global current_direction
    count_scan += 1
    current_direction -= 1
    if current_direction == -1:
        current_direction = 3


def check_is_block(row, column):
    is_block_row = row < 0 or row >= n
    is_block_column = column < 0 or column >= n

    return is_block_row or is_block_column


while True:
    turn_left()
    next_row = current_position[0] + directions[current_direction][0]
    next_column = current_position[1] + directions[current_direction][1]

    if check_is_block(next_row, next_column):
        continue

    if not (next_row, next_column) in memoization and map_data[next_row][next_column] == 0:
        count_scan = 0
        current_position = [next_row, next_column]
        memoization.append((next_row, next_column))

    if count_scan == 3:
        back_row = current_position[0] - directions[current_direction][0]
        back_column = current_position[1] - directions[current_direction][1]

        if check_is_block(back_row, back_column):
            continue
        if not map_data[back_row][back_column] == 1:
            break
        else:
            current_position = [back_row, back_column]

solution = len(memoization)

print(solution)
