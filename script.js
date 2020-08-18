// const imagens = document.querySelectorAll('img');
// console.log(imagens);

// const imgName = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(imgName);

// const linksInt = document.querySelectorAll('[href^="#"]');
// console.log(linksInt);

// const h2 = document.querySelector('.animais-descricao h2');
// console.log(h2);

// const animais = document.querySelector('.animais-descricao');
// const h2Animais = animais.querySelector('h2');

// console.log(h2Animais);

// const P = document.querySelectorAll('p');

// console.log(P[P.length - 1]);

/*for each */

// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item,index,array){
//     /*/console.log(item,index,array)*/
// });

// Transformar em array

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach((item,index,array) => { 
//     console.log(item,index,array)
//  });

//  const paragrafos = document.querySelectorAll('p');


//  paragrafos.forEach((paragrafo) => {
//      console.log(paragrafo)
//  });

//  paragrafos.forEach((item) => {
//     console.log(item.innerText)
// });

 const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo')
});

itensMenu.forEach((item) => {
    item.classList.remove('ativo')
});

itensMenu[0].classList.add('ativo');


const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAttributo = img.hasAttribute('alt');
    console.log(img , possuiAttributo);
});

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.terra.com.br/');



