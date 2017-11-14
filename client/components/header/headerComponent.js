import {connect} from 'react-redux';
import HeaderContainer from './view/headerContainer';

const mapStateToProps = ({appReducer}) => {
    const userName = appReducer.getIn(['userMap', 'user', 'userName']);
    return {userName};
};

const HeaderComponent = connect(
    mapStateToProps
)(HeaderContainer);


export default HeaderComponent;