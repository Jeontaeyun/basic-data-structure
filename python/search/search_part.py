# Search Part Problem

n = int(input())
part_list = list(map(int, input().split()))
m = int(input())
require_list = list(map(int, input().split()))


def binary_search(array, target, start, end):
    mid = (start + end) // 2
    if start >= end:
        return "no"
    if array[mid] == target:
        return "yes"
    if array[mid] > target:
        return binary_search(array, target, start,  mid - 1)
    else:
        return binary_search(array, target, mid + 1, end)
    return "no"


part_list = sorted(part_list)
result = [binary_search(part_list, i, 0, n) for i in require_list]

for answer in result:
    print(answer, end=" ")
