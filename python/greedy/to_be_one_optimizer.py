n, k = map(int, input().split())
solution = 0

while True:
    if n == 1:
        break

    if n % k == 0:
        solution += 1
        n //= k
    else:
        if n > k:
            solution += n % k
            n -= n % k
        else:
            solution += 1
            n -= 1

print(solution)
