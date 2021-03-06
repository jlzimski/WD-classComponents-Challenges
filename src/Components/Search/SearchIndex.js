import React, { Component } from 'react';
import { Input } from 'reactstrap';
import ThingsContainer from './ThingsContainer';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchInput: ""
      };
  }
  handleChange(e) {
    // if (this.searchInput.value !== "") {
      this.setState ({ 
        searchInput: e.target.value 
      })
    // }
      this.props.onChange(e.target.value)
  };

  dynamicSearch() {
    return this.state.things.filter(thingy => thingy.toLowerCase().includes(this.state.searchInput.toLowerCase()))
  }

  render() {
    return(
    <div>
      <Input type="text" value={this.state.searchInput} onChange={this.searchFunction} placeholder='Search for Thingy Here' />
      <h3>Results:</h3>
      <ThingsContainer things={this.dynamicSearch()} /> 
    </div>
    );
  }
}


export default SearchIndex;







// import React, { Component } from 'react';
// import { Input } from 'reactstrap';

// class SearchIndex extends Component {
//   constructor() {
//     super();
//     this.state = {
//       filter: "",
//       things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
//     };
//   }

//   searchCart(item) {
//     // this.setState({ filter: e.target.value });
//     const things = this.state.things.slice();
//     const searchCart = document.getElementById("searchShoppingCart");
//     const form = document.getElementById("shoppingCart");
//     let newCart = [];

//     things.some((el, i) => {
//       if (el === item) {
//         things.splice(i, 1);
//       }
//     })
//   };


//   render() {
//     let { filter, things } = this.state;

//     let DataSearch = things.filter(item => {
//       return Object.keys(item).some(key =>
//         item[key].toLowerCase().includes(filter.toLowerCase()))
//     });

//     return(
//     <div className="searchAppMain">
//       <div className="searchAppForm">
//         <section>
//           <form className="form" id="shoppingCart">
//           {/* <form onSubmit={this.searchText}> */}
//             <input type="text" className="staplesOrder" id="searchShoppingCart" placeholder="Search Shopping Cart" />
//             {/* <input ref={(a) => this._inputElement = a} placeholder='Search Here' /> */}
//             {/* <button type="submit">Search</button> */}
//           </form>
//         </section>

//       </div>
//       <hr/>
//       <h3>Results:</h3>
//       <p>{ this.state.things }</p>
//       <section className="section">
//             <ul>
//               {this.state.things.map(item => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </section>
//       {/* <this.displayList /> */}
//       <table>
//         <tr>
//           <th>matching items</th>
//         </tr>
//         {
//           (DataSearch.map(item =>
//             <tr>
//               <td>
//                 {item.things}
//               </td>
//             </tr>
//             ))
//         }
//       </table>
//       {/* <ul>
//         <li>{DataSearch.map(item => {item.things})} </li>
//         <li>{{ this.state.things.map((item) => 
//           {item.things}
//           )}} </li>
//       </ul> */}
//     </div>
//     )
//   }
// }




// export default SearchIndex;
