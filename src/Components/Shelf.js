import React, { Component } from "react"
import Book from "./Book"

class Shelf extends Component{

  /*
  Pass handleChange() for shelf changer from
  App -> (handles update)
  Shelf ->
  Book (get book from here) ->
  ShelfChanger (get selected shelf value from here)
  */
  render() {
    //destructure props
    const { books, shelfTitle, filter } = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book
              books={books}
              filter={filter}
              handleChange={this.props.handleChange}/>
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf