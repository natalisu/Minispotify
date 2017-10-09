var xmlhttp = new XMLHttpRequest();
var url = "music.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var musics = JSON.parse(this.responseText);
        showMusic(musics);
        addMusic(musics);
        clicked(musics);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

var output = '';
var audio = '';
var image = '';
var id = 1;
var i;
var search = '<input type="text" id="song-search" class="song song-search" name="search" onkeyup="searchSongs()" placeholder="Search for songs">';

function showMusic(music) {
    for(i = 0; i < music.length; i++) {
        output += '<div id="'+ music[i].id +'" class="song song-to-search" onClick="clicked(this.id)"><span class="song-name" value="name">' + 
                music[i].name + '</span><span>' +
                '<img class="song-play-icon" src="play.png"></span></div>';
    }
    document.getElementById("song-list-container").innerHTML = search + output;
}

function clicked(thisId) {  
    id = parseInt(thisId);
    addMusic(music);
    //toi music on nyt undefined ja pitäis saada tuolt alusta mukaan
}

function addMusic(music) {
    console.log('sdasd '+id);
    for(i = 0; i < music.length; i++) {
        if (music[i].id == id) {
        audio +=  '<audio id="myAudio" src="'+ music[i].source +'"></audio>' +
                                                        '<div class="vz-wrapper -canvas">' +
                                                        '<canvas id="myCanvas" width="550px" height="420px"></canvas>' +
                                                        '</div>';
        image += '<i class="playbtn fa fa-play fa-4x"></i>' +
                '<img class="albumcover" src="'+ music[i].img +'" >';
        }
    }
    document.getElementById("vz").innerHTML = audio;
    document.getElementById("circle").innerHTML = image;
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
