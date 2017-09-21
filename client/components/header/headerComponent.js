import {connect} from 'react-redux';
import HeaderContainer from './view/headerContainer';

const mapStateToProps = (state) => {
    const {user} = state;
    const {userName} = user;
    return {userName};
};

const HeaderComponent = connect(
    mapStateToProps
)(HeaderContainer);


export default HeaderComponent;