import React, {Component} from 'react'
import AppPresenter from './appPresenter'

class AppContainer extends Component {
    constructor(props) {
        debugger;
        super(props)
    }

    componentDidMount() {
        const {dispatch, actions} = this.props;
        debugger;
        dispatch(actions.requestUserMap());
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return AppPresenter(this.props);
    }
}

export default AppContainer;