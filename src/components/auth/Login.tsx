import React, { FC, ChangeEvent, useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'reactstrap'
import FormControl from '../FormControl'
import { Link } from 'react-router-dom'

const Login: FC = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
    });

    const { email, password, emailError, passwordError } = state;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        let { name, value } = e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault();

        let isError = false;
        console.log('state', state)
    }

  return (
    <Row>
                <Col md={4}>
                    <Form onSubmit={handleSubmit}>


                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address"
                        id="email"
                        className='form-control'
                        onChange={handleChange}
                        value={email}
                        required
                        />

<input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        id="password"
                        className='form-control'
                        onChange={handleChange}
                        value={password}
                        required
                        />

<button className='btn btn-secondary btn-block' type='submit'> Sign In </button>

<hr/>

<p>Don't have an account?</p>
<Link to={'/register'}>
<button className='btn btn-primary btn-block' type='button' id='button-signup'> <i className='fas fa-user-plus'> </i> Signup new account</button>
    </Link> 


                        {/* <FormControl
                            label="Username"
                            type="text"
                            value={''}
                            handleChange={handleChange}
                            error={''}
                        />

                        <FormControl
                            label="Password"
                            type="password"
                            value={''}
                            handleChange={handleChange}
                            error={''}
                        /> */}

                        {/* <Button color="primary">Login</Button> */}
                    
                    </Form>
                </Col>
            </Row>
  )
}

export default Login