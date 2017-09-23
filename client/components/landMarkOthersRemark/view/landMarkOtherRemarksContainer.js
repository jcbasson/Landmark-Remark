import React, {Component} from 'react'
//import {} from '../actions/appActions'
import LandMarkOtherRemarksPresenter from './LandMarkOtherRemarksPresenter';

class LandMarkOtherRemarksContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props;
        console.log('JC LandMarkOtherRemarksContainer componentDidMount()' ,this.props);
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return LandMarkOtherRemarksPresenter(this.props);
    }
}

export default LandMarkOtherRemarksContainer;