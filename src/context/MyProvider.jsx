import MyContext from './MyContext'
import { useState, useReducer, useEffect } from 'react'


import data from '../data/basketballs-data'
import  {ACTIONS} from '../actions/action'

import {ballItemReducer} from '../reducers/ballItemReducer'
import {errorReducer} from '../reducers/errorReducer'
import {formDataReducer} from '../reducers/formDataReducer'
import {loginDataReducer} from '../reducers/loginDataReducer'



const MyProvider = ({children}) => {

    const [basketballsData] = useState(data)


    //Reducer initializations
    const loginDataInit = {userName: '', success: false}
    const formDataInit = {userName: '', password: ''}
    const errorInit = {error: ''}


    //useReducers

    //Login data
    const [loginData, loginDataDispatch] = useReducer(loginDataReducer, loginDataInit);

    //Form data
    const [formData, formDataDispatch] = useReducer(formDataReducer, formDataInit)

    //error data
    const [error, errorDispatch] = useReducer(errorReducer, errorInit)

    //Ball data
    const [ballItem, ballItemDispatch] = useReducer(ballItemReducer, [])

    //username and password

    const USERNAME = process.env.REACT_APP_USER_NAME
    const PASSWORD = process.env.REACT_APP_PASSWORD

    //Get and Set localStorage
    useEffect(() => {
        const localStorageBallItem = JSON.parse(localStorage.getItem('ballItem'));
        localStorageBallItem && ballItemDispatch({type: ACTIONS.SET, payload: localStorageBallItem})
    }, [])

    useEffect(() => {
        localStorage.removeItem('ballItem');
        localStorage.setItem('ballItem', JSON.stringify(ballItem))
    }, [ballItem])

    //Change Handler
    const changeHandler = (e) => {
        formDataDispatch({
            type: ACTIONS.GET,
            payload: {...formData, [e.target.name] : e.target.value}
        })
    }

    //Login
    const loginHandler = (e) => {
        e.preventDefault();
        formDataDispatch({
            type: ACTIONS.RESET,
            payload: {userName: '', password: ''}
        });

        USERNAME === formData.userName && PASSWORD === formData.password ? loginDataDispatch({
            type: ACTIONS.CHANGE,
            payload: {userName: USERNAME, success: true}
        }) : errorDispatch({
            type: ACTIONS.CHANGE,
            payload: {error: 'UserName or Password are incorrect'}
        });
    }

    //Logout
    const logoutHandler = () => {
        errorDispatch({type: ACTIONS.RESET, payload: ''});
        loginDataDispatch({
            type: ACTIONS.RESET,
            payload: {userName: '', success: false}
        })
    };

    return (
        <MyContext.Provider value={{
            loginData,
            error,
            loginHandler,
            logoutHandler,
            changeHandler,
            formData,
            basketballsData,
            ballItem,
            ballItemDispatch
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider