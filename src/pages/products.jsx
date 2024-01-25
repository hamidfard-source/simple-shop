import React from 'react';
import nike from '../assets/GreenJordanShoeUnsplash.jpg'

// card ===> product> ID Name Price Img

const Products = () => {
    return (
        <main className='grid grid-cols-6 bg-slate-200 h-screen w-full'>
            <aside className=' col-span-1 bg-slate-300 px-4 py-6'>
                <form action="#">
                    <input className='font-thin w-full text-slate-800 px-3 py-2 rounded-lg' type="text" name="search" id="search" placeholder='search item ...' />
                    <select name="orand" id="">
                        <option value="good">good</option>
                        <option value="bad">bad</option>
                    </select>
                    <input className='w-full py-2 bg-blue-500 hover:bg-blue-400 rounded-lg ' type="button" value="submit"/>
                </form>
            </aside>

            <section className='col-span-5 flex flex-row bg-slate-200 p-2'>
                <div className='w-56 max-h-80 flex flex-col flex-wrap items-center rounded-xl bg-slate-300'>
                    <div className='w-52 mt-4 mb-1 px-2'>
                        <img src={nike} className='rounded-md object-cover' alt="shop" />
                    </div>
                    <div className='w-full flex flex-col '>
                        <h2 className='font-medium ml-5 mb-1'>Nike Jordan 2023</h2>
                        <h4 className='place-self-end text-red-700 mr-5'>200 $</h4>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Products;
