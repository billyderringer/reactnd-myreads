import React from "react"

function Shelf(props){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books && props.books.filter(book => book.shelf === props.filter).map(book => (
              <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option
                        selected={book.shelf === "currentlyReading"}
                        value="currentlyReading">
                        Currently Reading
                      </option>
                      <option
                        selected={book.shelf === "wantToRead"}
                        value="wantToRead">
                        Want to Read
                      </option>
                      <option
                        selected={book.shelf === "read"}
                        value="read">
                        Read
                      </option>
                      <option
                        value="none">
                        None
                      </option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.map(author => (
                  <div>{author}</div>
                ))}</div>
              </div>
            </li>
            ))}
          </ol>
        </div>
      </div>
    )
}

export default Shelf