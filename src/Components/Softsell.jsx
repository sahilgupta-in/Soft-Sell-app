import { BsCurrencyDollar } from "react-icons/bs";
import { IoShield } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {motion} from 'framer-motion'
import {fadeIn} from "../Varients"

const Softsell = () => {
  return (
 <motion.div
    variants={fadeIn("up",0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
    
    className="flex flex-col items-center bg-white py-16 px-4 max-w-full w-full text-center border border-gray-200 rounded-2xl">
     <h1 className="text-3xl sm:text-4xl font-semibold sm:font-bold text-gray-800">Why Choose SoftSell</h1>
     <p className="max-w-2xl text-slate-700 mt-4 max-sm:text-sm pb-4">We provide the most trusted, secure and valuable way to sell your unused software licenses.</p>
     <div className="flex flex-wrap items-center justify-center gap-8">
     <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-transparent hover:border-blue-700">
         <div className="w-85 flex  justify-center pt-10">
         <BsCurrencyDollar  className='text-4xl fill-blue-600'/>
         </div>
         <div className="flex flex-col items-center">
             <p className="font-bold mt-3 p-2 ">Best Market Rates</p>
             <p className="text-gray-600 text-sm p-4">Our extensive network of buyers allows us to offer the highest possible prices for your licenses.
                 .</p>
             
         </div>
     </div>
 
     <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-transparent hover:border-blue-700">
         <div className="w-85 flex justify-center pt-10 ">
         <IoShield className='text-4xl fill-blue-600' />
         </div>
         <div className="flex flex-col items-center">
             <p className="font-bold mt-3 p-2">100% Secure Process</p>
             <p className="text-gray-600 text-sm p-4">Enterprise-grade security protocols protect your license data and business information. </p>
             
         </div>
     </div>
 
     <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-transparent hover:border-blue-700 ">
         <div className="w-85 flex justify-center pt-10">
         <IoRocketSharp className='text-4xl fill-blue-600'/>
         </div>
         <div className="flex flex-col items-center">
             <p className="font-bold mt-3 p-2">Fast Turnaround</p>
             <p className="text-gray-600 text-sm p-4">Complete the entire process in as little as 48 hours, from valuation to final payment.
                </p>
             
         </div>
         
     </div>
     <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-transparent hover:border-blue-700 ">
         <div className="w-85 flex justify-center pt-10 ">
         <TfiHeadphoneAlt className='text-4xl fill-blue-600 '/>
         </div>
         <div className="flex flex-col items-center">
             <p className="font-bold mt-3 p-2">Expert Support</p>
             <p className="text-gray-600 text-sm p-4">Our team of licensing experts guides you through every step of the process.</p>
             
         </div>
     </div>
     </div>
     </motion.div>
  )
}
export default Softsell
