import React from 'react';
import './Filters.css';

export default function Filters(props) {

        return(
            <form className="filters">
                <label htmlFor="print_type">Print Type:</label>
                <select name="print_type" id="print_type" value={props.printType} onChange={e => props.changePrintType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
                <label htmlFor="book_type">Book Type:</label>
                <select name="book_type" id="book__type" value={props.filter} onChange={e => props.changeFilter(e.target.value)}>
                    <option value="">No Filter</option>
                    <option value="ebooks">e-books</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="full">full</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="partial">partial</option>
                </select>
            </form>
        );

}




