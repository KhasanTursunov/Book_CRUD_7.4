import React from 'react'
import Book from '../assets/svg/book.svg'
const HomePage = () => {
  return (
    <div className="container max-w-7xl mx-auto p-6 grid grid-cols-2 gap-20 items-center">
      <div className='flex flex-col gap-4'>
        <h1 className="text-blue-700 text-6xl">Dive into endless stories</h1>
        <h1 className="text-red-500 text-6xl">Explore Now</h1>
        <h1 className="text-black text-6xl">Eric-Emanuel Schmitt </h1>
        <p className="text-black">
          Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes
          and distinctions, and in 2001 he received the title of Chevalier des
          Arts et des Lettres. His books have been translated into over 40
          languages.
        </p>
        <button className='border rounded p-2 bg-violet-500 text-white cursor-pointer '>View his books</button>
      </div>
      <div>
        <img src={Book} alt="" />
      </div>
    </div>
  );
}

export default HomePage