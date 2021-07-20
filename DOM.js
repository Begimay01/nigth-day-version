const $page = document.querySelector('.page')
const $header = document.querySelector('header')

const $card1 = document.getElementById('card-1')
const $card2 = document.getElementById('card-2')
const $card3 = document.getElementById('card-3')

const $btnRead1 = document.getElementById('btn-read-1')
const $btnRead2 = document.getElementById('btn-read-2')
const $btnRead3 = document.getElementById('btn-read-3')


const $btn = document.querySelector('.btn-version') 
const $asideImg = document.querySelector('.aside-img')

const $switchBtn = document.querySelector('.btn-version') 

function switch_Btn() {
    $page.classList.toggle('page-dark')
    $header.classList.toggle('title-dark')
    $card1.classList.toggle('card-dark')
    $card2.classList.toggle('card-dark')
    $card3.classList.toggle('card-dark')

    $btnRead1.classList.toggle('btn-read-dark')
    $btnRead2.classList.toggle('btn-read-dark')
    $btnRead3.classList.toggle('btn-read-dark')
    
    $btn.classList.toggle('btn-version-dark')
    $asideImg.classList.toggle('aside-img-dark')

    if ($asideImg.innerHTML == "./img/Vector.png" ) {
        $asideImg.innerHTML = `<img src="./img/Vector2.png>`
    }
    else { $asideImg = "./img/Vector.png"}


    if ($btn.innerHTML == "Ночная версия сайта") {
        $btn.innerHTML = "Дневная версия сайта";
    } else {
        $btn.innerHTML ="Ночная версия сайта"
    }
}


$switchBtn.addEventListener('click', switch_Btn);