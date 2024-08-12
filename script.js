const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const reg_btn = document.getElementById('reg_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const reg_result = document.getElementById('reg_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
reg_btn.addEventListener('click', Region);

function Region() {
    fetch("https://restcountries.com/v3.1/region/europe")
               .then(resolve => resolve.json())
               .then(data => {
                   data.forEach(element => {
                    document.getElementById('Region')
                    .innerHTML += `<li>${element.capital[0]}`
                    
                   });
               })
}

function getRandomCat() {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(res => res.json())
		.then(data => {
                cat_result.innerHTML = `<img src=${data[0].url} alt="cat" />`;
            
		});
}



function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
		});
}
