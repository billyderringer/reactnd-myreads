import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from "./Components/SearchBar"
import Shelf from "./Components/Shelf";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }))
    })
  }

  toggleSearch = () => {
    this.setState({ showSearchPage: !this.state.showSearchPage })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchBar toggleSearch={this.toggleSearch}/>
         : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelf shelfTitle="Currently Reading" filter="currentlyReading" books={books}/>
            <Shelf shelfTitle="Want to Read" filter="wantToRead" books={books}/>
            <Shelf shelfTitle="Read" filter="read" books={books}/>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
