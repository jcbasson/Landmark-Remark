import React, {Component} from 'react'
import RemarkPresenter from './RemarkPresenter'

class RemarkContainer extends Component {
    constructor(props) {
        debugger;
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        debugger;
        return RemarkPresenter(this.props);
    }
}

export default RemarkContainer;