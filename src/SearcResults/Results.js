import React from 'react';
import './Results.css';
import Result from './Result';

function Results(props){

    const books = props.books.map(book => 
        <Result key={book.etag} bookData={book} />
    );

        return(
            <div className="booksearch__results">
               {books}
            </div>
        )
    
}

export default Results;

