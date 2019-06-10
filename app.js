// TODO
const GroceryList = (props) => (
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render(){
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
      <li style={style} 
          onClick={this.onListItemClick.bind(this)} 
          onMouseEnter={this.onListItemHover.bind(this)} 
          onMouseLeave={this.onListItemHover.bind(this)}>
            { this.props.item }
      </li>)
  }
}

ReactDOM.render(<GroceryList items={['Bananas', 'Peanut butter']} />, document.getElementById('app'));
