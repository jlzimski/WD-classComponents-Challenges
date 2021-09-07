import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    };
  }

  searchText(e) {
    // this.setState({ filter: e.target.value });
    let things = this.state.things;
    const searchCart = document.getElementById("searchShoppingCart");
    const form = document.getElementById("shoppingCart");
  };


  render() {
    let { filter, things } = this.state;
  
    let DataSearch = things.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(filter.toLowerCase()))
    });
  
    return(
    <div className="searchAppMain">
      <div className="searchAppForm">
        <section>
          <form className="form" id="shoppingCart">
          {/* <form onSubmit={this.searchText}> */}
            <input type="text" className="staplesOrder" id="searchShoppingCart" placeholder="Search Shopping Cart" />
            {/* <input ref={(a) => this._inputElement = a} placeholder='Search Here' /> */}
            {/* <button type="submit">Search</button> */}
          </form>
        </section>

      </div>
      <hr/>
      <h3>Results:</h3>
      <p>{ this.state.things }</p>
      <section className="section">
            <ul>
              {this.state.things.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
      {/* <this.displayList /> */}
      <table>
        <tr>
          <th>matching items</th>
        </tr>
        {
          (DataSearch.map(item =>
            <tr>
              <td>
                {item.things}
              </td>
            </tr>
            ))
        }
      </table>
      {/* <ul>
        <li>{DataSearch.map(item => {item.things})} </li>
        <li>{{ this.state.things.map((item) => 
          {item.things}
          )}} </li>
      </ul> */}
    </div>
    )
  }
}




export default SearchIndex;
