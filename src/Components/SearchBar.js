import React,{Component} from "react"

class SearchBar extends Component{
  render() {
    return(
      <div>
        SearchBar {this.props.text}
      </div>
    )
  }
}

export default SearchBar