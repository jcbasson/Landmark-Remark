import {combineReducers} from 'redux';
import immutable from 'immutable'
import LandMarkRemarkReducer from '../components/landMarkRemark/reducers/landMarkRemarkReducer'
import LandMarkRemarkActionsTypes from '../components/landMarkRemark/constants/landMarkRemarkActionsTypes'
import GoogleMapReducer from '../components/googleMap/reducers/googleMapReducer'
import GoogleMapActionTypes from '../components/googleMap/constants/googleMapActionTypes'
import AppActionTypes from '../components/app/constants/appActionTypes';
import AppReducer from '../components/app/reducer/appReducer';
import ErrorBoundaryActionTypes from '../components/errorBoundary/constants/errorBoundaryActionTypes';
import ErrorBoundaryReducer from '../components/errorBoundary/reducer/errorBoundaryReducer';

//Create LandmarkRemark Component Reducer
const landMarkRemarkReducer = new LandMarkRemarkReducer(immutable, LandMarkRemarkActionsTypes);
//Create GoogleMap Component Reducer
const googleMapReducer = new GoogleMapReducer(immutable, GoogleMapActionTypes);
//Create Application Reducer
const appReducer = new AppReducer(immutable, AppActionTypes, landMarkRemarkReducer, googleMapReducer);
//Create Component ErrorBoundaryReducer
const errorBoundaryReducer = new ErrorBoundaryReducer(immutable, ErrorBoundaryActionTypes);

//Create combined reducers for app
const reducer = combineReducers({
    appReducer,
    errorBoundaryReducer
});

export default reducer;

