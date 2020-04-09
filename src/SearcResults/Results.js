import React from 'react';
import './Results.css';
import Result from './Result';

function Results(props){

    const books = props.books.forEach(book => 
        <Result bookData={book} />
    );

        return(
            <div className="booksearch__results">
               {books}
            </div>
        )
    
}

export default Results;

