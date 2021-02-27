# Disjoint Sets
# 일반적으로 서로서 집합을 그림으로 표현할 때는 번호가 큰 노드가 작은 노드를 간선으로 가리키도록 트리 구조를 이용해 그림을 그린다.
# 즉, 번호가 작은 노드가 부모가 되고, 번호가 큰 노드가 자식이 된다.

def find_parent(parent, x):
    if parent[x] != x:
        return find_parent(parent, parent[x])
    return x


def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


v, e = map(int, input().split())
parent = [0] * (v+1)

# Initialize Parent Table
for i in range(1, v+1):
    parent[i] = i

for i in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

print("각 원소가 속한 집합: ", end="")
for i in range(1, v+1):
    print(find_parent(parent, i), end=" ")

print()

print("부모 테이블: ", end="")
for i in range(1, v+1):
    print(parent[i], end=" ")
