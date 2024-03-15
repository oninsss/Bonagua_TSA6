
const porm = document.getElementById('porm');
const saynap = document.getElementById('saynap');
const lagin = document.getElementById('lagin');
const card = document.getElementById('_card');

saynap.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior

    console.log('clicked');
    porm.style.left = '-370px';
    card.style.height = '100%';
});

lagin.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior

    console.log('clicked');
    porm.style.left = '15px';
    card.style.height = '75%';
});

const eForm = document.getElementById('sForm');
const sName = document.getElementById('sName');
const sEmail = document.getElementById('sEmail');
const sPassword = document.getElementById('sPassword');
const sBirthday = document.getElementById('sBirthday');
const sRememberMe = document.getElementById('sRememberMe');



eForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default behavior

    // localStorage.setItem('myObject', {fn: sName.value, em: sEmail.value, pw: sPassword.value, rm: sRememberMe.checked});

    const birthdayString = sBirthday.value;

    localStorage.setItem('fn', sName.value);
    localStorage.setItem('em', sEmail.value);
    localStorage.setItem('pw', sPassword.value);
    localStorage.setItem('bd', birthdayString);
    localStorage.setItem('rm', sRememberMe.checked);

    console.log('Form submitted');
    window.location.href = 'SignedIn/index.html';

});



const loverPic = 'https://lastfm.freetls.fastly.net/i/u/ar0/d3f083370c371a3ba1cddafaf193c27d.jpg';
const lover = new Audio('./Assets/audios/TS_Lover.mp3');

const greedyPic = "https://linkstorage.linkfire.com/medialinks/images/5e55208a-c4d8-43d4-8b53-6f3b3a5e5488/artwork-440x440.jpg";
const greedy = new Audio('./Assets/audios/TM_Greedy.mp3');

const EOBPic = "https://i1.sndcdn.com/artworks-esH8Eoax6ZpL-0-t500x500.jpg";
const EOB = new Audio('./Assets/audios/DJO_EndOfBeginning.mp3');

const play = document.getElementById('_play');
const prev = document.getElementById('_prev');
const next = document.getElementById('_next');

const songName = document.getElementById('songName');
const singerName = document.getElementById('singerName');
const imeyds = document.getElementById('imeyds');

const songs = [{ele:lover, audioName: 'Lover', pic: loverPic, singer: 'Taylor Swift'}, 
            {ele:greedy, audioName: 'Greedy', pic: greedyPic, singer: 'Tate Mcrae'}, 
            {ele:EOB, audioName: 'End of Beginning', pic: EOBPic, singer: 'Djo'}];

// const prevSong
let current = 0
let currSong = songs[current].ele;
songName.textContent = songs[current].audioName;
singerName.textContent = songs[current].singer;
imeyds.src = songs[current].pic;

const updateSong = (action) => {
    if (action === 'next') {
        currSong.pause();
        currSong.currentTime = 0;
        if (current === songs.length - 1) {
            current = 0;
        } else {
            current++;
        }
        singerName.innerText = songs[current].singer;
        imeyds.src = songs[current].pic;


        // console.log('currSong');
    }

    if (action === 'prev') {
        currSong.pause();
        currSong.currentTime = 0;
        if (current === 0) {
            current = songs.length - 1;
        } else {
            current--;
        }
        singerName.innerText = songs[current].singer;
        imeyds.src = songs[current].pic;

        // console.log('currSong');
    }

    currSong = songs[current].ele;
    songName.textContent = songs[current].audioName;
};

const playPauseSong = () => {
    if (currSong.paused){
        currSong.play();
        play.querySelector('i').className = 'bx bx-pause';
    } else {
        currSong.pause();
        play.querySelector('i').className = 'bx bx-play';
    }
}

play.addEventListener('click', function(event) {
    playPauseSong();

});

next.addEventListener('click', function(event) {
    updateSong('next');
    playPauseSong();
});

prev.addEventListener('click', function(event) {
    updateSong('prev');
    playPauseSong();
});