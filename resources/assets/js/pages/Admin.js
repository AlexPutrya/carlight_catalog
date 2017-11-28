import React, { Component } from 'react';
import '../../css/admin.css';

class Admin extends Component {

    render(){
        return(
            <h1>Admin {localStorage.getItem('token')}</h1>
        );
    }
}

export default Admin;