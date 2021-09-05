import React, { Component } from 'react';
import CatList from './CatList';

export default class ClassComponentProps extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render() {
    return (
      <div>
        <CatList cats={this.state.breeds} />
      </div >
    );
  }
}

