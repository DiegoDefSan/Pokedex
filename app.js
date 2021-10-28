const fetch = require('cross-fetch');
const cardsList = document.getElementById('cards-list');

for (let i=0; i<151; i++)
{
    let x=document.createElement("button");
    x.className="card";
    x.id=`${i+1}`;
    var t=document.createTextNode(`Pokemon #${i+1}`);
    x.appendChild(t);
    cardsList.appendChild(x);
}



