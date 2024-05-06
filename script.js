// const card=document.getElementById("cards");
// fetch('htps://jsonplaceholder.typicode.com/users')
// .then((data)=>{
//     return data.json();
// })
// .then((datajson)=>{
//     console.log(datajson);
//     for(items of datajson){
//         card.innerHTML +=`
//         <p>${items.id}</p>
//         <h1>${items.name}</h1>
//         <p>${items.username}</p>
//         <p>${items.email}</p>
// `
      
//     }
// })
// .catch((err)=>{
//     console.log(err);
    
// })
//               card.style.border='1 px solid black';
const carts = document.getElementById('carts')

fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    return data.json()
})
.then((datajson)=>{
   console.log(datajson)
   for(item of datajson){
carts.innerHTML+=`
<div>
<h1>${item.name}</h1>
<p>${item.id}</p>
<p>${item.username}</p>
<p>${item.phone}</p>
<p>${item.email}</p>
</div>
`
   }
})

.catch((err)=>{
    console.log(err);
})