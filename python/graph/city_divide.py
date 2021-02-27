# City Divide Problem
def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


def union_city(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


def check_cycle(parent, a, b):
    if find_parent(parent, a) == find_parent(parent, b):
        return True
    else:
        return False


def sort_edges(edges):
    edges = edges.sort(key=lambda x: x[-1])


def divide_city(edges, cycle_tables):
    cost_list = []
    sort_edges(edges)

    for edge in edges:
        a, b, cost = edge
        if not check_cycle(cycle_tables, a, b):
            union_city(cycle_tables, a, b)
            cost_list.append(cost)

    result = 0
    cost_list.pop(len(cost_list)-1)
    for cost in cost_list:
        result += cost

    return result


v, e = map(int, input().split())
edges = []
cycle_tables = [0] * (v+1)

# Initial Cycle Table
for i in range(1, v+1):
    cycle_tables[i] = i

for _ in range(e):
    a, b, cost = map(int, input().split())
    edges.append((a, b, cost))

result = divide_city(edges, cycle_tables)

print(result)
