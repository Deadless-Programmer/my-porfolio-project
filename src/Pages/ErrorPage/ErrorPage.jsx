import React from 'react';
import errorpage from '../../assets/6325254.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center'> 
            <img className='w-[720px] ' src={errorpage} alt="" />
          
        </div>
       <div className='flex justify-center items-center'>
       <Link  to='/'>
            <button className="btn bg-red-600 border-0 text-white hover:bg-lime-700 capitalize">
                  Back to Home
                </button></Link>
       </div>
        </div>
    );
};

export default ErrorPage;