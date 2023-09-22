import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header';

function Customers() {

  const [customers, setCustomers] = useState([]);

  const getAllCustomers = async () => {
    const customers1 = await axios.get("http://localhost:8082/Customer/");
    setCustomers(customers1.data);
    console.log(customers1.data);
}

  useEffect(() => {
      getAllCustomers();
  },[])

  return (

    <>
    <Header />
    <div className="w-full min-h-screen bg-black h-fit flex flex-col p-6">
    <div className=" w-full text-center h-fit ">
      <h1 className="text-white font-semibold text-2xl mb-1">
        Customers
      </h1>
      <div className="bg-red-500 w-full h-[2px] my-2"></div>
    </div>
    <div className="   w-full h-fit bg-black   gap-y-4  p-4 ">
             
             {customers.map(customer => (
            <div
            key={customer.id}
            className={` bg-slate-200   cursor-pointer h-fit p-5  my-3 hover:shadow-custom hover:shadow-red-600 transition rounded-md`} 
          >
          
            <div className="w-full h-[25%]  pr-2 px-2  flex flex-col items-center justify-between">
              <div className="h-full max-sm:text-xs flex justify-center flex-col max-md:text-[0.745rem]   max-lg:text-[0.715rem] max-lg:font-semibold lg:max-xl:text-[0.73rem]">
                <h6 className="font-semibold  max-sm:mb-1">Name:{`${customer.name}`}</h6>
                <p className="m-0 text-gray-600  max-sm:font-semibold">Phone: {`${customer.phone}`}</p>
              </div>
              <div className="w-full h-[2px] bg-red-500 my-4"></div>
              {customer.orders.map(order => (
                  <div className='border-2 border-red-500 bg-gray-100 shadow-lg m-5 p-5 rounded-md '>
                      <p>Order Id : {order.id}</p>
                      <p>Amount : {order.amount}</p>
                      <p>ordered By : {order.customerr}</p>
                    </div>

              ))}
             
            </div>
           
          </div>
             ))}
             
             
    </div>
  
    
  </div>
    </>
    
  )
}

export default Customers