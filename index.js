

document.querySelector('.cardnumber').oninput = () =>{
    
    let cardnumberbox = document.querySelector('.cardnumberbox');
    let cardnumber = document.querySelector('.cardnumber').value;
    
    if (
      cardnumber.length === 4 ||
      cardnumber.length === 9 ||
      cardnumber.length === 14
    ) {
      document.querySelector(".cardnumber").value += " ";
    }

    cardnumberbox.innerText = cardnumber;

    if (cardnumber === '') {
        cardnumberbox.innerText = "1234 xxxx xxxx 1234";
    }
}

document.querySelector('.cardnumber').addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        document.querySelector(".cardnumber").value = ''
        document.querySelector(".cardnumberbox").innerHTML = '1234 xxxx xxxx 1234'
    }
})

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
