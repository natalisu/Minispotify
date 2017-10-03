<?php
require_once('functions.php');
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="">
    <title>MINISPOTIFY ♫</title>

    <!-- JQUERY -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


    <!-- BOOTSTRAP 4 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

    <!-- GOOGLE FONTS & FONT AWESOME -->
    <link href="https://fonts.googleapis.com/css?family=ABeeZee|Amiko|Poppins" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">

    <!-- OMA CSS -->
    <link href="styles.css" type="text/css" rel="stylesheet">

</head>

<body>
    <img src="sky.jpg" id="bg">

    <!-- FONTAWESOME IKONIT:
            FORWARD: <i class="fa fa-forward" aria-hidden="true"></i>
            FAVOURITE: <i class="fa fa-heart fa-2x " aria-hidden="true "></i>
            PREVIOUS SONG: <i class="fa fa-step-backward" aria-hidden="true"></i>
            RANDOMISE: <i class="fa fa-random fa-2x" aria-hidden="true"></i>
            REPEAT: <i class="fa fa-repeat fa-2x" aria-hidden="true"></i>
            NEXT SONG: <i class="fa fa-step-forward fa-2x" aria-hidden="true"></i>
    -->

    <div class="container-fluid">

        <div class="row nowplaying">
            <h1 id="nowp">Now playing</h1>
            <hr>
            
            <h2 id="sname">One Summer's Day</h2><br />
            <h3 id="aname">jinsang</h3>
        </div>

        <!-- NAVBAR -->

        <nav class="navbar navbar-expand fixed-bottom">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html"><i class="navicon fa fa-home fa-3x" aria-hidden="true"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-music" href="#"><i class="navicon fa fa-music fa-3x" aria-hidden="true"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="navicon fa fa-th-list fa-3x" aria-hidden="true"></i></a>
                </li>
            </ul>
        </nav>

        <div id="song-list-container">
            <input type="text" class="song song-search" name="search" placeholder="Search for songs">
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
            <div class="song">
                <span value="name"> Song Name</span>
                <span><img class="song-play-icon" src="play.png"></span>
            </div>
        </div>

        <div class="row musicplayer">
            <div class="playcircle">
                <i class="playbtn fa fa-play fa-4x"></i>
                <img class="albumcover" src="albums/summer.jpg" alt="Card image cap ">
            </div>

            <div class="vz-wrapper">
                <audio id="myAudio" src="music/summer.mp3"></audio>
                <div class="vz-wrapper -canvas">
                    <canvas id="myCanvas" width="550px" height="420px"></canvas>
                </div>
            </div>
        </div>

    </div>
    
    <sub id="wallh">Background from <a target="_blank" id="wh" href="https://whvn.cc/268857">wallhaven &#9733;</a></sub>
    <sub id="bensound">Music from <a target="_blank" id="wh" href="www.bensound.com">bensound.com</a></sub>

    <script src="script.js"></script>
</body>

</html>
