# Simple Dijkstra Algorithm
# O(V^2), 따라서 전체 노드가 5,000개 일때는 이 알고리즘이 유효하나
# 10,000개를 넘어가면 이 코드로 해결하기 어려움
import sys
input = sys.stdin.readline
# 무한을 의미하는 값
INF = int(1e9)

n, m = map(int, input().split())
start = int(input())
graph = [[] for i in range(n+1)]

visited = [False] * (n+1)
distance = [INF]*(n+1)

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))


def get_smallest_node():
    min_value = INF
    index = 0
    for i in range(1, n+1):
        if distance[i] < min_value and not visited[i]:
            min_value = distance[i]
            index = i
    return index


def dijkstra(start):
    distance[start] = 0
    visited[start] = True
    for j in graph[start]:
        distance[j[0]] = j[1]
    for i in range(n-1):
        now = get_smallest_node()
        visited[now] = True
        for j in graph[now]:
            cost = distance[now] + j[1]
            if cost < distance[j[0]]:
                distance[j[0]] = cost


dijkstra(start)

for index in range(1, n+1):
    if distance[index] == INF:
        print("INFINITY")
    else:
        print(distance[index])
