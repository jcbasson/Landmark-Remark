import React, {Component} from 'react'
//import {} from '../actions/appActions'
import HeaderPresenter from './headerPresenter'

class HeaderContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return HeaderPresenter(this.props);
    }
}

export default HeaderContainer;