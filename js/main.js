document.getElementById('send').onclick = function(e){
  e.preventDefault();
  validate();
}
function validate(){
  let name = document.getElementById('name').value.trim();
  let cardNumber = document.getElementById('number').value.trim();
  let month = document.getElementById('month').value.trim();
  let year = document.getElementById('year').value.trim();
  let cvc = document.getElementById('cvc').value.trim();
  let errorMsg = '';
  let pElError = document.getElementById('name-error');
  let pNumberError = document.getElementById('card-number-error');
  let pDateError = document.getElementById('date-error');
  let cvcError = document.getElementById('cvc-error');

  if(!name || name.length < 3){
    errorMsg = 'Can\'t be blank';
    pElError.innerHTML = errorMsg;
    pElError.style.color = 'red';
    pElError.style.setProperty('font-size', '10px');
  }

  if(!cardNumber || cardNumber.length !== 16){
    errorMsg = 'Can\'t be blank; The number must be complete.';
    pNumberError.innerHTML = errorMsg;
    pNumberError.style.color = 'red';
    pNumberError.style.setProperty('font-size','10px');
  }else if(isNaN(cardNumber)){
    errorMsg = 'Wrong format, numbers only';
    pNumberError.innerHTML = errorMsg;
    pNumberError.style.color = 'red';
    pNumberError.style.setProperty('font-size','10px');
  }

  if(!month || !year){
    errorMsg = 'Can\'t be blank';
    pDateError.innerHTML = errorMsg;
    pDateError.style.color = 'red';
    pDateError.style.setProperty('font-size','10px');
  }else if(month < 1 || month > 12){
    errorMsg = 'Check your month';
    pDateError.innerHTML = errorMsg;
    pDateError.style.color = 'red';
    pDateError.style.setProperty('font-size','10px');
  }else if(year < 2023 || year > 2030){
    errorMsg = 'Check your year';
    pDateError.innerHTML = errorMsg;
    pDateError.style.color = 'red';
    pDateError.style.setProperty('font-size','10px');
  } 
  
  if(!cvc){
    errorMsg = 'Can\'t be blank';
    cvcError.innerHTML = errorMsg;
    cvcError.style.color = 'red';
    cvcError.style.setProperty('font-size','10px');
  }

  if(errorMsg){
    let content = document.getElementById('right');
    content.style.display = 'none';

    const element = document.getElementById('main-content');
    const divEl = document.createElement('div');
    const titleEl = document.createElement('h2');
    const imgEl = document.createElement('img');
    const pEl = document.createElement('p');
    const buttonEl = document.createElement('button');
    element.appendChild(divEl);
    divEl.classList.add('right-after');
    divEl.appendChild(imgEl);
    divEl.appendChild(titleEl);
    divEl.appendChild(pEl);
    divEl.appendChild(buttonEl);
    titleEl.innerHTML = 'Thank You!';
    imgEl.src = '../images/icon-complete.svg';
    pEl.innerHTML = 'We\'ve added your card details';
    buttonEl.innerHTML = 'Continue';

  }

}