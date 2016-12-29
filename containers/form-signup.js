'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { style } from 'next/css'

import signupRequest from '../actions/signup'
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from './../constants'

const styles = {
  registerForm: {
    maxWidth: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '50px'
  },

  formInput: {
    border: 'none',
    marginBottom: '25px'
  },

  label: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '10px'
  },

  input: {
    width: '100%',
    height: '55px',
    borderRadius: '4px',
    border: '1px solid #f2f2f2',
    padding: '15px',
    fontSize: '1.15rem',
    outline: 'none',
    color: '#333',
    transition: '.25s',

    ':focus': {
      borderColor: '#ddd'
    }
  },

  btn: {
    width: '100%',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 25px',
    fontSize: '.9rem',
    height: '55px',
    marginTop: '25px',
    fontWeight: '500',
    cursor: 'pointer',
    background: 'linear-gradient(to right, #52bdab 0%,#6BB6D6 100%)'
  }
}

class FormSignup extends Component {
  constructor () {
    super()

    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignup(e) {
    e.preventDefault()

    const data = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    }

    this.props.signupRequest(data).then(res => {
      if (res.type === SIGNUP_SUCCESS) {
        this.props.routing.url.pushTo('/login')
      }

      if (res.type === SIGNUP_ERROR) {
        console.log(res.data)
      }
    })
  }

  render () {
    return (
      <form className={style(styles.registerForm)} onSubmit={this.handleSignup}>
        <fieldset className={style(styles.formInput)}>
          <label className={style(styles.label)}>Name</label>
          <input className={style(styles.input)} type="text" ref={input => this.name = input}/>
        </fieldset>

        <fieldset className={style(styles.formInput)}>
          <label className={style(styles.label)}>E-mail</label>
          <input className={style(styles.input)} type="email" ref={input => this.email = input}/>
        </fieldset>

        <fieldset className={style(styles.formInput)}>
          <label className={style(styles.label)}>Password</label>
          <input className={style(styles.input)} type="password" ref={input => this.password = input}/>
        </fieldset>

        <button className={style(styles.btn)} type="submit">Sign Up</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupRequest: userData => dispatch(signupRequest(userData))
  }
}

export default connect(null, mapDispatchToProps)(FormSignup)