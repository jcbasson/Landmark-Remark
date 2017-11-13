import React, {Component} from 'react'
import LandMarkOtherRemarksPresenter from './LandMarkOtherRemarksPresenter';

class LandMarkOtherRemarksContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps) {

        //TODO CHECK equality between prevProps and this.props
    }

    render() {
        return LandMarkOtherRemarksPresenter(this.props);
    }
}

export default LandMarkOtherRemarksContainer;