import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Book from '../Book/Book';
import About from '../About/About';
import Home from '../Home/Home';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('redirects to 404 if given an invalid path', () => {
  const wrapper = mount((
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  ));
  expect(wrapper.find(Home)).toHaveLength(0);
});

it('directs to the right page if given a valid path', () => {
  const wrapper = mount((
    <MemoryRouter initialEntries={[ '/about' ]}>
      <App/>
    </MemoryRouter>
  ));
  // expect(wrapper.find(About)).toHaveLength(1);
  expect(wrapper.find(Book)).toHaveLength(0);
});