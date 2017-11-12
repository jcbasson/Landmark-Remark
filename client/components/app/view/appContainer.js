import React, {Component} from 'react'
import AppPresenter from './appPresenter'

class AppContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch, actions} = this.props;
        dispatch(actions.requestUserMap());
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return AppPresenter(this.props);
    }
}

export default AppContainer;