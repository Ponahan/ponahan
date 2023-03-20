let count = 0;

document.getElementById('popBtn').onclick = function(){

    count+=1;
    document.getElementById('myLabel').innerHTML = count;
}

document.getElementById('resetBtn').onclick = function(){

    count=0;
    document.getElementById('myLabel').innerHTML = count;
}

const toggle = document.querySelector('#popBtn')
const Saitakoon = document.querySelector('#Saitakoon')
const kuyKoon = document.querySelector('#Kuykoon')

popBtn.addEventListener('click', () => {

    if(Saitakoon.style.display == 'none'){
        Saitakoon.style.display ='block'
    }
    else{
        Saitakoon.style.display = 'none'
    }
})

popBtn.addEventListener('click', () => {

    if(kuyKoon.style.display == 'block'){
        kuyKoon.style.display ='none'
    }
    else{
        kuyKoon.style.display = 'block'
    }
})