import React from 'react'
import { FiUpload } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import {motion} from 'framer-motion'
import {fadeIn} from "../Varients"

const Work = () => {
  return (
    <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
    
    
    className="flex flex-col items-center bg-white py-16 px-4 max-w-full w-full text-center border border-gray-200 rounded-2xl">
    <h1 className="text-3xl sm:text-4xl font-semibold sm:font-bold text-gray-800">How It Work</h1>
    <p className="max-w-2xl text-slate-700 mt-4 max-sm:text-sm pb-4">Our simple 3-step process makes selling your unused software licenses quick and hassle-free.</p>
    <div className="flex flex-wrap items-center justify-center gap-8">
    <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <div className="w-110 flex justify-center pt-10">
            <div className="w-15 h-15 rounded-full overflow-hidden bg-[#deeafe]">
             <FiUpload size={40} className='h-12 w-12 pt-4 pl-3 stroke-blue-700'/>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <p className="font-medium mt-3 p-2">Upload License Details</p>
            <p className="text-gray-500 text-sm p-4">Submit your license information through our secure form.
                <br />
                 We handle all major software vendors.</p>
            
        </div>
    </div>

    <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-500/30 hover:shadow-lg transition-shadow duration-300">
        <div className="w-110 flex justify-center pt-10 ">
            <div className="w-15 h-15 rounded-full overflow-hidden bg-[#dcfce7]">
            <BsCurrencyDollar size={40} className='h-12 w-12 pt-4 pl-3 stroke-green-700'/>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <p className="font-medium mt-3 p-2">Get Instant Valuation</p>
            <p className="text-gray-500 text-sm p-4">Receive a competitive market-based quote within minutes <br /> using our advanced pricing algorithm.</p>
            
        </div>
    </div>

    <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-500/30 hover:shadow-lg transition-shadow duration-300">
        <div className="w-110 flex justify-center pt-10">
            <div className="w-15 h-15 rounded-full overflow-hidden bg-[#fef9c3]">
            <FiCreditCard size={40} className='h-12 w-12 pt-4 pl-3 stroke-orange-700'/>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <p className="font-medium mt-3 p-2">Get Paid Quickly</p>
            <p className="text-gray-500 text-sm p-4">Accept our offer and receive payment within 48 hours <br /> through your preferred payment method.</p>
            
        </div>
        
    </div>
   
    <a className="text-sm  flex items-center justify-center space-x-1 hover:underline font-semibold" href="#">
              <span>
                Get ready to started ?
              </span>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none"  xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            
</div>
    </motion.div>
  )
}

export default Work
