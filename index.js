//3 things
//create containers for twitter / news -DONE
//collate all text images etc into articlePages - in progress
//create 'article.html for dynamic content'

// document.querySelector(".article").innerHTML = articles[0].title;

let currentArticle = document.location.href;
currentArticle = currentArticle.slice(currentArticle.length - 1, currentArticle.length);

function generatePreviews() {
  let html = document.querySelector(".article-previews");

  articlePreviews.forEach((articlePreview, i) => {
    let container = document.createElement("a");
    container.href = "article.html#" + (i + 1);
    let title = document.createElement("h3");
    let image = document.createElement("img");
    image.src = articlePreview.image;
    title.innerHTML = articlePreview.title;
    container.appendChild(title);
    container.appendChild(image);
    html.appendChild(container);
  });
}

function generateArticle() {

  let html = document.querySelector(".article-container");

  //   function getKeyByValue(object, value) {
  //   return Object.keys(object).find(key => object[key] === value);
  // }

  console.log("current article is " + currentArticle);
  if (currentArticle > articles.length) {
    let title = document.createElement("h3");
    title.innerHTML = "Article not found";
    html.appendChild(title);
  } else {
    let article = articles[currentArticle - 1];
    let title = document.createElement("h3");
    title.innerHTML = articlePreviews[currentArticle].title;
    html.appendChild(title);
    for (property in article) {
      console.log(article[property]);

      switch (property) {

        case "text":
          let text = document.createElement("p");
          text.innerHTML = article[property];
          html.appendChild(text);
          break;
        case "image":
          let image = document.createElement("img");
          image.src = article[property];
          html.appendChild(image);
          break;
        default:
      }
    }
  }
}

if (document.querySelector(".article-previews")) {
  console.log("generating previews");
  generatePreviews();
} else {
  generateArticle();
}

console.log(currentArticle);

// articles.forEach((article, i) => {
// 	//create a div with col-lg-4 col-md-6 classes and then go through each attribute
// 	for(const property in article) {
// 		console.log(`${property}: ${article[property]}`);
// 	// 	html += '<a' +  (i == this._slide ? ' class="current"' : '') + ' data-slide="' + i + '" href="#">●</a>';
//  // this._nav.innerHTML = html;
//
//  	//first step create the previews for newsposts, which is easy enough
//
// 	//then when someone clicks on it, it brings them to another page with a dynamically generated page based on what was clicked
//
// }
// });
