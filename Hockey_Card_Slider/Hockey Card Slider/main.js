var indexValue = 1;
showImg(indexValue);

const marner_img = "images/Mitch-Marner-stats.jpg";
const spezza_img = "images/Jason-Spezza-stats.jpg";


function side_slide(e) {
    showImg(indexValue += e);
}

function showImg(e) {

    var i;

    const img = document.querySelectorAll('#front');
    const imgs = document.querySelectorAll('#card_face--back');

    
    
    
    if (e > img.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";

    if (document.getElementById("front").style.display  == "block") {
        document.getElementById("back").src="images/Auston-Matthews-stats.jpg";
    }
    if (document.getElementById("front").nextElementSibling.style.display  == "block") {
        document.getElementById("back").src="images/Mitch-Marner-stats.jpg";
    }
    if (document.getElementById("front").nextElementSibling.nextElementSibling.style.display  == "block") {
        document.getElementById("back").src="images/Jason-Spezza-stats.jpg";
    }

    
}

const card = document.querySelector('#card_inner');






card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
    
});