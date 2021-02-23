# Top to bottom problem

n = int(input())
data = [int(input()) for _ in range(n)]

for i in range(len(data)):
    for j in range(i+1, len(data)):
        if data[i] < data[j]:
            data[i], data[j] = data[j], data[i]

for i in data:
    print(i, end=" ")
