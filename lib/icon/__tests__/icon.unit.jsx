import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('Icon', () => {
    it('icon exist', () => {
        const json = renderer.create(<Icon name={"alipay"}/>).toJSON();
        expect(json).toMatchSnapshot();
    });
    it('onClick can run ', () => {
        const fn = jest.fn();
        const component =  mount(<Icon name={"alipay"} onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    })
});