import React, { Component } from 'react';
import './Filters.css';

export default function Filters(props) {

    render() {
        return(
            <div className="filters">
                <label htmlFor="print_type">Print Type:</label>
                <select name="print_type" id="print_type" onChange={e => props.changePrintType(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
                <label htmlFor="book_type">Book Type:</label>
                <select name="book_type" id="book__type" onChange={e => props.changeFilter(e.target.value)}>
                    <option value="All">No Filter</option>
                    <option value="ebooks">e-books</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="full">full</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="partial">partial</option>
                </select>
            </div>
        );
    }

}




