const range = document.querySelector('input[type="range"]');
const donateAmount = document.querySelector('.donate-amount');

range.addEventListener('input', (e)=>{
    donateAmount.textContent = `${e.target.value}`;
})

 