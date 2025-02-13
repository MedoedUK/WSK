document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".review-slider");
    let reviews = ["Отличные курсы!", "Теперь я сам делаю сайты!"];
    let index = 0;

    setInterval(() => {
        slider.innerHTML = `<p>${reviews[index]}</p>`;
        index = (index + 1) % reviews.length;
    }, 3000);
});



// Валидация формы
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами.");
});
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".review-slider");
    let reviews = [
        {
            text: "Отличные курсы! Всё понятно объясняют.",
            icon: "Иконки/coding.png" 
        },
        {
            text: "Теперь я делаю сайты своими руками!",
            icon: "Иконки/coding.png" 
        }
    ];
    let index = 0;

    setInterval(() => {
        const currentReview = reviews[index];
        slider.innerHTML = `
            <div class="review-item">
                <img src="${currentReview.icon}" alt="User icon" class="user-icon">
                <p>${currentReview.text}</p>
            </div>
        `;
        index = (index + 1) % reviews.length;
    }, 3000);
});






document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

       
        if (name === "" || email === "") {
            message.textContent = "Пожалуйста, заполните все поля.";
            message.style.color = "red";
            message.style.display = "block";
            return;
        }

        if (!validateEmail(email)) {
            message.textContent = "Пожалуйста, введите корректный email.";
            message.style.color = "red";
            message.style.display = "block";
            return;
        }

        
        message.textContent = "Спасибо за заявку! Мы свяжемся с вами.";
        message.style.color = "green";
        message.style.display = "block";

        
        form.reset();
    });

    function validateEmail(email) {
        
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".review-slider1");
    const slider2 = document.querySelector(".review-slider2"); 
    let reviews1 = ["Наш курс поможет вам создать адаптивные сайты.", "Освойте все основы HTML и CSS."];
    let reviews2 = ["Изучите основы JavaScript и создавайте интерактивные веб-страницы.", "Стать мастером в JavaScript и начать разрабатывать полноценные сайты."];
    let index1 = 0;
    let index2 = 0;

    setInterval(() => {
        
        slider.innerHTML = `<p>${reviews1[index1]}</p>`;
        index1 = (index1 + 1) % reviews1.length;

        
        slider2.innerHTML = `<p>${reviews2[index2]}</p>`;
        index2 = (index2 + 1) % reviews2.length;
    }, 3000);
});
