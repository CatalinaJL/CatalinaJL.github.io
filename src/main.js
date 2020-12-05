/*Open gallery function*/

const openGallery = (id) =>{
    closeAll();
    const gallery = document.getElementById('gallery-1');
    const card = document.getElementById('card-1');
    gallery.classList.add('Gallery--active');
    card.classList.add('Card--active');
};

const closeAll =() =>{
    const galleryActv = document.querySelector('.Gallery--active');
    const cardActv = document.querySelector('.Card--active');
    if(galleryActv){
        galleryActv.classList.remove('Gallery--active');
    }
    if(cardActv){
        cardActv.classList.remove('Card--active');
    }
};
  