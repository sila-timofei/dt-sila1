const doc = document.querySelector('.document');
const photos = document.querySelectorAll('.gallery__photo');

const lightbox = document.querySelector('.modal');
const lightboxImg = document.querySelector('.lightbox__image');

const btnClose = document.querySelector('.modal__btn-close');
const btnNext = document.querySelector('.lightbox__arrow_right');
const btnPrev = document.querySelector('.lightbox__arrow_left');

const images = [...photos].map(photo => photo.dataset.src);

let currentIndex = 0;


/* ---------- предзагрузка ---------- */

images.forEach(src => {
    const img = new Image();
    img.src = src;
});


/* ---------- открыть ---------- */

function openLightbox(index){

    currentIndex = index;

    lightboxImg.style.opacity='0';

    lightbox.classList.add('active');

    doc.style.overflow='hidden';

    btnClose.style.opacity='1';
    btnClose.style.pointerEvents='all';

    lightbox.style.opacity='1';
    lightbox.style.pointerEvents='all';

    const img=new Image();

    img.src=images[currentIndex];

    img.onload=()=>{

        lightboxImg.src=img.src;

        requestAnimationFrame(()=>{

            lightboxImg.style.opacity='1';

        });

    };

}


/* ---------- закрыть ---------- */

function closeLightbox(){

    lightbox.classList.remove('active');

    doc.style.overflow='';

    lightbox.style.opacity='';
    lightbox.style.pointerEvents='';

    btnClose.style.opacity='';
    btnClose.style.pointerEvents='';

}


/* ---------- смена ---------- */

function changeImage(direction){

    currentIndex =
        (currentIndex + direction + images.length)
        %
        images.length;


    lightboxImg.style.opacity='0';


    setTimeout(()=>{

        lightboxImg.src=
        images[currentIndex];

        requestAnimationFrame(()=>{

            lightboxImg.style.opacity='1';

        });

    },150);

}


function nextImage(){

    changeImage(1);

}


function prevImage(){

    changeImage(-1);

}


/* ---------- клики ---------- */

photos.forEach((photo,index)=>{

    photo.addEventListener(
        'click',
        ()=>openLightbox(index)
    );

});


btnClose.addEventListener(
    'click',
    closeLightbox
);

btnNext.addEventListener(
    'click',
    nextImage
);

btnPrev.addEventListener(
    'click',
    prevImage
);


/* ---------- клик мимо ---------- */

lightbox.addEventListener(
    'click',
    e=>{

        if(
            e.target===lightbox
        ){

            closeLightbox();

        }

});


/* ---------- клавиатура ---------- */

document.addEventListener(
    'keydown',
    e=>{

        if(
            !lightbox.classList.contains('active')
        ) return;


        if(e.key==='Escape')
            closeLightbox();

        if(e.key==='ArrowRight')
            nextImage();

        if(e.key==='ArrowLeft')
            prevImage();

});