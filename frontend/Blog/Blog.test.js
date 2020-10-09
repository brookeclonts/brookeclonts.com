import React from 'react';
jest.mock('react-dom');
import Blog from './Blog';
import renderer from 'react-test-renderer';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

const tree = 
    renderer.create(<Blog/>)
    .toJSON();

it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
});

const testInfo = [
    {
        "_id" : "0",
        "title" : "Be Cool",
        "description" : "Description",
        "body" : "This is a body",
        "imageUrl" : "/assets/images/url.jpg"
    } , {
        "_id" : "1",
        "title" : "Be Cool2",
        "description" : "Description2",
        "body" : "This is a body2",
        "imageUrl" : "/assets/images/url2.jpg"
    }
];

// test('runs the correct function', () => {
//     Blog.
// });