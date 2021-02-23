# Escape maze problem
# BFS는 시작 지점에서 가까운 노드부터 차례대로 그래프의 모든 노드를 탐색한다.
from collections import deque

n, m = map(int, input().split())
data = [[int(x) for x in input()] for _ in range(n)]

queue = deque([])


def bfs(x, y):
    if x <= -1 or x >= n or y <= -1 or y >= m:
        return False
    if queue[x][y] == 0:
        return True


result = 0
bfs(0, 0)

print(result)
