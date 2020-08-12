import React,{Component, Fragment} from "react"
import ShelfChanger from "./ShelfChanger"

class Book extends Component{

  handleChange = (book,valueSelected) => {
    this.props.handleChange(book,valueSelected)
  }

  render() {
    const { books, filter} = this.props
    return(
      <Fragment>
        {books && books.filter(book => book.shelf === filter).map(book => (
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
                  handleChange={this.handleChange}
                  book={book}/>
              </div>
              <div className="book-title">
                {book.title}
              </div>
              <div className="book-authors">
                {book.authors.map(author => (
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