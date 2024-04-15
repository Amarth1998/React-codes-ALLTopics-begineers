// import { createStore } from "redux"; 
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import { applyMiddleware } from 'redux'
import thunk from "redux-thunk";

export const store=configureStore(reducer,{},applyMiddleware(thunk))