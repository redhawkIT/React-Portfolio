import React, {Component, PropTypes} from 'react'

export default class Introduction extends Component {
   render() {
      const {personalInfo} = this.props
      return (
        <div className="container">
            <div className="row">
                <div className="col-sm-offset-1 col-sm-10">
                    <h3>{personalInfo.bio}</h3>
                </div>
            </div>
        </div>
      )
   }
}

Introduction.propTypes = {
   personalInfo: PropTypes.object.isRequired
}
