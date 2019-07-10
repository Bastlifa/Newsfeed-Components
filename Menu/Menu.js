/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menu(menuItems)
{
  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  let menuUL = document.createElement("ul");
  menuDiv.appendChild(menuUL);
  menuItems.forEach(item => 
  {
    let tempItem = document.createElement("li");
    tempItem.textContent = item;
    menuUL.appendChild(tempItem);
  })

  let menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", _ =>
  {
    if(!Array.from(menuDiv.classList).includes("menu--open"))
    {
      menuDiv.classList.toggle("menu--open");
      TweenMax.set(menuDiv, {x:0});
      TweenMax.from(menuDiv, .5, {x:-350});
    }
    else
    {
      TweenMax.set(menuDiv, {x:-350});
      TweenMax.from(menuDiv, .5, {x:0, onComplete: _ => menuDiv.classList.toggle("menu--open")});
    }
  })
  document.addEventListener("click", function()
  {
    if (!Array.from(event.target.classList).includes("menu") && !Array.from(event.target.classList).includes("menu-button"))
    {
      
      if(Array.from(menuDiv.classList).includes("menu--open") && !Array.from(event.target.parentNode.classList).includes("menu")
      && !Array.from(event.target.parentNode.parentNode.classList).includes("menu"))
      {
        TweenMax.set(menuDiv, {x:-350});
        TweenMax.from(menuDiv, .5, {x:0, onComplete: _ => menuDiv.classList.toggle("menu--open")});
      }
    }
  })
  return menuDiv
}


let menuEl = menu(menuItems);

let header = document.querySelector(".header");
header.parentNode.insertBefore(menuEl, header.nextSibling);