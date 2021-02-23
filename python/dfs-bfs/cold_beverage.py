# Cold Beverage
n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))


def dfs(x, y):
    if x <= -1 or x >= n or y <= -1 or y >= m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        # 상, 하, 좌, 우 모두 재귀적 호출 -> 얼음이 어는 것을 상상해보기
        dfs(x-1, y)
        dfs(x, y-1)
        dfs(x+1, y)
        dfs(x, y+1)
        return True
    return False


result = 0
for row in range(n):
    for column in range(m):
        if dfs(row, column) == True:
            result += 1
print(result)
