import React from 'react';
import Product from '../Product';
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import {useState,useEffect} from "react"
import axios from 'axios';

const PopularProducts = () => {
  let [allData,setAllData]=useState([]);
  
  useEffect(()=>{
         
    async function viewData(){
       let data=await axios.get('https://dummyjson.com/products');
       setAllData(data.data.products);
       
    }
    viewData();
 
  },[])
  
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Heading text={"Popular Products"} tagName={"h3"} className={"text-[32px] font-bold text-[#253D4E] py-[20px]"}/>
           <div className='flex flex-wrap justify-between gap-x-3 gap-y-5'>
            {
              allData.map((item)=>(
                 
                <div className="w-[24%]">
                  <Product productIMG={item.thumbnail} productCATEGORY={item.category} productTITLE={item.title} productPRICE={item.price}/>
                </div>
              ))
            }
             
           </div>
        </Container>
        
      </div>
    </>
  )
}

export default PopularProducts
