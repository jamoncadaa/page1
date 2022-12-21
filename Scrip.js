const btnYes = document.querySelector('#btnYes');
btnYes.addEventListener('click', function (){
    alert('Sabía que te gustaba!!!!❤️');
    alert('Me haces muy feliz!!😍💕');


});

const btnNo = document.querySelector('#btnNo');
btnNo.addEventListener('mouseover', function(){
    const randomx=parseInt(Math.random()*100);
    const randomy=parseInt(Math.random()*100);

    btnNo.style.setProperty('top', randomx+'%');
    btnNo.style.setProperty('left', randomy+'%');
    btnNo.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);


})

