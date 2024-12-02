/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".popular__container", {

    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },

         //Responsive breakpoints

    breakpoints: {
        // when windows width is >= 600
        600: {
            slidesPerView: 2
        },
    
        // when windows width is >= 1024
        1024: {
            slidesPerView: 3
        },
    }
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
    }

    
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]') /*Selecionar todas as section com id*/

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('activate-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('activate-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)



/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //Quando o scroll for maior que 350 no viewport, adicionar a class do CSS
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true para quando o usuario retornar a sessão exibir a animação novamente
})

sr.reveal(`.home__title, .popular__container, .appointment-container, .footer__container`)
sr.reveal(`.home__description, .footer__info`, {delay:500})
sr.reveal(`.home__search`, {delay:600})
sr.reveal(`.home__value`, {delay:700})
sr.reveal(`.home__images`, {delay:800, origin:'bottom'})
sr.reveal(`.logos__img`, {interval:100})
sr.reveal(`.value__images, .contact__content`, {origin:'left'})
sr.reveal(`.value__content, .contact__images`, {origin:'right'})

/*=============== CONJUNTO DE IMAGES ===============*/
  const mediaSets = {
    1: [
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (1).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (2).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (3).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (4).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (5).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (6).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (7).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (8).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (9).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (10).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (11).jpeg" },
      { type: "image", src: "assets/images/workCafeSantander/workCafeSantander (12).jpeg" }
    ],
    2: [
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (1).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (2).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (3).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (4).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (5).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (6).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (7).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (8).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (9).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (10).jpeg" },
      { type: "image", src: "assets/images/plataformaSantanderBomRetiro/santanderBomretiro (11).jpeg" }
    ],
    3: [
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (1).jpeg" },
      { type: "video", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (1).mp4" },
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (2).jpeg" },
      { type: "video", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (2).mp4" },
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (3).jpeg" },
      { type: "video", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (3).mp4" },
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (4).jpeg" },
      { type: "video", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (4).mp4" },
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (5).jpeg" },
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (6).jpeg" },
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (7).jpeg" },
      { type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (8).jpeg" },
      {type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (9).jpeg" },
      {type: "image", src: "assets/images/SantanderReformageralAgênciaNoveDeJulho/noveJulho (10).jpeg" }
      
    ],
    4: [
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai.jpeg" },
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai (1).jpeg" },
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai (2).jpeg" },
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai (3).jpeg" },
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai (4).jpeg" },
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai (5).jpeg" },
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai (6).jpeg" },
        { type: "image", src: "assets/images/reformaSantandeLapaBaraoDeJundiai/lapaBaraoDeJundiai (7).jpeg" },
      ],
      5: [
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (1).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (2).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (3).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (4).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (5).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (6).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (7).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (8).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (9).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (10).jpeg" },
        { type: "image", src: "assets/images/escolaMinasGerais/escolaMinasGerais (11).jpeg" },
      ]
  };
/*=============== CARREGAR IMAGES E VIDEOS ===============*/
  function carregaMedia(setNumber) {
    const mediaGrid = document.getElementById("mediaGrid");
    mediaGrid.innerHTML = ""; 
    const mediaItems = mediaSets[setNumber];

    // Divide os itens em 4 colunas
    const columns = [[], [], [], []];
    mediaItems.forEach((media, index) => {
      columns[index % 4].push(media);
    });

    // Cria o layout das colunas
    columns.forEach(colItems => {
      const column = document.createElement("div");
      column.className = "column";
      colItems.forEach(media => {
        if (media.type === "image") {
          const img = document.createElement("img");
          img.src = media.src;
          column.appendChild(img);
        } else if (media.type === "video") {
          const video = document.createElement("video");
          video.src = media.src;
          video.controls = true;
          column.appendChild(video);
        }
      });
      mediaGrid.appendChild(column);
    });
  }
  carregaMedia(1);

/*=============== SLIDE DOS CERTIFICADOS ===============*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}