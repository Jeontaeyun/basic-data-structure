# Disjoint Sets with Path Compression
# 서로소 집합 자료구조에서 find의 성능을 향상시키기 위해 경로 압축(Path Compression) 기법을 사용할 수 있다.

# Path Compression Logic
def find_parent(parent, x):
    if parent[x] != x:
        # 재귀적 호출로 갱신
        parent[x] = find_parent(parent, parent[x])
    # 결국 부모 노드를 가르킨다.
    return parent[x]


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
