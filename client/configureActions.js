import LandMarkRemarkActionsTypes from './components/landMarkRemark/constants/landMarkRemarkActionsTypes';
import LandMarkRemarkActions from './components/landMarkRemark/actions/landMarkRemarkActions';
import GoogleMapActionTypes from './components/googleMap/constants/googleMapActionTypes';
import GoogleMapActions from './components/googleMap/actions/googleMapActions';
import AppActionTypes from './components/app/constants/appActionTypes';
import AppActions from './components/app/actions/appActions';

//Create actions object for LandMarkRemark component
const landMarkRemarkActions = new LandMarkRemarkActions(LandMarkRemarkActionsTypes);
//Create actions object for GoogleMap component
const googleMapActions = new GoogleMapActions(GoogleMapActionTypes);
//Create action object for the application
const appActions = new AppActions(AppActionTypes, landMarkRemarkActions, googleMapActions);

export default appActions;