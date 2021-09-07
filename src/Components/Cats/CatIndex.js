// import React, { Component } from 'react';
// import CatList from './CatList';

// export default class ClassComponentProps extends Component {
//   constructor(props) {
//     super(props);
//     this.setState = {
//       breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
//     }
//   }

//   render() {
//     return (
//       <div>
//         <CatList Cats={this.state.breeds} />
//       </div >
//     );
//   }
// }

import React, { Component } from 'react';
import CatList from './CatList';

class CatIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }
  render() {
    return (
      <div className="felineFormatingMain">
              <section className="section">
            <ul>
              {this.state.breeds.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        {/* <CatList felines={this.state.breeds} /> */}
      </div>
    );
  }
}
export default CatIndex;