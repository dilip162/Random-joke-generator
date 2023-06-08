const joke=document.getElementById('joke')
const btn=document.getElementById('btn')
const url='https://api.chucknorris.io/jokes/random'


function generateJokes(){
    fetch(url)
    .then((item)=>item.json())
    .then((item)=>{
        joke.innerText=item.value;
    })
}

btn.onclick=()=>{
    generateJokes()
}

generateJokes()

