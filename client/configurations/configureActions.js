import LandMarkRemarkActionsTypes from '../components/landMarkRemark/constants/landMarkRemarkActionsTypes';
import LandMarkRemarkActions from '../components/landMarkRemark/actions/landMarkRemarkActions';
import GoogleMapActionTypes from '../components/googleMap/constants/googleMapActionTypes';
import GoogleMapActions from '../components/googleMap/actions/googleMapActions';
import AppActionTypes from '../components/app/constants/appActionTypes';
import AppActions from '../components/app/actions/appActions';
import ErrorBoundaryActionTypes from '../components/errorBoundary/constants/errorBoundaryActionTypes';
import ErrorBoundaryActions from '../components/errorBoundary/actions/errorBoundaryActions';

//Create actions object for LandMarkRemark component
const landMarkRemarkActions = new LandMarkRemarkActions(LandMarkRemarkActionsTypes);
//Create actions object for GoogleMap component
const googleMapActions = new GoogleMapActions(GoogleMapActionTypes);

//Create action object for the application
export const appActions = new AppActions(AppActionTypes, landMarkRemarkActions, googleMapActions);
//Create action object for component error handling
export const errorBoundaryActions = new ErrorBoundaryActions(ErrorBoundaryActionTypes);