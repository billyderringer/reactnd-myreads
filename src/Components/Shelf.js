import React from "react"
import Book from "./Book"

function Shelf(props){

  //destructure props
  const { myBooks, shelfTitle, filter, handleChange } = props

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book
            myBooks={myBooks}
            filter={filter}
            handleChange={handleChange}/>
        </ol>
      </div>
    </div>
  )
}

export default Shelf