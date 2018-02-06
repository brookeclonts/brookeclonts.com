import React from 'react';
import ReactDOM from 'react-dom';

// difference between 'describe' and 'test' is just organization preference

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    // to be is used for primitive values such as strings and numbers
    // to equal is used for objects and arrays 
    expect(2 + 2).toBe(4);
  });
});
