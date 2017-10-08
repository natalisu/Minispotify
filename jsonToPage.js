var xmlhttp = new XMLHttpRequest();
var url = "music.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var musics = JSON.parse(this.responseText);
        showMusic(musics);
        //playMusic(musics);
        addMusic(musics);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

var output = '';
var audio = '';
var image = '';
var i;
var search = '<input type="text" class="song song-search" name="search" placeholder="Search for songs">';

function showMusic(music) {
    for(i = 0; i < music.length; i++) {
        output += '<div id="'+ music[i].id +'" class="song" onClick="clicked(this.id)"><span value="name">' + 
                music[i].name + '</span><span>' +
                '<img class="song-play-icon" src="play.png"></span></div>';
    }
    document.getElementById("song-list-container").innerHTML = search + output;
}

function clicked(thisId) { 
    console.log('jihuuu '+thisId);  
}

function addMusic(music, thisId) {
    for(i = 0; i < music.length; i++) {
        //KLIKATUN BIISIN ID TÄNNE (thisId)
        if (music[i].id === '3') {
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

