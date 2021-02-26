# Telegram Problem
# 이 문제는 버텍스의 제한이 30,000이고 아크의 제한이 200,000인 것을 고려해 우선 순위 큐를 이용한
# 개선된 다익스트라 알고리즘을 사용해야 할 것 같다.

import heapq
n, m, c = map(int, input().split())

INF = int(1e9)

graph = [[] for i in range(n+1)]
distance = [INF] * (n+1)

for _ in range(m):
    start, end, time = map(int, input().split())
    graph[start].append((end, time))


def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = i[1] + dist
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))


dijkstra(c)

for d in distance:
    if d != INF and d != 0:
        count += 1
        max_time = max(d, max_time)

print(count, max_time)
