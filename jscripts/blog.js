// Defines footer
const footer = document.getElementById("blog-footer");

// Creating  title of blog
const title = document.createElement("h1");
title.textContent = "Adopt a dog blog";
title.id = "main-content";
title.className = "blog-title";
document.body.insertBefore(title, footer);

// Creating blog container
const container = document.createElement("div");
container.className = "blog-container";
document.body.insertBefore(container, footer);

// Creating objects for blogs
const blogs = [
  {
    imgSrc: "images/blog-1.jpg",
    imgAlt: "a travler person with a dog on top of a mountain ",
    blogTitle: "Traveling With Your Dog",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adisdolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cumvolore, undipsa doloreium hillupta aut es ut alitatuscit ommossumharitatur arum qui officae videbiti corporeium faccull oribus esquidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laboreniaque doluptur, con et labor abor sant poreperum dio quat que doluptaturaut voluptassim quisciatquam ea ad qui con nes cus esere dolut hictoteni solutenis alit ulparume nonseca estorer spernam voluptassimquisciatquam ea ad qui con nes cus esere dolut hicto teni solutenisalit ulparume nonseca estorer spernam.",
  },
  {
    imgSrc: "images/blog-2.jpg",
    imgAlt: "dog walker with four dogs in a park ",
    blogTitle: "How To Walk Multiple Dogs",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adisdolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cumvolore, undipsa doloreium hillupta aut es ut alitatuscit ommossumharitatur arum qui officae videbiti corporeium faccull oribus esquidignis ipietus explam sus am aut amet ant fugiatum, utem nonreptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laboreniaque doluptur, con et labor abor sant poreperum dio quat que doluptaturaut voluptassim quisciatquam ea ad qui con nes cus esere dolut hictoteni solutenis alit ulparume nonseca estorer spernam voluptassimquisciatquam ea ad qui con nes cus esere dolut hicto teni solutenisalit ulparume nonseca estorer spernam.",
  },
  {
    imgSrc: "images/blog-3.jpg",
    imgAlt: " a person training a dog",
    blogTitle: "Teach Your Dog To Fetch!",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adisdolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cumvolore, undipsa doloreium hillupta aut es ut alitatuscit ommossumharitatur arum qui officae videbiti corporeium faccull oribus esquidignis ipietus explam sus am aut amet ant fugiatum, utem nonreptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laboreniaque doluptur, con et labor abor sant poreperum dio quat que doluptaturaut voluptassim quisciatquam ea ad qui con nes cus esere dolut hictoteni solutenis alit ulparume nonseca estorer spernam voluptassimquisciatquam ea ad qui con nes cus esere dolut hicto teni solutenisalit ulparume nonseca estorer spernam.",
  }
];

// loops objects
for (let x = 0; x < blogs.length; x += 1) {
    const object = blogs[x];

    const blogImage = document.createElement("div");
    blogImage.className = "blog-box1";
    container.appendChild(blogImage);

    const image = document.createElement("img");
    image.setAttribute("src", object.imgSrc);
    image.setAttribute("alt", object.imgAlt);
    image.className = "blog-box1";
    blogImage.appendChild(image);

    const blogText = document.createElement("div");
    blogText.className = "blog-box2";
    container.appendChild(blogText);

    const blogTitle = document.createElement("h2");
    blogTitle.textContent = object.blogTitle;
    blogText.appendChild(blogTitle);

    const p1 = document.createElement("p");
    p1.textContent = object.p1;
    p1.className = "blog-article";
    blogText.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = object.p2;
    p2.className = "blog";
    blogText.appendChild(p2);
}
