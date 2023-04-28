const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');




// show new Quote
function newQuote(){
	//Pick a random Qoute 
	const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
	//check if Author field is blank
	if (!quote.author) {
		authorText.textContent = 'Unknown';
	} else {
		authorText.textContent = quote.author;
	}

	//Check Quote length
	if (quote.text.length > 120){
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove ('long-quote');
	}

	quoteText.textContent = quote.text;
}





//Tweet
function tweetQuote (){
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);




newQuote();