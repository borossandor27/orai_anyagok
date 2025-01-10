def selection_sort(arr):
    for i in range(len(arr)):
        min_index = i # Az aktuális(keresett) elem indexe
        for j in range(i + 1, len(arr)): # Az aktuális elem utáni elemektől kezdve keresünk
            if arr[j] < arr[min_index]: # Ha találunk kisebb elemet, akkor az lesz a minimum
                min_index = j # A minimum indexe
        arr[i], arr[min_index] = arr[min_index], arr[i] # Az aktuális elemet cseréljük a minimum elemmel

# Példa használat
array = [64, 25, 12, 22, 11]
selection_sort(array)
print(array)
