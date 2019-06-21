// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));

    this.readButton = domElement.querySelector(".readButton");
    this.readButton.textContent = "read";
    this.readButton.addEventListener("click", this.removeArticle.bind(this));
  }
  expandArticle() 
  {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    if(Array.from(this.domElement.classList).includes("article-open"))
    {
      TweenMax.set(this.domElement, 
      {
        height: "auto"
      });
      TweenMax.from(this.domElement, 1, 
      {
        height: 50
      });
      console.log(this.domElement.classList)
    }
    else
    {
      TweenMax.to(this.domElement, 1, 
      {
        height: 50
      });
      console.log(this.domElement.classList)
    }
    this.readButton.classList.toggle("readBtnHide")
    this.expandButton.textContent === "Click to Expand" ? this.expandButton.textContent = "Click to Collapse" : this.expandButton.textContent = "Click to Expand";
  }
  removeArticle()
  {
    this.domElement.style.display = "none";
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
  iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(elem => new Article(elem));

let createArticleBtn = document.querySelector(".createArticleBtn");
createArticleBtn.addEventListener("click", function()
{
  document.querySelector(".articleFormSection").classList.toggle("articleFormShow");
  createArticleBtn.textContent === "Create Article" ? createArticleBtn.textContent = "Cancel" : createArticleBtn.textContent = "Create Article";
})



function ArticleMaker(titleStr, dateStr, bodyStr)
{
  this.title = titleStr;
  this.date = dateStr;
  this.body = bodyStr;
}
ArticleMaker.prototype.makeDomEl = function()
{
  let articleDiv = document.createElement("div");
  articleDiv.classList.add("article");

  let articleH2 = document.createElement("h2");
  articleH2.textContent = this.title;
  articleDiv.appendChild(articleH2);

  let articleDateP = document.createElement("p");
  articleDateP.classList.add("date");
  articleDateP.textContent = this.date;
  articleDiv.appendChild(articleDateP);
  
  let aBodyParas = this.body.split("\n");
  for(let i=0; i<aBodyParas.length; i++)
  {
    let articlePara = document.createElement("p");
    articlePara.textContent = aBodyParas[i];
    articleDiv.appendChild(articlePara);
  }

  let expandSpan = document.createElement("span");
  expandSpan.classList.add("expandButton");
  expandSpan.textContent = "a"
  articleDiv.appendChild(expandSpan);

  let readSpan = document.createElement("span");
  readSpan.classList.add("readButton");
  readSpan.classList.add("readBtnHide");
  articleDiv.appendChild(readSpan);
  console.log('a')
  document.querySelector(".articles").appendChild(articleDiv);
  return articleDiv;
}


let submitArticleBtn = document.querySelector(".articleSubmit");

submitArticleBtn.addEventListener("click", function()
{
  event.preventDefault();
  let bodyInput = document.querySelector(".bodyTextArea");
  let dateInput = document.querySelector(".articleDateInput");
  let titleInput = document.querySelector(".articleTitleInput");

  if(bodyInput.value == "" || dateInput.value == "" || titleInput.value == "")
  {alert("missing inputs for new article"); return;}
  
  tempArticle = new ArticleMaker(titleInput.value, dateInput.value, bodyInput.value);
  new Article(tempArticle.makeDomEl());
  bodyInput.value = "", dateInput.value = "", titleInput.value = "";
})

