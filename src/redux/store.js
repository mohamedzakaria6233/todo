/* eslint-disable */
import {configureStore} from '@reduxjs/toolkit'
import bookSlice from './bookSlice'
import loginSlice from './loginSlice';
const store=configureStore({reducer:{bookSlice,loginSlice}})
export default store;