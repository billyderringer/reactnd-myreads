import React, {Component} from "react"

class ShelfChanger extends Component {

  handleChange = (event) => {
    this.props.handleChange(this.props.book, event.target.value)
  }

  render() {
    const { book } = this.props
    return (
      <div  className="book-shelf-changer">
        <select defaultValue={book.shelf} onChange={this.handleChange}>
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