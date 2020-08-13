import React, {Component} from "react"

class ShelfChanger extends Component {
  state = {
    value: ''
  }
  /*
  Pass handleChange() for shelf changer from
  App -> (handles update)
  Shelf ->
  Book (get book from here) ->
  ShelfChanger (get selected shelf value from here)
  */
  handleChange = (event) => {
    this.setState({value: event.target.value},
      () => {this.props.handleChange(this.props.book, this.state.value)})
  }

  render() {
    //destructure props
    const { book, filter } = this.props
    //set filter to none for book searches & proper shelf for others
    const shelf = filter === "none" ? "none" : book.shelf
    return (
      <div  className="book-shelf-changer">
        {/*current shelf passed in from API in App.js*/}
        <select defaultValue={shelf} onChange={this.handleChange}>
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