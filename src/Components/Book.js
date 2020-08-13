import React,{Component, Fragment} from "react"
import ShelfChanger from "./ShelfChanger"

class Book extends Component{

  /*
  Pass handleChange() for shelf changer from
  App -> (handles update)
  Shelf ->
  Book (get book from here) ->
  ShelfChanger (get selected shelf value from here)
  */
  handleChange = (book,valueSelected) => {
    this.props.handleChange(book,valueSelected)
  }

  render() {
    //desctucture props
    const { books, filter } = this.props
    return(
      <Fragment>
        {books &&
        books.length > 0 &&
        books.filter(book => (book.shelf === filter ||
          filter === "none") &&
          //filter books without thumbnails
          book.imageLinks !== undefined &&
          book.imageLinks.thumbnail !== undefined)
          .map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                </div>
                <ShelfChanger
                  filter={filter}
                  handleChange={this.handleChange}
                  book={book}/>
              </div>
              {/*Output book title*/}
              <div className="book-title">
                {book.title}
              </div>
              {/*Output all authors*/}
              <div className="book-authors">
                {book.authors && book.authors.map(author => (
                  <div key={author}>
                    {author}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </Fragment>
    )
  }
}

export default Book