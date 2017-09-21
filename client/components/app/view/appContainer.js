import React, {Component} from 'react'
import {} from '../actions/appActions'
import AppPresenter from './appPresenter'

class AppContainer extends Component {
    constructor(props) {

        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props;

    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return AppPresenter(this.props);
    }
}

export default AppContainer;