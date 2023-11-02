import { combineReducers, legacy_createStore as createStore } from 'redux';
import imageReducer from './services/reducers/imageReducer';
import { Reducer } from 'redux';

// Declaring Type for the rootReducer
interface RootState {
  gallery: ReturnType<typeof imageReducer>;
}

// Combining all the reducers
const rootReducer: Reducer<RootState> = combineReducers({
  gallery: imageReducer,
});

// Creating the store
const store = createStore(rootReducer);

export default store;
