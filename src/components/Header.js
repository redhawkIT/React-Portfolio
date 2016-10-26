import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { name, resume, email, github, linkedIn, angelList } = this.props.personalInfo
    return (
          <nav className="navbar navbar-fixed-top navbar-inner header">

            <div className="container">
              <div className="navbar-brand">
                <a href="#" > {name} </a>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href={resume} className="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href={email} className="nav-link">
                    <i className="fa fa-envelope icon"></i>
                  </a>
                </li>
                <li>
                  <a href={github} className="nav-link" target="_blank">
                    <i className="fa fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href={linkedIn} className="nav-link" target="_blank">
                    <i className="fa fa-linkedin-square icon"></i>
                  </a>
                </li>
                {angelList &&
                  <li>
                    <a href={angelList} className="nav-link" target="_blank">
                      <i className="fa fa-angellist icon"></i>
                    </a>
                  </li>
                }
                </ul>
            </div>
            </nav>
    )
  }
}
