# Topology Sort Problem
# 순서가 정해져 있는 일련의 작업을 차례대로 수행해야 할 때 사용할 수 있는 알고리즘.
# 즉, 방향 그래프의 모든 노드를 "방향성에 거스르지 않도록 순서대로 나열하는 것"이다.
# 위상 정렬 알고리즘
# 01. 진입차수가 0인 노드를 큐에 넣는다.
# 02. 큐가 빌 때까지 다음의 과정을 반복한다.
# - 큐에서 원소를 꺼내 해당 노드에서 출발하는 간선을 그래프에서 제거한다.
# - 새롭게 진입차수가 0이 된 노드를 큐에 넣는다.
# 위상 정렬은 보통 싸이클이 발생하면 안되며 대부분의 문제에서 사이클이 발생하지 않음을 명시한다.
# O(V+E) Time Complexity

from collections import deque

v, e = map(int, input().split())
indgree = [0] * (v+1)

graph = [[]for i in range(v+1)]

for _ in range(e):
    a, b = map(int, input().split())
    graph[a].append(b)
    indgree[b] += 1


def topology_sort():
    result = []
    q = deque()

    for i in range(1, v+1):
        if indgree[i] == 0:
            q.append(i)

    while q:
        now = q.popleft()
        result.append(now)
        for i in graph[now]:
            indgree[i] -= 1
            if indgree[i] == 0:
                q.append(i)

    for i in result:
        print(i, end=" ")


topology_sort()
