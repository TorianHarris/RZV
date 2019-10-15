import { createStore } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store;

// export default function configureStore(initialState = {
//   name: 'Shaun',
//   age: 26,
//   class: 'Developer',
//   element: 'Earth'
// }) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk)
//   );
// }