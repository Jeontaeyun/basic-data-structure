n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort(reverse=True)

chunk = data[0] * k + data[1]
chunk_number = m // (k+1)
rest_number = m % (k+1)

solution = chunk * chunk_number + rest_number * data[0]

print(solution)
