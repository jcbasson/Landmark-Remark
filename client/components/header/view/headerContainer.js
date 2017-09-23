import React, {Component} from 'react'
//import {} from '../actions/appActions'
import HeaderPresenter from './headerPresenter'

class HeaderContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props;
        console.log('JC HeaderContainer componentDidMount()' ,this.props);
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return HeaderPresenter(this.props);
    }
}

export default HeaderContainer;