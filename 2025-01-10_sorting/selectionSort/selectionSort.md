```
function selectionSort(array):
    for i from 0 to array.length - 1:
        minIndex = i
        for j from i + 1 to array.length - 1:
            if array[j] < array[minIndex]:
                minIndex = j
        if minIndex != i:
            swap array[i] and array[minIndex]
```