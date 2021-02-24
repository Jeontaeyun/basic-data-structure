# Rice Cake Problem
# 파라메트릭 서치 Parametric Search : 최적화 문제를 결정 문제(Yes or No)로 바꾸어 해결하는 기법
# 이런 문제 유형은 적절한 높이를 찾을 때 까지 절단기의 높이를 반복해서 조정하면서
# "현재 이 높이로 자르면 조건을 만족할 수 있는가?"를 확인한 뒤에 조건의 만족 여부에 따라
# 탐색 범위를 좁혀 나가면서 해결할 수 있다.

n, m = map(int, input().split())
data = list(map(int, input().split()))

data.sort()
maxValue = data[n-1]


def binary_search(array, start, end):
    mid = (start + end) // 2

    result = 0
    for length in data:
        if length > mid:
            result += length - mid

    if result == m:
        return mid
    if result > m:
        return binary_search(array, mid + 1, end)
    else:
        return binary_search(array, start, mid - 1)


print(binary_search(data, 0, maxValue))
