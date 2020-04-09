import React from 'react';
import './SearchForm.css';

function SearchForm(props) {


        return(
            <div className="searchform">
                <form className="searchform__form" onSubmit={e => props.handleSubmit(e)}>
                    <label htmlFor="search" className="searchform__search">Search:</label>
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="search keyword" 
                        value={props.searchWord} 
                        onChange={e => props.changeSearchWord(e.target.value)} 
                        required/>
                    <button type="submit" disabled={props.disabled} >Search</button>
                </form>

            </div>

        )
    
}

export default SearchForm;
