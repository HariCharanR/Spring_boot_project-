import React from 'react'
import { Link } from 'react-router-dom'
// import "./Header.css"
function Header() {
    return (
        <div className='w-full h-[80px]  border-b bg-red-600'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                
                <img src="https://e7.pngegg.com/pngimages/1024/68/png-clipart-lego-logo-icons-logos-emojis-iconic-brands.png" className="h-[25px]" />
                
                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-4'>
                        <Link to="/" className='text-xl font-semibold text-white'>Home</Link>
                        <Link to="/add-toy" className='text-xl font-semibold text-white'>Add Toy</Link>
                       
                    </ul>
                </div>
    
    
            
    
                <div className='md:hidden'  >
                        <img src="" />
                </div>
    
    
    
    
            </div>
    

            
            
        </div>
      )
}

export default Header