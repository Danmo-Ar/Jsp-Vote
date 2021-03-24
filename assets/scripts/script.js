
/*  dom aniomation */ 
const toggle = document.querySelector('.toggle');
const showModal = document.getElementById('show');
const modal = document.getElementById('modal');
const close = document.querySelectorAll('.close')[0];
const close2 = document.querySelectorAll('.close')[1];
const inscription = document.querySelector('.form1');
const connexion = document.querySelector('.form2');
const slide = document.getElementById('slide');
const inverseSlide = document.getElementById('inverseslide');


toggle.addEventListener('click' , () => document.body.classList.toggle('shownav'));
showModal.addEventListener('click' , () => modal.classList.add('show-modal'));
close.addEventListener('click' , () => modal.classList.remove('show-modal'));
close2.addEventListener('click' , () => modal.classList.remove('show-modal'));
modal.addEventListener('click' , (e) => e.target == modal ? modal.classList.remove('show-modal') : null );


/* sile */ 
slide.addEventListener("click" , () => {
    inscription.style.left = "-317px";
    connexion.style.left = "-317px";  
})
inverseSlide.addEventListener("click" , () => {
    inscription.style.left = "0";
    connexion.style.left = "0";  
})





/* fall enveloppe */ 


setInterval(createLeaf, 300);
function createLeaf() {

    const leaf = document.createElement('i');
    const header = document.querySelector('.header');
    leaf.classList.add('fas');
    leaf.classList.add('fa-envelope');
    leaf.style.left = Math.floor(Math.random() * window.innerWidth - 80) + 'px';
    leaf.style.animationDuration = Math.random() * 7 + 7 + 's';
    leaf.style.opacity = Math.random();
    leaf.style.fontSize = Math.random() * 15 + 10 + 'px';
    const rot = Math.random() * 1 + 20 + 'deg';
    leaf.style.transform = 'rotate(' + rot + ')';
    header.prepend(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 14000)
};

const nav = document.getElementById('nav');
const i = document.querySelector('.i');
console.log();

if(window.innerWidth <= 1100){
    toggle.addEventListener('click' , () =>{
        nav.classList.toggle('show-nav');
         i.classList.toggle("fa-bars");
         i.classList.toggle("fa-times");
    } );
}