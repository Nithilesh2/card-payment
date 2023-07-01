

document.querySelector('.cardnumber').oninput = () =>{
    document.querySelector('.cardnumberbox').innerText = document.querySelector('.cardnumber').value;
}

document.querySelector('.cardhold').oninput = () =>{
    document.querySelector('.cardholderbox').innerText = document.querySelector('.cardhold').value;
}

document.querySelector('.mon-exp').oninput = () =>{
    document.querySelector('#expmonth').innerText = document.querySelector('.mon-exp').value;
}

document.querySelector('.year-exp').oninput = () =>{
    document.querySelector('#expyear').innerText = document.querySelector('.year-exp').value;
}

document.querySelector('.cvv').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv').oninput = () =>{
    document.querySelector('.cvvbox').innerText = document.querySelector('.cvv').value;
}

function Alert(){
    alert("paid fee")
}
