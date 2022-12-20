

 function chamada(){  
    var link = document.querySelector('.links');
    const menu = document.querySelector('.menu-toggle')
    .addEventListener('click', (t)=>{
        if(link = document.querySelector('.links').style.display == "none"){
            var link = document.querySelector('.links').style.display = 'flex';
        }else {
            var link = document.querySelector('.links').style.display = 'none';
        }
    })
}

chamada();