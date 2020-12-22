// Put your application javascript here

// HERO IMAGE ROTATION
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("mainHeroImage").src = images[x];
    y = (y === text.length - 1) ? 0 : y + 1;
    document.getElementById("heroHeaderText").innerHTML = text[y];
    z = (z === paragraph.length - 1) ? 0 : z + 1;
    document.getElementById("heroHeaderParagraph").innerHTML = paragraph[z];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("mainHeroImage").src = images[x];
    y = (y <= 0) ? text.length - 1 : y - 1;
    document.getElementById("heroHeaderText").innerHTML = text[y];
    z = (z <= 0) ? paragraph.length - 1 : z - 1;
    document.getElementById("heroHeaderParagraph").innerHTML = paragraph[z];
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