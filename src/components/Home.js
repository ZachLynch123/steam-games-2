import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import addUser from '../actions/addUser';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            steamid: ""
        }
    }


    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.user){
            this.props.addUser(this.state)
        } else {
        }
        this.props.history.push(`/user/${this.state.steamid}`)
    }

    handleChange(event){
        this.setState({
            steamid: event.target.value
        })
    }

    redirectOrRenderForm = () => {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>new</label>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.steamid} />
                    <input type="submit" value="Submit"/>
                </form>
            )
    }

    render() {
        // debugger
        return (
            <>
            {this.redirectOrRenderForm()}
            </>
        )
    }
}

export default withRouter(connect(null, { addUser })(Home))
