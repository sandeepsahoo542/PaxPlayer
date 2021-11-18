const songArray = [
  [
    {
      songName: "Enemy",
      songCreator: "Imagine Dragons",
      songUrl: "./media/songs/genre1/Enemy.mp3",
      songCoverUrl: "./media/songCover/genre1/Enemy.jpg",
      duration: "3:33"
    },
    {
      songName: "Follow You",
      songCreator: "Imagine Dragons",
      songUrl: "./media/songs/genre1/FollowYou.mp3",
      songCoverUrl: "./media/songCover/genre1/FollowYou.jpg",
      duration: "2:56"
    },
    {
      songName: "Natural",
      songCreator: "Imagine Dragons",
      songUrl: "./media/songs/genre1/Natural.mp3",
      songCoverUrl: "./media/songCover/genre1/Natural.jpg",
      duration: "3:09"
    }
  ],
  [
    {
      songName: "Butter",
      songCreator: "BTS",
      songUrl: "./media/songs/genre2/butter.mp3",
      songCoverUrl: "./media/songCover/genre2/butter.png",
      duration: "3:02"
    },
    {
      songName: "Harleys In Hawaii",
      songCreator: "Katy Perry",
      songUrl: "./media/songs/genre2/harley.mp3",
      songCoverUrl: "./media/songCover/genre2/harley.jpg",
      duration: "3:14"
    },
    {
      songName: "Sucker",
      songCreator: "Jonas Brothers",
      songUrl: "./media/songs/genre2/sucker.mp3",
      songCoverUrl: "./media/songCover/genre2/sucker.jpg",
      duration: "3:19"
    }
  ],
  [
    {
      songName: "ILY",
      songCreator: "Surf Mesa",
      songUrl: "./media/songs/genre3/ily.mp3",
      songCoverUrl: "./media/songCover/genre3/ily.jpg",
      duration: "2:57"
    },
    {
      songName: "Photograph",
      songCreator: "Ed Sheeran",
      songUrl: "./media/songs/genre3/photograph.mp3",
      songCoverUrl: "./media/songCover/genre3/photograph.jpg",
      duration: "4:34"
    },
    {
      songName: "Sunflower",
      songCreator: "Post Malone",
      songUrl: "./media/songs/genre3/sunflower.mp3",
      songCoverUrl: "./media/songCover/genre3/sunflower.jpg",
      duration: "2:41"
    }
  ],
  [
    {
      songName: "Green Chair",
      songCreator: "Diego Nava",
      songUrl: "./media/songs/genre4/music1.mp3",
      songCoverUrl: "./media/songCover/genre4/cover1.jpg",
      duration: "1:33"
    },
    {
      songName: "Dance with Me",
      songCreator: "Ahjay Stelino",
      songUrl: "./media/songs/genre4/music2.mp3",
      songCoverUrl: "./media/songCover/genre4/cover2.jpg",
      duration: "2:22"
    },
    {
      songName: "Gimme that Bottle",
      songCreator: "Michael Ramir",
      songUrl: "./media/songs/genre4/music3.mp3",
      songCoverUrl: "./media/songCover/genre4/cover3.jpg",
      duration: "1:54"
    },
    {
      songName: "Slow strings",
      songCreator: "Rishav Pal",
      songUrl: "./media/songs/genre4/music4.mp3",
      songCoverUrl: "./media/songCover/genre4/cover4.jpg",
      duration: "4:12"
    }
  ]
];

const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prevSong');
const play = document.getElementById('play');
const next = document.getElementById('nextSong');
const genres = document.getElementsByClassName('genreBtn');
var songIndex = 0;
var genreIndex = 0;

loadSong(songArray[genreIndex][songIndex]);

function loadSong(song) {
  cover.src = song.songCoverUrl;
  disc.src = song.songUrl;
  title.textContent = song.songName;
  artist.textContent = song.songCreator;
  duration.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia() {
  if (disc.paused)
    disc.play();
  else
    disc.pause();
}

// Update icon
function updatePlayPauseIcon() {
  if (disc.paused)
    play.className = "fas fa-play-circle fa-2xl";
  else
    play.className = "fas fa-pause-circle fa-2xl";
}

// Update progress bar
function updateProgress() {
  progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';
  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10)
    seconds = '0' + seconds;
  timer.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
  progress.style.width = 0 + '%';
  timer.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong() {
  if (songIndex === 0)
    songIndex = songArray[genreIndex].length - 1;
  else
    songIndex = songIndex - 1;
  const isDiscPlayingNow = !disc.paused;
  loadSong(songArray[genreIndex][songIndex]);
  resetProgress();
  if (isDiscPlayingNow)
    playPauseMedia();
}

// Go to next song
function gotoNextSong(playImmediately) {
  if (songIndex === songArray[genreIndex].length - 1)
    songIndex = 0;
  else
    songIndex = songIndex + 1;
  const isDiscPlayingNow = !disc.paused;
  loadSong(songArray[genreIndex][songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately)
    playPauseMedia();
}

// Change song progress when clicked on progress bar
function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));

// Go to next song when next button clicked
prev.addEventListener('click', gotoPreviousSong);

// Go to previous song when previous button clicked
next.addEventListener('click', gotoNextSong.bind(null, false));

// Move to different place in the song
progressContainer.addEventListener('click', setProgress);

//genre event listeners
for (var i = 0; i < genres.length; i++) {
  genres[i].addEventListener("click", (e)=>{
    genreIndex = (Number)(e.target.innerHTML) - 1; 
    songIndex = 0; 
    loadSong(songArray[genreIndex][songIndex]); 
    updatePlayPauseIcon(); 
    updatePlayPauseIcon();
  });
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}