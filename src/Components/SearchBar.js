import React,{Component} from "react"
import {search} from "../BooksAPI"
import Book from "./Book"
import {Link} from "react-router-dom";

class SearchBar extends Component{
  state = {
    searchValue: '',
    searchBooks: []
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
        searchBooks: books
      }))
    })
  }

  render() {
    const { searchBooks, searchValue } = this.state
    const { handleChange, myBooks } = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input
                onChange={this.handleChange}
                value={searchValue}
                type="text"
                placeholder="Search by title or author"/>
            </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {searchValue !== "" ?
              <Book
              handleChange={handleChange}
              filter='custom'
              myBooks={myBooks}
              searchBooks={searchBooks}/>:
              <li>
                Search for results
              </li>
            }

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBar