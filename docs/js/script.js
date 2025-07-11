const snedBnt = document.querySelector('#id');
const ratings = document.querySelectorAll('.rating'); // ← كان فيه خطأ، يجب أن يكون All لأنك تتعامل مع مجموعة
const ratingContainer = document.querySelector('.rating-container');
const panel = document.querySelector('#panel');
let selectedRating = 'satisfied';

ratingContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        romeveActive();
        e.target.parentNode.classList.add('active');

        // تحقق أن nextElementSibling موجود قبل استخدامه
        if (e.target.nextElementSibling) {
            selectedRating = e.target.nextElementSibling.innerText;
        } else {
            selectedRating = e.target.innerText; // في حالة ما إذا لم يوجد nextElementSibling
        }

        console.log(selectedRating);
    }
});

snedBnt.addEventListener('click', () => {
    panel.innerHTML= `
    <i class="fas fa-heart"></i>
    <strong>Thank you for your feedback</strong>
        <p>Your feedback is important to us</p>
        <p>Feedback: ${selectedRating}</p>
        <p>See you soon</p>
    `;
});

function romeveActive() {
    for (let i = 0; i < ratings.length; i++) { // ← صححت اسم المتغير + loop index
        ratings[i].classList.remove('active'); // ← صححت اسم المتغير + فاصلة كانت بدل نقطة
    }
}

 