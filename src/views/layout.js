import React from 'react'
import '../statics/css/reset'
import '../statics/css/animate'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Layout extends React.Component {
    render () {
        return (
            <ReactCSSTransitionGroup
            component="div"
            className="react-container"
            transitionName="slide-in"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
                <div key={this.props.location.pathname} className={this.props.location.pathname}>
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}