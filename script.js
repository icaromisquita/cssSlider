let btnNext = document.querySelector('.forward');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

btnNext.onclick = () => moveItemsOnClick('forward')

btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick (type){
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    console.log(listItems)
    console.log(thumbItems)

    if(type=='forward'){
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next')

    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('return')
    }

    setTimeout(()=>{
        container.classList.remove('next')
        container.classList.remove('return')
    }, 3000)
}