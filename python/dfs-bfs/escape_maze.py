# Escape maze problem
# BFS는 시작 지점에서 가까운 노드부터 차례대로 그래프의 모든 노드를 탐색한다.
# DFS는 주로 모든 버텍스를 탐색할 때 쓰고, BFS는 주로 두 지점간 가장 가까운 거리를 위해 사용한다
from collections import deque

n, m = map(int, input().split())
data = [[int(x) for x in input()] for _ in range(n)]
directions = [(0, -1), (1, 0), (0, 1), (-1, 0)]


def bfs(x, y):
    queue = deque([(x, y)])
    while queue:
        x, y = queue.popleft()
        for direction in directions:
            nx = x + direction[0]
            ny = y + direction[1]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if data[nx][ny] == 0:
                continue
            if data[nx][ny] == 1:
                data[nx][ny] = data[x][y] + 1
                queue.append((nx, ny))
    return data[n-1][m-1]


print(bfs(0, 0))
