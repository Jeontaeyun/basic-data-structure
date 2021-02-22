# BFS ( Breath First Search )
from collections import deque


def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True

    while queue:
        # popleft는
        # 이쪽에서 부터 deqeue -> [1, 2, 3, 4, 5] <- 이 쪽으로 데이터 enqeue 입력
        v = queue.popleft()
        print(v, end=" ")
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True


graph = [[], [2, 3, 8], [1, 7], [1, 4, 5],
         [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]]

visited = [False] * 9
bfs(graph, 1, visited)
