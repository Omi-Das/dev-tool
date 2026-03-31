
import './App.css'
import Navbar from './Navbar'
import Section from './Section'
import Block from './Block'

import { useState } from 'react'
import Artists from './Artists'
import Carts from './Carts'
import Footer from './Footer'
import Step from './Step'
import Workflow from './Workflow'
import { ToastContainer } from 'react-toastify'
import Static from './Static'

const getProducts = async () => {
  const res = await fetch("/cart.json");
  return res.json();
}
const productPromise = getProducts();
function App() {
 const [activeTab, setactiveTab] = 
 useState("product")
 const [carts,setCarts] = useState([]);
  return (
   <div>
 <Navbar carts={carts} setCarts={setCarts}></Navbar>
 <Section></Section>
 <Block></Block>
  <div>
   <div className='text-center mt-[100px] mb-[16px]'>
     <h1 className='text-4xl mb-[16px]'>Premium Digital Tools</h1>
    <p>Choose from our curated collection of premium digital products designed</p>
    <p>to boost your productivity and creativity.</p>
   </div>
    <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className= {`tab rounded-full w-40 ${activeTab === "product" ? "bg-gradient-to-r from-[#4f39f6] to-[#6a629e] text-white" : ""} `}
          aria-label="Products"
          onClick={()=>setactiveTab("product")}
            defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "cart" ? "bg-gradient-to-r from-[#4f39f6] to-[#6a629e] text-white" : ""} `}
          aria-label={`Cart (${carts.length})`}
          onClick={()=>setactiveTab("cart")}
        />
      </div>
  </div>
  {
    activeTab === "product" && <Artists productPromise={productPromise} carts={carts} setCarts={setCarts}></Artists>
  }
  {
    activeTab === "cart" && 
    <Carts carts={carts} setCarts={setCarts}></Carts>
  }
  <Step></Step>
  <Static></Static>
  <Workflow></Workflow>
  <Footer></Footer>
  <ToastContainer></ToastContainer>
   </div>
  )
}

export default App
