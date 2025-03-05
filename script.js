document.addEventListener("DOMContentLoaded", function () {
    let message = document.getElementById('quoteMessage');
    message.innerHTML = 'Click the button to display a quote';
    message.classList.add('show');
    const getQuote = async () => {
        message.classList.remove('show');

        try {
            let response = await fetch('https://dummyjson.com/quotes/random');
            let data = await response.json();
            message.innerHTML = `"${data.quote}" <br><span class="author"> ${data.author}</span>`;
            setTimeout(() => {
                message.classList.add('show');
            }, 200);

        } catch (error) {
            message.innerHTML = 'Failed to fetch quote. Try again!';
            message.classList.add('show');
        }
    };

    document.getElementById('quoteBtn').addEventListener('click', getQuote);
});
