import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { FormControl, Title } from '../components/LoginScreen.style'

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <FormContainer>
            <Title>Sign Up</Title>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <FormControl
                        type='name'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='email'>
                    <FormControl
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></FormControl>
                </Form.Group>
                <Form.Group controlId='password'>
                    <FormControl
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <FormControl
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></FormControl>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Register
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}
                    <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}
                    >
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
