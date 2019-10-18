import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import store from './Store';
import App from './App'
import { openModal } from './Actions'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

describe('actions', () => {
  it('should open the modal', () => {
    const expectedAction = {
      type: 'OPENMODAL',
      modalType: 'create'
    }
    expect(openModal('create')).toEqual(expectedAction)
  })
})