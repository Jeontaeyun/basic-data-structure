# Chess Game
# [] 리스트, () 튜풀, {} 딕셔너리

n = str(input())

start = [ord(n[0])-96, int(n[1])]
direction_list = [(2, 1), (2, -1), (-2, 1), (-2, -1),
                  (1, 2), (1, -2), (-1, 2), (-1, -2)
                  ]
solution = 0

for direction in direction_list:
    should_move_row = start[0]+direction[0] > 0 and start[0]+direction[0] < 9
    should_move_column = start[1] + \
        direction[1] > 0 and start[1] + direction[1] < 9

    if should_move_row and should_move_column:
        solution += 1

print(solution)
