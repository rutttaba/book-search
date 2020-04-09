import React from 'react';
import './Result.css';

function Result(props) {
    const book = props.bookData;

        return(
            <div className="booksearch__result">
                <img className="searchresult__img" src={book.imageLinks.thumbnail} alt={book.title}/>
                <h2 className="searchresult__title">{book.title}</h2>
                <p className="searchresult__cost">{book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode}</p>
                <p className="searchresult__description">{book.description}</p>
                <a className="searchresult__link" href={book.buyLink}>Buy the book</a>
            </div>
        )
    
}

export default Result;