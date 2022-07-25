import React from 'react';
import { shallow} from 'enzyme';
import CounterComponent from './CounterComponent';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from '@testing-library/react';

configure({adapter: new Adapter()});
describe("Counter Component", () => {
    it("should render Counter Component", () => {
        const wrappaer = shallow(<CounterComponent/>);
    });
})