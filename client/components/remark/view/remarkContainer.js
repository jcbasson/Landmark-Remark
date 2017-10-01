import React, {Component} from 'react'
import RemarkPresenter from './RemarkPresenter'

class RemarkContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return RemarkPresenter(this.props);
    }
}

export default RemarkContainer;