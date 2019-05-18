import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Button from '../button'

describe('button', () => {
    it('是个 div', () => {
        const json = renderer.create(<Button/>).toJSON();  //https://reactjs.org/docs/test-renderer.html#testrenderertojson
        expect(json).toMatchSnapshot();
    })
});