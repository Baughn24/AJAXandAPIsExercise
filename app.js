// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
//1a
const jokeJS1 = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(jokeJS1);
//1b
p1.innerText = setup;
//1c
p2.innerText = punchline;




// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
//2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
//2b and 2c
.then(res => {
    const friendsJS2 = axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
    console.log(friendsJS2);
    p3.innerText = res.character;
    p4.innerText = res.quote;
    //2d
}) .catch (err => {
console.log(err);
});



 // 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
//3a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
//3b and 3c and 3d
async function quoteFunc(){
    try{
    const quoteJS3 = await quoteFunc();
    console.log(`successful`);
    console.log(quoteJS3);
    p5.innerText = res.character;
    p6.innerText = res.quote;
} catch (err){
    console.log(err);
}
}
quoteFunc();




// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
//4a and 4b
axios.get(`https://api.tvmaze.com/shows/1/episodebynumber?season=2&number=16`)
async function tvMazeFunc (){
    try {
        const response = await axios.get(`https://api.tvmaze.com/the_mandalorian/1/episodebynumber?season=2&number=16`)
        console.log(`Successful`);
        console.log(response.data);
p7.innerText = `Episode ${show.episode_id}: ${show.title}`;
    } catch (err){
        console.log(err);
    }
}