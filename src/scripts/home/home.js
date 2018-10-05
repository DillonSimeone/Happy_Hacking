// function display the next image from the array

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function goToBamsarts(){
  window.location.href = 'bamsarts/index.html';
}

function goToHalloween(){
  window.location.href = 'haloween.html';
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 1000);
}

var images = [], x = -1;
images[0] = "images/home/image1.jpg";
images[1] = "images/home/image2.jpg";
images[2] = "images/home/image3.jpg";

function animatedScroll(elem) {
    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 800);
}
