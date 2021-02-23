n, k = map(int, input().split())
a_array = list(map(int, input().split()))
b_array = list(map(int, input().split()))

for i in range(k):
    a_array = sorted(a_array)
    b_array = sorted(b_array, reverse=True)
    if a_array[0] < b_array[0]:
        a_array[0], b_array[0] = b_array[0], a_array[0]
    else:
        break

result = 0
for element in a_array:
    result += element

print(result)
