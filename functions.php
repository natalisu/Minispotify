<?php

//read json file content
$music = file_get_contents('music.json');
$jsonIterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator(json_decode($music, TRUE)),
    RecursiveIteratorIterator::SELF_FIRST);

foreach($jsonIterator as $key => $value) {
    if (gettype($value) == "song1") {
        foreach ($jsonIterator as $key => $value) {
            echo  $key . ':' . $value . '<br>';
        }
    }
}

?>