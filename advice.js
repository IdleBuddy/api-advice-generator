const adviceId = document.getElementById('AdviceId');
const adviceText = document.getElementById('AdviceText');
const adviceBtn = document.getElementById('AdviceBtn');

async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    
    console.log(data);

    adviceId.innerText = data.slip.id;
    adviceText.innerText = data.slip.advice;
}

adviceBtn.addEventListener('click', function() {
    getAdvice();
})