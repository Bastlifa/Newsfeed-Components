// There's got to be cleaner logic...

const menuOpen = () =>
{
  if(Array.from(menu.classList).includes("menu--open"))
  {
    TweenMax.to(".menu--open", 1, 
    {
      x: 350,
      ease: Power3.easeOut
    })
  }
}

const menuClose = () =>
{
  if(Array.from(menu.classList).includes("menu--open"))
  {
    TweenMax.to(".menu", 1, 
    {
      x: 0,
      ease: Power2.easeOut
    })
    menu.classList.toggle("menu--open");
  }
}


const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  console.log(menu.classList)
  if(!Array.from(menu.classList).includes("menu--open"))
  {
    menu.classList.toggle("menu--open");
    menuOpen()
  }
  else
  {
    menuClose();
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", function() {toggleMenu();});

document.addEventListener("click", function()
{
  if (!Array.from(event.target.classList).includes("menu") && !Array.from(event.target.classList).includes("menu-button"))
  {
    menuOpen();
    menuClose();
  }
})


//if (!Array.from(menu.classList).includes("menu--open"))
// {
//   menu.classList.toggle("menu--open");
//   TweenMax.from(".menu--open", 1, 
//   {
//     x: -350,
//     ease: Power3.easeOut
//   })
// }
// else
// {
//   TweenMax.to($(".menu"), 1, 
//   {
//     x: -350,
//     ease: Power3.easeOut
//   })
//   menu.classList.toggle("menu--open");
// }