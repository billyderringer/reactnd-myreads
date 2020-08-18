import React,{ Fragment } from "react"
import ShelfChanger from "./ShelfChanger"

function Book(props){

  /*
  Pass handleChange() for shelf changer from
  App -> (handles update)
  Shelf/SearchBar (both components use handleChange()) ->
  Book (get book from here) ->
  ShelfChanger (get selected shelf value from here)
  */
  const handleBookChange = (book,valueSelected) => {
    props.handleChange(book,valueSelected)
  }

  //destructure props
  const { myBooks, searchBooks, filter } = props

  //determines if book is used in home page or search page and displays correct array of books
  const chooseLibrary = searchBooks ? searchBooks : myBooks

  return(
    <Fragment>
      {chooseLibrary &&
      chooseLibrary.length > 0 &&
      chooseLibrary
        .filter(book => (book.shelf === filter ||
        filter === "custom"))
        .filter(book => (
        //filter books without thumbnails
        book.imageLinks !== undefined &&
        book.imageLinks.thumbnail !== undefined))
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
                handleChange={handleBookChange}
                myBooks={myBooks}
                searchBooks={searchBooks}
                book={book}/>
            </div>
            {/*output book title*/}
            <div className="book-title">
              {book.title}
            </div>
            {/*output all authors*/}
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

export default Book