function chamada(){  
    var link = document.querySelector('.links').classList.add('#adc');
    var menu = document.querySelector('.menu-toggle')
    .addEventListener('click', ()=>{
        if(link = document.querySelector('.links').style.display == "flex"){
             link = document.querySelector('.links').style.display = 'none';
             let trocaImg = document.querySelector('.menu-toggle > img').src = "img/icon-hamburger.svg";
            } else {
                let trocaImg = document.querySelector('.menu-toggle > img').src = "img/icon-close.svg";
                link = document.querySelector('.links').style.display = 'flex';
            }
        })
    }


chamada();
