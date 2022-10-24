let dogImageFit = document.getElementById('doggy');
let dogImageApi = "https://dog.ceo/api/breeds/image/random";


console.log('twrwq',dogImageFit)

fetch('https://dog.ceo/api/breeds/image/random')
.then(r=> {
    console.log("r ",r)
    return r.json()
})
.then(j=>{
    dogImageFit.src = j.message
})