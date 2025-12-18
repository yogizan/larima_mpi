window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script2 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script3 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script4 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script5 = function()
{
  if (!window.__bgMusic) {
    var audio = new Audio("story_content/audio/backsound.mp3");
    audio.loop = true;

    var player = GetPlayer();
    audio.volume = player.GetVar("MusikVolume") / 100;

    window.__bgMusic = audio;
    window.__globalAudio = [audio];

    audio.play();
}
}

window.Script6 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script7 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script8 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script9 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script10 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script11 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script12 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script13 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script14 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script15 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script16 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script17 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script18 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script19 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script20 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script21 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script22 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script23 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script24 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script25 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script26 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script27 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script28 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script29 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script30 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script31 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script32 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script33 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script34 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script35 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script36 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script37 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script38 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script39 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script40 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script41 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script42 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script43 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script44 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script45 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script46 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script47 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script48 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script49 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script50 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script51 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script52 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script53 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script54 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script55 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script56 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script57 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script58 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script59 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script60 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script61 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script62 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script63 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script64 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script65 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script66 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script67 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script68 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script69 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script70 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script71 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script72 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script73 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script74 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script75 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script76 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script77 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script78 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script79 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script80 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script81 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script82 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script83 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script84 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script85 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script86 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script87 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script88 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script89 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script90 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script91 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script92 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script93 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script94 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script95 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script96 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script97 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script98 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script99 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script100 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script101 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script102 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script103 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script104 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script105 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script106 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script107 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script108 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script109 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script110 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script111 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script112 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script113 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script114 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script115 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script116 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script117 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script118 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script119 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script120 = function()
{
  if (window.__bgMusic) {
    window.__bgMusic.pause();
    window.__bgMusic.currentTime = 0;
}
}

window.Script121 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script122 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script123 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script124 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script125 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script126 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script127 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script128 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script129 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script130 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script131 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script132 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script133 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script134 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script135 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script136 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script137 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script138 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script139 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script140 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script141 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script142 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script143 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script144 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script145 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script146 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script147 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script148 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script149 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script150 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script151 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script152 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script153 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script154 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script155 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script156 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script157 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script158 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script159 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script160 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script161 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script162 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script163 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script164 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script165 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script166 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script167 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script168 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script169 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script170 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script171 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script172 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script173 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script174 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script175 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script176 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script177 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script178 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script179 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script180 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script181 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script182 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script183 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script184 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script185 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script186 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script187 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script188 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script189 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script190 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script191 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script192 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script193 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script194 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script195 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script196 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script197 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script198 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script199 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script200 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script201 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script202 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script203 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script204 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script205 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script206 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script207 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script208 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script209 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script210 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script211 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script212 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script213 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script214 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script215 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script216 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script217 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script218 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script219 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script220 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script221 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script222 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script223 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script224 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script225 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script226 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script227 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script228 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script229 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script230 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script231 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script232 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script233 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script234 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script235 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script236 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script237 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script238 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script239 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script240 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script241 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script242 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script243 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script244 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script245 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script246 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script247 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script248 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script249 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script250 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script251 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script252 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script253 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script254 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script255 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script256 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script257 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script258 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script259 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script260 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script261 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script262 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script263 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script264 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script265 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script266 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script267 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script268 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script269 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script270 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script271 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script272 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script273 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script274 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script275 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script276 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script277 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script278 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script279 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script280 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script281 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script282 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script283 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script284 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script285 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script286 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script287 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script288 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script289 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script290 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script291 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script292 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script293 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script294 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script295 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script296 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script297 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script298 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script299 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script300 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script301 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script302 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script303 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script304 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script305 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script306 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script307 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script308 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script309 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script310 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script311 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script312 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script313 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script314 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script315 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script316 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script317 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script318 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script319 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script320 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script321 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script322 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script323 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script324 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script325 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script326 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script327 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script328 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script329 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script330 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script331 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script332 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script333 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script334 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script335 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script336 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script337 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script338 = function()
{
  var snd = new Audio("pop.mp3");
snd.play();
}

window.Script339 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script340 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script341 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script342 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script343 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script344 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script345 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script346 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script347 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script348 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script349 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script350 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script351 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script352 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script353 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script354 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script355 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script356 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script357 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script358 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script359 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script360 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script361 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script362 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script363 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script364 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script365 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script366 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script367 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script368 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script369 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script370 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script371 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script372 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script373 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script374 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script375 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script376 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script377 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script378 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script379 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script380 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script381 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script382 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script383 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script384 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script385 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script386 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script387 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script388 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script389 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script390 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script391 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script392 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script393 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script394 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script395 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script396 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script397 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script398 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script399 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script400 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script401 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script402 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script403 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script404 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script405 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script406 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script407 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script408 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script409 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script410 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script411 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script412 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script413 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script414 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script415 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script416 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script417 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script418 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script419 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script420 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script421 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script422 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script423 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script424 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script425 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script426 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script427 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script428 = function()
{
  var snd = new Audio("touch.mp3");
snd.play();
}

window.Script429 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script430 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script431 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script432 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script433 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script434 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script435 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script436 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script437 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script438 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script439 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script440 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script441 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script442 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script443 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script444 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script445 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script446 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script447 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script448 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script449 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script450 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script451 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script452 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script453 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script454 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script455 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script456 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script457 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script458 = function()
{
  var snd = new Audio("click.mp3");
snd.play();

}

window.Script459 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script460 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script461 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script462 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script463 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script464 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script465 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script466 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script467 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script468 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script469 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script470 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script471 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script472 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script473 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script474 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script475 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script476 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script477 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script478 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script479 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script480 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script481 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script482 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script483 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script484 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script485 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script486 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script487 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script488 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script489 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script490 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script491 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script492 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script493 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script494 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script495 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script496 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script497 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script498 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script499 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script500 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script501 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script502 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script503 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script504 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script505 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script506 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script507 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script508 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script509 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script510 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script511 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script512 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script513 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script514 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script515 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script516 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script517 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script518 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script519 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script520 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script521 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script522 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script523 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script524 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script525 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script526 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script527 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script528 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script529 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script530 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script531 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script532 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script533 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script534 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script535 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script536 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script537 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script538 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script539 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script540 = function()
{
  var player = GetPlayer();
var vol = player.GetVar("MusikVolume") / 100;

window.__globalAudio = window.__globalAudio || [];

window.__globalAudio.forEach(function(a){
    if (a) a.volume = vol;
});
}

window.Script541 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script542 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script543 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script544 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

window.Script545 = function()
{
  var snd = new Audio("click.mp3");
snd.play();
}

};
