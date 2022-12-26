import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props) // data yang dimasukkan kedalam component

        // Inisialiasasi state/ variabel yang diperlukan dalam program ini
        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        }
        this.changeFirstNameHandler =
            this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler =
            this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser =
            this.saveOrUpdateUser.bind(this);
    }

    // Jadi semacam useEffect nya, function yang akan dieksekusi ketika membuka halamanya
    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            // Menampilkan data lama yang diambil dari database berdasarkan id user yang dipilih
            UserService.getUserById(this.state.id).
                then((res) => {
                    let user = res.data;
                    // Di simpan ke dalam sebuah state/variable
                    // mengget user dengan id sekian lalu kita simpan pada sebuah state/variable
                    this.setState({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    });
                });
        }
    }

    // function untuk menyimpan atau mengupdate data dari user
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName, lastName:
                this.state.lastName, email: this.state.email
        };
        console.log('user => ' + JSON.stringify(user));

        // step 5
        // jika state bernilai _add
        if (this.state.id === '_add') {
            // maka ia akan memanggil function createUser 
            UserService.createUser(user).then(res => {
                // kemudian mengganti/memindahkan link 
                this.props.history.push('/users');
            });
            // jika state tidak bernilai _add
        } else {
            // maka akan dipanggil function updateUser
            UserService.
                updateUser(user, this.state.id).then(res => {
                    // kemudian memindahkan link
                    this.props.history.push('/users');
                });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    cancel() {
        this.props.history.push('/users');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Tambah Data Bencana</h3>
        } else {
            return <h3 className="text-center">Update Data Bencana</h3>
        }
    }

    // proses menampilkan data-data yang sudah di proses
    // menampilkan field-field kosong yang perlu diisi user
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nama Bencana: </label>
                                        <input placeholder="Nama Bencana"
                                            name="firstName" className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Tempat Kejadian: </label>
                                        <input placeholder="Tempat Kejadian"
                                            name="lastName" className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Update Penanganan: </label>
                                        <input placeholder="Update Penanganan"
                                            name="email" className="form-control"
                                            value={this.state.email}
                                            onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success"
                                        onClick={this.saveOrUpdateUser}>Save
                                    </button>
                                    <button className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateUserComponent
