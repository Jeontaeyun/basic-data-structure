# Law of large number

# How to get first line input
n, m, k = map(int, input().split())
data = list(map(int, input().split()))
solution = 0
count_use_max_value = 0

data.sort(reverse=True)

for i in range(0, m):
    if count_use_max_value >= k:
        solution += data[1]
        count_use_max_value = 0
    else:
        solution += data[0]
        count_use_max_value += 1

print(solution)
