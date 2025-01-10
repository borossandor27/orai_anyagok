def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i] # Az aktuális elem
        j = i - 1 # Az aktuális elem előtti elem indexe
        while j >= 0 and arr[j] > key: # Amíg az aktuális elem nagyobb, mint az előtte lévő elem, akkor az lesz a minimum
            arr[j + 1] = arr[j] # Az aktuális elemet cseréljük az előtte lévő elemmel
            j -= 1 # Az aktuális elem előtti elem indexe
        arr[j + 1] = key

# Példa használat
array = [64, 25, 12, 22, 11]
insertion_sort(array)
print(array)
