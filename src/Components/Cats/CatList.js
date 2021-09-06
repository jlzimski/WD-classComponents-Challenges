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
      breeds: this.props.cat.breeds
    }
  }
  render() {
    return (
      <div>
        {this.props.breeds.map(cat => <li>cat</li>)}
      </div>
    )
  }
}
export default CatList;
