import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './Signup.module.css';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <h2 className={s.heading}>Signup</h2>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            onChange={this.onChange}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your e-mail"
            onChange={this.onChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your password"
            onChange={this.onChange}
          />
        </label>
        <button type="submit" className={s.cybrbtn}>
          <span aria-hidden className={s.cybrbtn__glitch}>
            Register
          </span>
          Register
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: state => dispatch(authOperations.register(state)),
});

export default connect(null, mapDispatchToProps)(Signup);
