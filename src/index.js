let myVideo = document.querySelector('.my_video');

function success(stream){
let video_url = URL.createObjectURL(stream);
myVideo.src = video_url;
myVideo.play();
}

function fail(err){
  console.log(err.message);
}

navigator.mediaDevices.getUserMedia({
video : true,
audio : true
})
.then(success)
.catch(fail);
//.then(success,fail);
