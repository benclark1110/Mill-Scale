// Put your application javascript here

// HERO IMAGE ROTATION
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("mainHeroImage").src = images[x];
    y = (y === text.length - 1) ? 0 : y + 1;
    document.getElementById("heroHeaderText").innerHTML = text[y];
    z = (z === paragraph.length - 1) ? 0 : z + 1;
    document.getElementById("heroHeaderParagraph").innerHTML = paragraph[z];
    a = (a === link.length - 1) ? 0 : a + 1;
    document.getElementById("heroLink").href = link[a];
    b = (b === sideText.length - 1) ? 0 : b + 1;
    document.getElementById("sideText").innerHTML = sideText[b];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("mainHeroImage").src = images[x];
    y = (y <= 0) ? text.length - 1 : y - 1;
    document.getElementById("heroHeaderText").innerHTML = text[y];
    z = (z <= 0) ? paragraph.length - 1 : z - 1;
    document.getElementById("heroHeaderParagraph").innerHTML = paragraph[z];
    a = (a <= 0) ? link.length - 1 : a - 1;
    document.getElementById("heroLink").href = link[a];
    b = (b <= 0) ? sideText.length - 1 : b - 1;
    document.getElementById("sideText").href = sideText[b];
}

function startTimer() {
    setInterval(displayNextImage, 7000);
}

var images = [], x = -1;
images[0] = "//cdn.shopify.com/s/files/1/0467/0049/5015/t/5/assets/Hero_2@2x.png?v=16895830379331391678";
images[1] = "//cdn.shopify.com/s/files/1/0467/0049/5015/t/5/assets/home-image.png?v=54031112577287740";

var text = [], y = -1;
text[0] = "FORM MEETS FUNCTION";
text[1] = "KEEP THE FIRES BURNING";

var paragraph = [], z = -1;
paragraph[0] = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. my nibh euismod tincidunt ut laoreet dolore magna.";
paragraph[1] = "We build 500 and 1000 gallon offset smokers for competition, commercial, and residential use. Each one is built to suit the pitmaster’s needs. Ready to take your barbecue to the next level?";

var link = [], a = -1;
link[0] = "https://mill-scale.myshopify.com/collections/fire-tools";
link[1] = "https://mill-scale.myshopify.com/collections/cookers/products/offset-smoker";

var sideText = [], b = -1;
sideText[0] = "Handcrafted Fire Tools";
sideText[1] = "Custom Offset Smokers";