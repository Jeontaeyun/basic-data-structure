# Make Team Problem

def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


def check_same_team(parent, a, b):
    if find_parent(parent, a) == find_parent(parent, b):
        print("YES")
    else:
        print("NO")


def union_team(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


v, e = map(int, input().split())
parent = [0] * (v+1)

for i in range(0, v+1):
    parent[i] = i

commands = []
for _ in range(0, e):
    a, b, c = map(int, input().split())
    commands.append((a, b, c))

for command in commands:
    if command[0] == 0:
        union_team(parent, command[1], command[2])
    if command[0] == 1:
        check_same_team(parent, command[1], command[2])
