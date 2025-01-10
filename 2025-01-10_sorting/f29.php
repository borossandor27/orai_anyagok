<?php
$tomb=array(1,2,3,4,5);
$x=0;
for ($i= 0; $i<5; $i++){
    if($x%2==0){
        $x=$x+$tomb[$i];
    }
    
}
print("x:".$x."");
?>