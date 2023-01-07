
let x_Button = document.querySelector('.x_Button');
let description_Bottom = document.querySelector('.description_Bottom');

console.clear();

let tl = gsap.timeline({reversed:true})

if (window.innerWidth <= 800) {
    tl.fromTo('.description_Bottom', 2, 
    {height: '0em', opacity: '0%'}, 
    {height: '22em', opacity: '100%', ease: Power2.easeInOut}); 


} else {

    tl.fromTo('.description_Bottom', 2, 
    {height: '0em', opacity: '0%'}, 
    {height: '19em', opacity: '100%', ease: Power2.easeInOut}); 

    // tl.fromTo('.x_spin', 2, {rotation: 0}, {rotation: 90}, 1);

}

const myAnimation = () => {
    tl.reversed(!tl.reversed())
}

x_Button.addEventListener('click', myAnimation);




