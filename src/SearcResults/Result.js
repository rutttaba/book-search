import React from 'react';
import './Result.css';

function Result(props) {
    const book = props.bookData;
    const price = book.saleInfo.listPrice ? 
        <p className="searchresult__cost"> Price: {book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode}</p> :
        '';
    const author = !book.volumeInfo.authors ? '' :
        <p className="searchresult__author">Author(s): {book.volumeInfo.authors.join(', ')}</p>;

        return(
            <div className="booksearch__result">
                <img className="searchresult__img" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                <section className="searchresult__info">
                    <h2 className="searchresult__title">{book.volumeInfo.title}</h2>
                    {author}
                    {price}
                    <p className="searchresult__description">{book.volumeInfo.description}</p>
                    <a className="searchresult__link" href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">Find out more</a>
                </section>
                
            </div>
        )
    
}

export default Result;