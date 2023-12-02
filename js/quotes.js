const quotes = [
{
    quote:"They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
},
{
    quote:"하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다.",
    author: "호레스"
},
{
    quote:"내일이란 다른 이름의 오늘일 뿐이다.",
    author: "윌리엄 포크너"
},
{
    quote:"되도록이면 내일에 의지하지 말라. 그날이 생에 가장 젊은 날이니.",
    author: "단테"
},
{
    quote:"해야할 것을 하라. 그러한 것들은 타인의 행복을 위해서, 동시에 나의 행복을 위해서다.",
    author: "톨스토이"
},
{
    quote:"만약 우리가 할 수 있는 일을 모두 한다면 우린 우리 자신에게 깜짝 놀랄 거다.",
    author: "에디슨"
},
{
    quote:"가장 바쁜 사람이 가장 많은 시간을 갖는다. 부지런한 사람이 결국 대가를 얻는다.", 
    author: "현자"
},
{
    quote:"사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다",
    author: "맹자"
},
{
    quote:"이 또한 지나가리라",
    author: "현자"
},
{
    quote:"사람이 여행하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "괴테"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;