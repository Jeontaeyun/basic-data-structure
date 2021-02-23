# 이 문법은 x for x in range(3)과 같이 반복문을 진행하고 맨 앞의 값을 그 반복문 만큼 집어넣는 문법이다.
graph = [[] for _ in range(3)]

graph[0].append((1, 7))
graph[0].append((2, 5))

graph[1].append((0, 7))

graph[2].append((0, 5))

print(graph)
