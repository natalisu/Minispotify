var xmlhttp = new XMLHttpRequest();
var url = "music.json";
var output = '';
var audio = '';
var image = '';
var nowPlaying = '';
var id = 0;
var idVz, idImage, idNowPlaying;
var i;
var search = '<input type="text" id="song-search" class="song song-search" name="search" onkeyup="searchSongs()" placeholder="Search for songs">';

//LUKEE JSON TIEDOSTON
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        musics = JSON.parse(this.responseText);
        showMusic(musics);
        addMusic(musics);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//NÄYTTÄÄ BIISIT LISTAUKSESSA
function showMusic(music) {
    for(i = 1; i < music.length; i++) {
        output += '<div id="'+ music[i].id +'" class="song song-to-search" onClick="clicked(this.id)"><span class="song-name" value="name">' + 
                music[i].name + '</span><span>' +
                '<img class="song-play-icon" src="play.png"></span></div>';
    }
    document.getElementById("song-list-container").innerHTML = search + output;
}

//TSEKKAA KLIKATUN BIISIN ID:N
function clicked(thisId) {  
    id = parseInt(thisId);
    addMusic(musics);
}

//LISÄÄ KLIKATUN BIISIN PLAYERIIN
function addMusic(music) {
    for(i = 0; i < music.length; i++) {
        if (music[i].id == id) {
        audio +=  '<audio id="myAudio" src="'+ music[i].source +'"></audio>' +
                    '<div class="vz-wrapper -canvas">' +
                    '<canvas id="myCanvas" width="550px" height="420px"></canvas>' +
                    '</div>';
        image += '<i class="playbtn fa fa-play fa-4x"></i>' +
                    '<img class="albumcover" src="'+ music[i].img +'" >';
        nowPlaying += '<h1 id="nowp">Now playing</h1><hr>' +
                    '<h2 id="sname">'+ music[i].name +'</h2><br />' +
                    '<h3 id="aname">'+ music[i].aname +'</h3>';
        }
    }
    
    if (id == 0) {
        document.getElementById("vz").innerHTML = audio;
        document.getElementById("circle").innerHTML = image;
        document.getElementById("nowplaying").innerHTML = nowPlaying;
    } else {
        console.log(id);
        //elikkäs tänne pitäis saada musa tulostettua playeriin niin että noiden elementtien vanha sisältö replacetaan
/*        idVz = document.getElementById("vz");
        idVz.innerHTML = idVz.innerHTML.replace(idVz, audio);

        idImage = document.getElementById("circle");
        idImage.innerHTML = idImage.innerHTML.replace(idImage, image);

        idNowPlaying = document.getElementById("nowplaying");
        idNowPlaying.innerHTML = idNowPlaying.innerHTML.replace(idNowPlaying, nowPlaying);*/
    }
}


//HAKUTOIMITO
function searchSongs() {
    var input, filter, songwrapper, songname, span, i;
    input = document.getElementById("song-search");
    filter = input.value.toUpperCase();
    songwrapper = document.getElementById("song-list-container");
    songname = songwrapper.getElementsByClassName("song-to-search");
    for (i = 0; i < songname.length; i++) {
        span = songname[i].getElementsByClassName("song-name")[0];
        if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
            songname[i].style.display = "";
        } else {
            songname[i].style.display = "none";
        }
    }
}
