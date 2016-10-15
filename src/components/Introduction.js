import React, {Component, PropTypes} from 'react'

export default class Introduction extends Component {
   render() {
      const {personalInfo} = this.props
      return (
         <div className="introduction">
            <h3>{personalInfo.bio}</h3>
         </div>
      )
   }
}

Introduction.propTypes = {
   personalInfo: PropTypes.object.isRequired
}
