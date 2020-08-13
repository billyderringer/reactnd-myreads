import React,{Component} from "react"
import {search} from "../BooksAPI"
import Book from "./Book"

class SearchBar extends Component{
  state = {
    searchValue: '',
    books: []
  }

  //set searchValue state on input then call handleBookSearch()
  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    },() => {
      this.handleBookSearch()
    })
  }

  //send searchValue to API for book search
  handleBookSearch = () => {
    search(this.state.searchValue).then(books => {
      this.setState(() => ({
        books: books
      }))
    })
  }

  render() {
    const { books } = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.props.toggleSearch()}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input onChange={this.handleChange} value={this.state.searchValue} type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
                <Book handleChange={this.props.handleChange} filter='none' books={books}/>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBar