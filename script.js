const getQuote = async () => {
    let message = document.getElementById('quoteMessage');

    try {
        let response = await fetch('https://dummyjson.com/quotes/random');
        let data = await response.json();
        message.innerText = `"${data.quote}" — ${data.author}`;
    } catch (error) {
        message.innerText = 'Failed to fetch quote. Try again!';
    }
};

document.getElementById('quoteBtn').addEventListener('click', getQuote);