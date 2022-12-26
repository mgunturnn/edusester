import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        // Ke backend buat ambil data terlebih dahulu
        // ambil data user dari id yang dipilih
        // data nya disimpan ke state user
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> 
                    View Data Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nama Bencana: </label>
                            {/* Render data user */}
                            <div> { this.state.user.firstName }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Tempat Kejadian: </label>
                            <div> { this.state.user.lastName }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Update Penanganan: </label>
                            <div> { this.state.user.email }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
