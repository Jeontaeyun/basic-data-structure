# Student Problem

n = int(input())


def setting(data):
    return data[1]


data = []
for i in range(n):
    name, score = input().split()
    data.append((name, int(score)))

data = sorted(data, key=setting)

for student in data:
    print(student[0], end=" ")
