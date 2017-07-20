import React, { Component } from 'react';

export default class Repro extends Component {
  componentDidMount() {
    // This loads the default export correctly
    import('../dynamic-module')
      .then(module => console.log(module));

    // This is the spec-compliant way to load a
    // default module, but in this case returns
    // as undefined since the transpiled code
    // resolves to the default export if present
    import('../dynamic-module')
      .then(module => module.default)
      .then(text => console.log(text));
  }
  render() {
    return <p>Stuff</p>
  }
}
