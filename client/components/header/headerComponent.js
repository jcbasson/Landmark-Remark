import {connect} from 'react-redux';
import HeaderContainer from './view/headerContainer';

const mapStateToProps = (state) => {
    const {user} = state.appReducer.userMap;
    return {user};
};

const HeaderComponent = connect(
    mapStateToProps
)(HeaderContainer);


export default HeaderComponent;