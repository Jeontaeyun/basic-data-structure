# Curriculum Problem

from collections import deque

n = int(input())

in_degree = [0] * (n+1)
time_table = [0] * (n+1)
graph = [[]for i in range(n+1)]

for idx in range(1, n+1):
    curriculum = list(map(int, input().split()))
    time_table[idx] = curriculum[0]
    curriculum.pop(0)
    for i in curriculum:
        if i != -1:
            graph[i].append(idx)
            in_degree[idx] += 1

result = [0] * (n+1)


def topology():
    q = deque()

    for i in range(1, n+1):
        if in_degree[i] == 0:
            q.append(i)

    while q:
        now = q.popleft()
        result[now] += time_table[now]
        for i in graph[now]:
            if result[i] < result[now]:
                result[i] = result[now]
            in_degree[i] -= 1
            if in_degree[i] == 0:
                q.append(i)


topology()

print(result)
