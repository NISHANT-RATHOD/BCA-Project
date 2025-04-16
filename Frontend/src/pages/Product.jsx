import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
 

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const[productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [toggle,setToggle] = useState(false);
  const [count,setCount] = useState(1);
  const [size,setSize] = useState('');
  const fetchProductData = async (params) => {
    
    products.map((item)=>{
       if(item._id === productId){
           setProductData(item);
           setImage(item.image[0]);
           return null; 
       }
    })
  }

  useEffect(()=>{
     fetchProductData();
  },[productId,products])


  return productData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'> 
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
           {/* Product Image */}
           <div className='flex-1 flex flex-col-reverse gap-3  sm:flex-row'>
               <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                      productData.image.map((item,index)=>(
                        <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' alt="" />
                      ))
                    } 
               </div>
               <div className='w-full sm:w-[80%]'>
                   <img className='w-full h-auto' src={image} alt="" />
               </div>
           </div>
          {/* Product Information */}
          
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2 '>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                   <img onClick={(e)=> {setToggle(toggle==false ?true:false) ; setCount(1);} }  src={toggle && count >= 1 ?assets.star_icon:assets.star_dull_icon} className='w-3 5 cursor-pointer' alt="" />
                   <img onClick={(e)=> {setToggle(toggle==false ?true:false) ; setCount(2);}}  src={toggle && count >= 2?assets.star_icon:assets.star_dull_icon} className='w-3 5 cursor-pointer' alt="" />
                   <img onClick={(e)=> {setToggle(toggle==false ?true:false) ; setCount(3);}}  src={toggle && count >= 3?assets.star_icon:assets.star_dull_icon} className='w-3 5 cursor-pointer' alt="" />
                   <img onClick={(e)=> {setToggle(toggle==false ?true:false) ; setCount(4);}}  src={toggle && count >= 4?assets.star_icon:assets.star_dull_icon} className='w-3 5 cursor-pointer' alt="" />
                   <img onClick={(e)=> {setToggle(toggle==false ?true:false) ; setCount(5);}}  src={toggle && count >= 5?assets.star_icon:assets.star_dull_icon} className='w-3 5 cursor-pointer' alt="" />
                   <p className='pl-2'>(123)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='pt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                 <div className='flex gap-2'>
                      {JSON.parse(productData.sizes[0]).map((item,index)=>(
                        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size?'border-black-500':''}`} key={index}>{item}</button>
                      ))}   
                 </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black  text-white px-8 py-3 text-sm active:bg-gray-500'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Original product.</p>
                    <p>Cash on delivery is available on this product.</p>
                    <p>Easy return and exchange policy within 7 days.</p>
              </div>
          </div>
      </div>
      {/* Description & Review Section */}
         <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Desctiption</b>
                <p className='border px-5 py-3 text-sm'>Reviews(123)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>An e-commerce website is an online store where buyers can browse, purchase, and pay for products and services. E-commerce websites allow businesses to sell their products and services online, rather than in a physical storeE-commerce refers to commercial activities including the electronic buying or selling products and services which are conducted on online platforms or over the Internet.</p>
              <p>E-commerce refers to commercial activities including the electronic buying or selling products and services which are conducted on online platforms or over the Internet.There are three areas of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is supported by electronic business.</p>            
            </div>
         </div>
            {/* display related products */}

              <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  
  
  
  ) : <div className='opacity-0' ></div>
}

export default Product
