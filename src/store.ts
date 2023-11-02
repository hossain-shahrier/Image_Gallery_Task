import { combineReducers, legacy_createStore as createStore } from 'redux';
import imageReducer from './services/reducers/imageReducer';
import { Reducer } from 'redux';

// Assuming you have a RootState type for your combined reducers
interface RootState {
  gallery: ReturnType<typeof imageReducer>;
}

const rootReducer: Reducer<RootState> = combineReducers({
  gallery: imageReducer,
});

const store = createStore(rootReducer);

export default store;
