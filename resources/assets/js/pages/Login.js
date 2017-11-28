import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { auth } from '../helpers/Authentificate';
import '../../css/login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
            redirectToReferrer: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onSubmitHandle(e) {
        e.preventDefault();
        const {email, password} = this.state;
        if (email == '' || password == '') {
            this.setState({message: 'Поля формы должны быть заполненны'});
        } else {
            axios.post('/api/v1/login', {
                name: email,
                password: password
            })
                .then(function (response) {
                    auth.authentificate(response.data.token);
                    // localStorage.setItem('token', response.data.token);
                    this.setState({redirectToReferrer : true});
                }.bind(this))
                .catch(function (error) {
                    this.setState({message: 'Неверное имя пользователя или пароль'});
                    console.log(error);
                }.bind(this));
        }
    }


    render() {
        let err_message = (this.state.message) ? <span>{this.state.message}</span> : '';
        const {redirectToReferrer} = this.state;

        if(redirectToReferrer){
            return(
                <Redirect to={{pathname : '/admin'}} />
            )
        }
        return (
            <div className="login">
                <form>
                    {err_message}
                    <div className="form-group">
                        <label>Логин</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email"
                               onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input type="password" className="form-control" name="password" placeholder="Password"
                               onChange={this.onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmitHandle}>Войти</button>
                </form>
            </div>
        )
    }
}
export default Login;