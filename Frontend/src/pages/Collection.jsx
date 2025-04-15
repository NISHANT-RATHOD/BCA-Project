import React, { use, useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products ,search, showSearch} = useContext(ShopContext);
  const [ShowFilter,setShowFilter] = useState(false);
  const [FilterProducts,setFilterProducts] =useState([]);
  const [Category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType ,setSortType] = useState('relavent');


  const toggleCategory = (e) => {

    if(Category.includes(e.target.value)){
        setCategory(prev=> prev.filter(item => item !== e.target.value))     
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{

    if(subCategory.includes(e.target.value)){
        setSubCategory(prev=> prev.filter(item => item !== e.target.value))     
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const ApplyFilter = () =>{
    
    let productsCopy = products.slice();
    
    if(showSearch && search){
       productsCopy = productsCopy.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(Category.length > 0){
      productsCopy = productsCopy.filter(item => Category.includes(item.category))
    }
     
    if(subCategory.length > 0){
         productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy);
  }
   

  const sortProduct = () =>{
     let fpCopy = FilterProducts.slice();

     switch(sortType){

        case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

        case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

         default:
          ApplyFilter();
          break;
     }
  }
   useEffect(()=>{
      ApplyFilter();
   },[Category,subCategory,search,showSearch,products])

   useEffect(()=>{
        sortProduct();
   },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${ShowFilter?'rotate-90':''}`} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter?'':'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                  <input className='w- cursor-pointer' type="checkbox" onChange={toggleCategory} value={'Men'} />
                  Men
                 </p>
                 <p className='flex gap-2'>
                  <input className='w- cursor-pointer' type="checkbox" onChange={toggleCategory} value={'Women'} />
                  Women
                 </p>
                 <p className='flex gap-2'>
                  <input className='w- cursor-pointer' type="checkbox" onChange={toggleCategory} value={'Kids'} />
                  kids
                 </p>
           </div>
        </div>
        {/*  SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter?'':'hidden'} sm:block`}>
           <p className='mb-3 text-sm font-medium'>TYPES</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                  <input className='w- cursor-pointer' type="checkbox" onChange={toggleSubCategory} value={'Topwear'} />
                  Topwear
                 </p>
                 <p className='flex gap-2'>
                  <input className='w- cursor-pointer' type="checkbox" onChange={toggleSubCategory} value={'Bottomwear'} />
                  Bottomwear
                 </p>
                 <p className='flex gap-2'>
                  <input className='w- cursor-pointer' type="checkbox" onChange={toggleSubCategory} value={'Winterwear'} />
                  Winterwear
                 </p>
           </div>
        </div>
      </div>
        {/* Right Side */}
        <div className='flex-1'>
           <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1={'ALL'} text2={'COLLECTION'}/>
              {/* Product Sort */}
              <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relavent">Sort By: Relavent</option>
                <option value="low-high">Sort By: Low-High</option>
                <option value="high-low">Sort By: High-Low</option>
              </select>
           </div>

           {/* Map Products */}
           <div className='grid grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4 gap-y-6'>
                    
                {
                  FilterProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                  ))
                } 
           </div>
        </div>       
    </div>
  )
}

export default Collection