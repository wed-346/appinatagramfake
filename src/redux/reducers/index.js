import { combineReducers } from "redux";
import { Photosreducer } from "./photos";



 export const RootReducer = combineReducers({
    photos: Photosreducer,
});