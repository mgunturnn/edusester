import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from "../services/UserService";
import Cookies from "js-cookie";
import "./crud.css"

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    // State untuk menyimpan sebuah data
    // Mirip mirip kayak variable
    // State users bakal dipakai untuk menyimpan kumpulan data user dalam bentuk array
    this.state = {
      users: [],
    };

    // Untuk inisialisasi methodnya 
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this );
    this.logout = this.logout.bind(this );
  }

  deleteUser(id) {
    // Menghapus user
    // Manggil userSevice lalu manggil backend untuk ngehapus data berdasarkan id tertentu
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }
  viewUser(id) {
    // pindahin link ke view-user/id
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    // Mindahin link ke /add-user/ 
    this.props.history.push(`/add-user/${id}`);
  }

  logout(){
    this.props.history.push(`/`);
    Cookies.remove("username")
    Cookies.remove("password")
  }


  // Ini mirip kayak use effect nya untuk di eksekusi datanya pertama kali
  // waktu programnya dibuka
  componentDidMount() {

    // asyncronous javascript

    // Buat nangkap data user
    UserService.getUsers().then((res) => {

      // Klo datanya kosong, bakal di pindahin buat nambah usernya terlebih dahulu
      if (res.data == null) {
        this.props.history.push("/add-user/_add");
      }

      // Untuk update data state data users diatas, kita update pake setState 
      // diisi sama data users yang udah di get pake axios di backendnya !
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  // proses menampilkan data-data yang sudah di proses
  render() {
    return (
      <div>
        <h2 className="text-center">DAFTAR LAPORAN KEJADIAN BENCANA</h2>
        <div className="row" >
          <button className="btn btn-primary" onClick={this.addUser}>
            {" "}
            Tambah Data Bencana
          </button>
          <button className="btn btn-danger" style={{marginLeft: 20}} onClick={this.logout}>
            {" "}
            LOG OUT
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Nama Bencana</th>
                <th> Daerah Terjadi Bencana</th>
                <th> Update Penanganan</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping data semua users nanti akan dirender ke dalam reactnya !*/}
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td> {user.firstName} </td>
                  <td> {user.lastName}</td>
                  <td> {user.email}</td>
                  <td>
                    <button
                      style={{ marginBottom : "10px" }}
                      onClick={() => this.editUser(user.id)}
                      className="btn btn-info"
                    >
                      Update Data
                    </button>
                    <br />
                    <button
                      style={{ marginBottom : "10px" }}
                      onClick={() => this.deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Hapus Data
                    </button>
                    <br />
                    <button
                      style={{ marginBottom : "10px" }}
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-info"
                    >
                      Lihat Data
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
