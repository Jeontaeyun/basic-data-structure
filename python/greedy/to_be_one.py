# To be One Problem

n, m = map(int, input().split())
solution = 0

while True:
    if n == 1:
        break
    if n % m == 0:
        n //= m
        solution += 1
    else:
        n -= 1
        solution += 1


print(solution)
