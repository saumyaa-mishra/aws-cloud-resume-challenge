const counter=document.querySelector(".counter-number");
async function updateCounter(){
    let response=await fetch("https://bl7g3ejbbkgovykc5cnb4zz6ki0bdvqv.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML=' Views: ${data}';
}

updateCounter();