import React, { useEffect } from 'react'
import Browser from './Browser'
import Weather from './Weather'


const Home = () => {    
    return (
        <div className='container'>
            <div className='header'> H</div>
                {/* <div className='sidebar-right'> */}
                <div className='weather t'> <Weather/> </div>
                <div className='mail t'> mail</div> 
                <div className='calc t'> calc</div> 
                <div className='favorites t'> favorites</div> 
                <div className='books t'> books</div> 
        
            <div className='browser t'>
                <Browser />
                </div>

        {/* <div className='sidebar-left'>*/}
                <div className='news t'> news</div> 
                <div className='toDo t'> toDo</div> 
                <div className='notes t'> notes</div> 
                <div className='flix t'> flix</div> 
                <div className='photos t'> photos</div>
            <div className='footer'> F</div> 
        </div>
    )
};

export default Home