import React, {Component} from "react"

class ShelfChanger extends Component {
  state = {
    value: ""
  }

  /*
  Pass handleChange() for shelf changer from
  App -> (handles update)
  Shelf/SearchBar (both components use handleChange()) ->
  Book (get book from here) ->
  ShelfChanger (get selected shelf value from here)
  */
  handleChange = (event) => {
    this.setState({value: event.target.value},
      () => {this.props.handleChange(this.props.book, this.state.value)})
  }

  render() {

    //destructure props
    const { myBooks, book, filter } = this.props

    //filter shelf if searched book matches books in library
    const filteredShelf = myBooks.filter(myBook => myBook.id.includes(book.id))
    //determine if book is from SearchBar or Shelf and assign shelf accordingly
    const shelf = filter === "custom" ? filteredShelf[0] !== undefined ? filteredShelf[0].shelf : 'none' : book.shelf

    return (
      <div  className="book-shelf-changer">
        {/*current shelf passed in from API in App.js*/}
        <select defaultValue={shelf}
                onChange={this.handleChange}>
          <option disabled>Move to...</option>
          <option
            value="currentlyReading">Currently Reading
          </option>
          <option
            value="wantToRead">Want to Read
          </option>
          <option
            value="read">Read
          </option>
          <option
            value="none">None
          </option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger