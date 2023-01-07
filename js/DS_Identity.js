
let x_Button = document.querySelector('.x_Button');
let description_Bottom = document.querySelector('.description_Bottom');

console.clear();

let tl = gsap.timeline({reversed:true})


if (window.innerWidth <= 600) {

    tl.fromTo('.description_Bottom', 2, 
    {height: '0em', opacity: '0%'}, 
    {height: '18em', opacity: '100%', ease: Power2.easeInOut}); 

} else {

    tl.fromTo('.description_Bottom', 2, 
    {height: '0em', opacity: '0%'}, 
    {height: '16em', opacity: '100%', ease: Power2.easeInOut}); 

}


const myAnimation = () => {
    tl.reversed(!tl.reversed())
}

x_Button.addEventListener('click', myAnimation);


