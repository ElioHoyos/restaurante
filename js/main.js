let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showImage(index){
    const offset = -index * 100; //mueve la imagen actual fuera de la vista
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextImage(){
    currentIndex = (currentIndex + 1) % totalImages; //incrementa el indice
    showImage(currentIndex);
}

setInterval(nextImage, 3000); //cambia la imagen cada 3 segundos