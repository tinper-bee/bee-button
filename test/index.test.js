import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Button from '../src/index';

describe('Enzyme Shallow', function () {
  it('Button\'s title should be exist', function () {
    let button = shallow(<Button/>);
    expect(button.hasClass('u-button')).to.equal(true);
  });
});

describe('Enzyme Render', function () {

});

describe('Enzyme Mount', function () {

});
