import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from "./Components/SearchBar"
import Shelf from "./Components/Shelf"
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    myBooks: []
  }

  componentDidMount() {
    this.getBooks()
  }

  toggleSearch = () => {
    this.setState({ showSearchPage: !this.state.showSearchPage })
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        myBooks: books
      }))
    })
  }

  updateBooks = (book, selected) => {
    BooksAPI.update(book, selected).then(() => {
      this.getBooks()
    })
  }

  /*
  Pass handleChange() for shelf changer from
  App -> (handles update)
  Shelf ->
  Book (get book from here) ->
  ShelfChanger (get selected shelf value from here)
  */
  handleChange = (book, selected) => {
    this.updateBooks(book, selected)
  }

  render() {
    //destructure state
    const { myBooks } = this.state
    return (
      <div className="app">
        <Route exact path='/search'
               render={() => (
          <SearchBar
            myBooks={myBooks}
            handleChange={this.handleChange}
            toggleSearch={this.toggleSearch}/>
        )}>
        </Route>
        <Route exact path='/'
               render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelf
              shelfTitle="Currently Reading"
              filter="currentlyReading"
              myBooks={myBooks}
              handleChange={this.handleChange}/>
            <Shelf
              shelfTitle="Want to Read"
              filter="wantToRead"
              myBooks={myBooks}
              handleChange={this.handleChange}/>
            <Shelf
              shelfTitle="Read"
              filter="read"
              myBooks={myBooks}
              handleChange={this.handleChange}/>
            <Link to='/search'
                  className="open-search">
              <button>
                Add a book
              </button>
            </Link>
          </div>
        )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
