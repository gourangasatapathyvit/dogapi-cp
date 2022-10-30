let dogImageFit = document.getElementById('doggy');
let dogImageApi = "https://dog.ceo/api/breeds/image/random";

const dogImageFetch = async () => {
    try{
        const response = await fetch(dogImageApi);
        const responseResult = await response.json();
        dogImageFit.src = responseResult.message
        
    }
    catch(error){
        console.log("errrrr")
        dogImageFit.src = "https://pyxis.nymag.com/v1/imgs/0a8/5d1/3139b0b2fc427ff34fe5394bd1625d8527-2019-critics-joker.rsquare.w700.jpg"
    }
}

dogImageFetch()