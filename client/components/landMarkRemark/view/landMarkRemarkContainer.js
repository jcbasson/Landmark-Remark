import React, {Component} from 'react'
//import {} from '../actions/appActions'
import LandMarkRemarkPresenter from './LandMarkRemarkPresenter'

class LandMarkRemarkContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props;
        console.log('JC LandMarkRemarkContainer componentDidMount()' ,this.props);
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return LandMarkRemarkPresenter(this.props);
    }
}

export default LandMarkRemarkContainer;