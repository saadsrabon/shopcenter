import React from 'react'
import data from '../../data/data.json'
import Image from 'next/image'
import Link from 'next/link';
export const metadata = {
  title: "Lws Shop Products",
  description: "The best place to buy your favorite products",
};
export function generateStaticParams() {
  
  return data?.products.map(item=>{
    id:item?.id
  })
}
const ProductDetails = ({params}) => {
    const product =data?.products.filter(item=>item?.id==params?.id)[0]
   const getdiscountedPrice =(price,percentage)=>{
          const discountammount =(price * percentage)/100
          const discountedPrice =price -discountammount
          return discountedPrice.toFixed(2)
   }
   const discountedPrice =getdiscountedPrice(product?.price,product?.discountPercentage)
    console.log(discountedPrice )
  return (
    <main className="h-screen">
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <Image width={400} height={500} src={product?.thumbnail} className="w-[400px] h-[500px] mx-auto object-cover" alt="" />

          <div className="flex gap-4 mt-4">
            {
                product?.images?.map(image=>( <Image width={100} height={100} key={image} src={image} className="w-[100px] h-[100px] mx-auto border object-cover" alt="" />))
            }
           
            
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold text-black">{product?.title}</h1>
          <Link href={`/category/${product?.category}`} className="text-[#919090] my-3">{product?.category}</Link>
          <div className="mt-3 flex items-center justify-start gap-1">
            {Array(Math.round(product?.rating)).fill().map((_,i)=><Image key={i} src="/star.svg" width={20}  height={10} alt="" />
            )}
          </div>
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">${product?.price}</span>
              <span className="font-bold text-2xl text-black">${discountedPrice }</span>
            </p>
          </div>
          <div>
            <p className="leading-7 text-black">
             {product?.description}
            </p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${discountedPrice}
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default ProductDetails;