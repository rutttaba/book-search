import React, {Component} from 'react';
import './App.css';
import Results from './SearcResults/Results';
import SearchForm from './SearchForm/SearchForm';
import Filters from './Filters/Filters';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchTerms: '',
      printType: 'all',
      filter: '',
      searchButton: false,
      error: null
    }
  }

  setSearchTerms = (input) => {
    this.setState({
      searchTerms: input
    })
  }

  setFilter = (selected) => {
    this.setState({
      filter: selected
    })
  }
  setPrintType = (selected) => {
    this.setState({
      printType: selected
    })

  }

  searchParameters() {
    const { filter, printType, searchTerms } = this.state;
    const key = 'AIzaSyDMnnEQLKagT3_kVhlPy4CO8hs8 - CTbArs';
    const searchTerm = searchTerms.trim().split(' ').join('+');
    
    if (filter === '') {
      return `${searchTerm}&printType=${printType}&key=${key}`;
    } else {
      return `${searchTerm}&printType=${printType}&filter=${filter}&key=${key}`;
    }
  }
  

  searchBooks() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.searchParameters()}`;
    fetch(url)
      .then(response => {
        this.setState({
          searchButton: true
        })
        if (!response.ok) {
          throw new Error('Something went wrong, please try again'); 
        }
        return response; 
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const result = data.items.map(book => book);
        this.setState({
          books: result,
          error: null
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: err.message
        })
      })
      .finally(() => 
        this.setState({
          searchButton: false
        })
      )}
 

  render() {
      const error = this.state.error
        ? <div className="booksearch__error">{this.state.error}</div>
        : "";

    return (
      <div className="App">
        <header className="booksearch__header">
          <h1>Google Book Search</h1>
       </header>

        <SearchForm 
          disabled={this.state.searchButton}  
          searchWord={this.state.searchTerms}
          changeSearchWord={(input)=> this.setSearchTerms(input)}
          handleSubmit={() => this.searchBooks()} />
        <Filters 
          printType={this.state.printType} 
          filter={this.state.filter} 
          changePrintType={(selected) => this.setPrintType(selected)}
          changeFilter={(selected) => this.setFilter(selected)} />
          
          {error}

        <Results books={this.state.books}/>
    </div>
    );
  }

  static defaultProps = {
    books: [],
    searchTerms: '',
    printType: 'All',
    filter: 'All',
    searchButton: false,
    error: null
  }
  
}

export default App;


