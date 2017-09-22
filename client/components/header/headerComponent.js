import {connect} from 'react-redux';
import HeaderContainer from './view/headerContainer';

const mapStateToProps = (state) => {
    const {user} = state;
    return {user};
};

const HeaderComponent = connect(
    mapStateToProps
)(HeaderContainer);


export default HeaderComponent;