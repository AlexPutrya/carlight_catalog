import React, { Component } from 'react';
import '../../css/login.css';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            err : false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }
    onSubmitHandle(e) {
        e.preventDefault();
        const{email, password} = this.state;
        if (email == '' || password == ''){
            this.setState({error : true, err_message : 'Поля формы должны быть заполненны'});
        }
    }

    render() {
        let error = this.state.error;
        let err_message = (this.state.err_message) ? <span>{this.state.err_message}</span> : '';
        
        return(
                <div className="login">
                    <form>
                        {err_message}
                        <div className="form-group">
                            <label>Логин</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmitHandle}>Войти</button>
                    </form>
                </div>
        );
    }
}

export default Login;