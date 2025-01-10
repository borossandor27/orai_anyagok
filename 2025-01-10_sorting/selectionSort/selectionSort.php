function selectionSort(&$arr) {
    $n = count($arr);
    for ($i = 0; $i < $n - 1; $i++) {
        $minIndex = $i;
        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$minIndex]) {
                $minIndex = $j;
            }
        }
        // Swap
        $temp = $arr[$minIndex];
        $arr[$minIndex] = $arr[$i];
        $arr[$i] = $temp;
    }
}

// Példa használat
$array = [64, 25, 12, 22, 11];
selectionSort($array);
print_r($array);
