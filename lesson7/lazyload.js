let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
    };

    const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onLoad = () => {image.removeAttribute('data-source');};
    };

    if("IntersectionObeserver"  in window) { 
        const imgObserver = new IntersectionObserver((items, observer) => {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    loadImages(item.target); 
                    imgObserver.unobserve(item.target);
                }
        });
    }, imgOptions);

imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});
    }
    else{
        imagesToLoad.forEach((img)=>{
            loadImages(img); 
    })
}