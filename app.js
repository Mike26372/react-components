// TODO
class GroceryList extends React.Component {
  constructor() {
    super();
    this.groceryItems = ['salmon', 'kale'];
  }

  render() {
    return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {this.groceryItems.map((groceryItem, key) => <GroceryListItems groceryItem={groceryItem} key={key}/>)}
      </ul>
    </div>
    );
  }
}


class GroceryListItems extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick(event) {
    this.setState({done: !this.state.done});
  }

  onHover(event) {
    this.setState({hover: !this.state.hover});
  }

  render() {
    var style = {
      'color': this.state.hover ? 'mediumaquamarine' : 'black',
      'textDecoration': this.state.done ? 'line-through' : 'none',
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onHover.bind(this)} onMouseOut={this.onHover.bind(this)} key={this.props.key}>{this.props.groceryItem}</li>
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));
