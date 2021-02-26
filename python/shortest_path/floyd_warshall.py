# Floyd Warshall
# O(N^3) Time Complexity
# 다익스트라 알고리즘이 그리디 알고리즘인데 반해, 플로이드 워셜 알고리즘은 다이나믹 프로그래밍이다.
# 노드의 개수가 N이라고 할 때, N번 만큼의 단계를 반복하며 "점화식에 맞게" 2차원 리스트를 갱신하기 때문에 다이나믹 프로그래밍이다.

INF = int(1e9)

n = int(input())
m = int(input())

graph = [[INF] * (n+1) for _ in range(n+1)]

for a in range(1, n+1):
    for b in range(1, n+1):
        if a == b:
            graph[a][b] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a][b] = c

for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

for a in range(1, n+1):
    for b in range(1, n+1):
        if graph[a][b] == INF:
            print("INFINITY", end=" ")
        else:
            print(graph[a][b], end=" ")
    print()
