import React, { Component } from 'react';
import Input from './../Input/Input';
import {connect} from 'react-redux';
import * as actions from '../../store/actions'
import { Redirect } from 'react-router-dom';
import workerCode from '../../store/sharedWorker/sharedWorkerAuth';

class Auth extends Component {
  state = {
    loginForm: {
      login: {
        label: 'Введите логин',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Логин'
        },
        value: '',
        valid: false,
        touched: true,
        validation: {
          isRequired: true,
          minLength: 6,
        }
      },
      password: {
        elementType: 'input',
        value: '',
        label: 'Введите пароль',
        elementConfig: {
          type: 'password',
          placeholder: 'Пароль'
        },
        touched: false,
        valid: false,
        validation: {
          isRequired: true,
        }
      }
    },
    valid: true,
    worker: this.getSharedWorker()
  };

  handleFormConfirm = (event) => {
    event.preventDefault();
    const result = Object
      .keys(this.state.loginForm)
      .reduce((res, key) => {
        res[key] = this.state.loginForm[key].value;
        return res
      }, {});
    console.log("handle login");
    console.log(result);
    //this.props.onAuth(result.login, result.password);
      this.state.worker.then((worker) => {
          worker.port.postMessage({login:result.login, password:result.password});
      });
  };

  checkValidity = (value, rule) => {
    let isValid = true;
    if (rule.isRequired) {
      isValid = value.trim()!== '';
    }
    if (rule.minLength) {
      isValid = value.trim().length >= rule.minLength && isValid;
    }
    return isValid;
  };

    onWorkerMessage (event) {
        console.log("got msg from worker");
        if (event.data.isOk){
            this.props.onAuth(event.data.authData);
        }
    }

    getSharedWorker () {
        const workerFile = new Blob([`(${workerCode})(self)`], {type: 'text/javascript'});
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.addEventListener('loadend', (event) => {
                const worker = new SharedWorker(event.target.result);
                worker.port.addEventListener('message', this.onWorkerMessage.bind(this));
                worker.port.start();
                window.addEventListener('beforeunload', () => {
                    worker.port.postMessage('disconnect');
                });
                res(worker);
            });
            reader.addEventListener('error', rej);
            reader.readAsDataURL(workerFile);
        });
    }

  handleInput = (event, key) => {
    const newFormData = {
      ...this.state.loginForm
    };
    const inputData = {
      ...this.state.loginForm[key],
    };

    inputData.touched = true;
    inputData.value = event.target.value;
    inputData.valid = this.checkValidity(inputData.value, inputData.validation);

    const invalid = Object.keys(newFormData).some(key => {
        return !newFormData[key].valid;
    });

    newFormData[key] = inputData;
    this.setState({
      loginForm: newFormData,
      valid: !invalid,
    });
  };

  render() {
    const inputs = Object
      .keys(this.state.loginForm)
      .map(key => {
        const element = this.state.loginForm[key];
        return <Input
          key={key}
          elementType={element.elementType}
          elementConfig={element.elementConfig}
          value={element.value}
          valid={element.valid}
          label={element.label}
          touched={element.touched}
          invalid={!element.valid}
          changed={(event) => this.handleInput(event, key)}
          />
      });

    let redirect = null;
    if(this.props.token) {
      redirect = <Redirect to='/about'/>
    }

    if(this.props.error) {

    }

    return (
      <form onSubmit={this.handleFormConfirm}>
        {inputs}
        <button disabled={!this.state.valid} type='submit'>Войти</button>
        {this.props.token}
        {redirect}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
      onAuth: (authData) => dispatch(actions.auth(authData))
  }
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
