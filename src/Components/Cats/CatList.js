// import React, { Component } from 'react';

// class CatList extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.cats.map((cats) => {
//           return <Cats passingCats={cats} />
//         })}
//       </div>
//     );
//   }
// }
// const Cats = (props) => {
//   return (
//     <div>
//       <h3>{props.passingCats}</h3>
//     </div>
//   )
// }

// export default CatList;


import React, { Component } from 'react';


class CatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: this.props.catlist.breeds,
      key: Date.now()
    }
  }
  render() {
    return (
      <div>
        <ul>
        {this.state.breeds.map((felines) => <li key={ felines }>{ felines }</li>)}
        </ul>
      </div>
    )
  };
};
export default CatList;
