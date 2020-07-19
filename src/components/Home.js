import React, { useEffect } from 'react'
import Browser from './Browser'
import Weather from './Weather'
import News from './News'
import Notes from './Notes'
import Books from './Books'
import {initDb} from '../sql.js'
// import { sqladmin } from 'googleapis/build/src/apis/sqladmin'
const { Sequelize } = require('sequelize')
// import Calculator from './Calculator';

const Home = () => {  
    
    return (
        <div className='container'>
        <div className='header'>
           Header     
        </div>
        <div className='col'>
            <div className='row weather'>
                <Weather/>
            </div>
            {/* <div className='row calculator'>
               <Calculator/>
            </div> */}
            <div className='row books'>
                <Books/>
            </div>
        </div>
        <div className='col2'>
            <div className='row2 browser'>
                <Browser/>
            </div>
        </div>
        <div className='col'>
            <div className='row news'>
                <News/>
            </div>
            <div className='row toDos'>
               <Notes/>
            </div>
            <div className='row notes'>
                7
            </div>
        </div>
        <div className='footer'>
            Footer     
        </div>
    </div>
    )
};

export default Home