import React,{Component} from "react"

class Book extends Component{
  render() {
    return(
      <div>
        Book {this.props.title}
      </div>
    )
  }
}

export default Book