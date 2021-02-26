# Future City
# 해당 문제는 O(N^3)의 시간 복잡도를 갖지만 1<=N<=100 이라는 점을 가정할 때 1,000,000(100만)번의 연산은 충분하다 생각하여
# 플로이드 워셜 알고리즘을 사용할 수 있다.

n, m = map(int, input().split())

INF = int(1e9)
graph = [[INF] * (n+1) for _ in range(n+1)]


for i in range(1, n+1):
    for j in range(1, n+1):
        if i == j:
            graph[i][j] = 0

for i in range(m):
    a, b = map(int, input().split())
    graph[a][b] = 1
    graph[b][a] = 1

for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

x, k = map(int, input().split())

result = graph[1][k] + graph[k][x]

if result >= INF:
    print(-1)
else:
    print(result)
