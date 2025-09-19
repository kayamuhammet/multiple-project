// Get button ID
const randomQuoteBtn = document.getElementById('quoteButton');

// Get div ID
const quoteDiv = document.getElementById('quoteDiv');

// Create div -> p
const bookTitleP = document.createElement('p');
const bookTitleAuthor = document.createElement('p');
const bookSummaries = document.createElement('p');



randomQuoteBtn.addEventListener('click', () =>{
    fetch('https://gutendex.com/books/')
    .then(response => response.json())
    .then(data => {

        // Dizi uzunluguna gore random ID
        const results = data.results;
        const randomID = Math.floor(Math.random() * results.length);
        console.log(randomID);
        
        // Api den bilgileri al
        const book = data.results[randomID];
        const bookTitle = book.title;
        const author = book.authors[0]?.name || "Bilinmeyen";
        const summary = book.summaries;

        // elementlere apiden gelen bilgileri aktar
        bookTitleP.textContent = bookTitle;
        bookTitleAuthor.textContent = author;
        bookSummaries.textContent = summary;
    })
    .catch(error => {
        console.log(error);
    })
})

quoteDiv.appendChild(bookTitleP);
quoteDiv.appendChild(bookTitleAuthor);
quoteDiv.appendChild(bookSummaries);
