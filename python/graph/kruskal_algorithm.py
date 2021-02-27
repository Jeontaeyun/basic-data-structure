# Kruskal Algorithm
# O(ElogE) Time Complexity
# 대표적인 최소 신장 트리 알고리즘, 신장 트리란 하나의 그래프가 있을 때 모든 노드를 포함하면서 사이클이 존재하지 않는 부분 그래프를 의미한다.
# 크루스칼 알고리즘은 그리디 알고리즘으로 분류된다.
# 01. 간선 데이터를 비용에 따라 오름차순으로 정렬
# 02. 간선을 하나씩 확인하며 현재의 간선이 사이클을 발생시키는지 확인
# - 사이클이 발생하지 않는 경우 최소 신장 트리에 포함
# - 사이클이 발생하는 경우 최소 신장 트리에 포함시키지 않는다.
# 03. 모든 간선에 대하여 2번의 과정을 반복함
# 최소 신장 트리는 트리 구조이기에 간선의 개수는 "노드의 개수-1"와 같다


def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


def sort_arch_with_cost(array):
    array = array.sort(key=lambda x: x[-1])


def union_parent(parrent, a, b):
    a = find_parent(parrent, a)
    b = find_parent(parrent, b)
    if a < b:
        parrent[b] = a
    else:
        parrent[a] = b


def kruskal(array, parent):
    result = 0
    sort_arch_with_cost(array)
    for data in array:
        if find_parent(parent, data[0]) == find_parent(parent, data[1]):
            print("사이클 발생")
        else:
            result += data[2]
            union_parent(parent, data[0], data[1])

    return result


v, e = map(int, input().split())
parent = [0] * (v+1)

for i in range(1, v+1):
    parent[i] = i

array = []
for i in range(0, e):
    a, b, c = map(int, input().split())
    array.append((a, b, c))

result = kruskal(array, parent)
print(result)
