import React, { useRef } from 'react'
import { useCreateBookMutation, useDeleteBookMutation, useGetBooksQuery } from '../redux/api/book.api'

const Home = () => {
  const { data, isLoading } = useGetBooksQuery()
  const [createBook, { isLoading: isCreateLoading }] = useCreateBookMutation()
  const [deleteBook] = useDeleteBookMutation()

  const title = useRef(null)
  const desc = useRef(null)
  const author = useRef(null)
  const type = useRef(null)
  const soldCount = useRef(null)

  const handleCreateBook = e => {
    e.preventDefault()
    let newBook = {
      title: title.current.value,
      desc: desc.current.value,
      author: author.current.value,
      type: type.current.value,
      soldCount: soldCount.current.value,
    }

    createBook(newBook)
      .unwrap()
      .then(() => {
        title.current.value = ""
        desc.current.value = ""
        author.current.value = ""
        type.current.value = ""
        soldCount.current.value = ""
      })
  }
  
  const handleDeleteBook = id => {
    deleteBook(id)
  }

  return (
    <div className="flex container mx-auto gap-5 py-5 flex-col lg:flex-row">
      <section className="w-full lg:w-[50%] p-8 rounded-lg shadow-lg bg-[#FAECEC]">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-gradient bg-clip-text text-blue-500">
          Create{" "}
          <span className="text-2xl font-extrabold leading-tight tracking-tight text-gradient bg-clip-text text-red-500">
            Book
          </span>
        </h1>
        <form onSubmit={handleCreateBook} className="space-y-6">
          <div>
            <label
              htmlFor="BookName"
              className="block mb-2 text-sm font-medium text-red-500"
            >
              Book Name
            </label>
            <input
              type="text"
              ref={title}
              name="BookName"
              className="block w-full p-2.5 rounded-lg bg-blue-900  placeholder-white text-white outline-none"
              placeholder="Book Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-red-500"
            >
              Description
            </label>
            <input
              ref={desc}
              type="text"
              name="description"
              className="block w-full p-2.5 rounded-lg bg-blue-900  placeholder-white text-white outline-none"
              placeholder="Description"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Author"
              className="block mb-2 text-sm font-medium text-red-500"
            >
              Author
            </label>
            <input
              ref={author}
              type="text"
              name="Author"
              className="block w-full p-2.5 rounded-lg bg-blue-900  placeholder-white text-white outline-none"
              placeholder="Author"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Type"
              className="block mb-2 text-sm font-medium text-red-500"
            >
              Type
            </label>
            <input
              ref={type}
              type="text"
              name="Type"
              className="block w-full p-2.5 rounded-lg bg-blue-900  placeholder-white text-white outline-none"
              placeholder="Type"
              required
            />
          </div>
          <div>
            <label
              htmlFor="sold"
              className="block mb-2 text-sm font-medium text-red-500"
            >
              Sold Count
            </label>
            <input
              ref={soldCount}
              type="number"
              name="sold"
              className="block w-full p-2.5 rounded-lg bg-blue-900  placeholder-white text-white outline-none"
              placeholder="Sold Count"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isCreateLoading}
            className="w-full py-2.5 px-5 text-sm font-medium text-white text-[20px] bg-red-900 rounded-lg  cursor-pointer"
          >
            {isCreateLoading ? "Loading..." : "Create"}
          </button>
        </form>
      </section>

      <section className="w-full lg:w-[50%] ">
        {isLoading && (
          <div className="text-center text-3xl text-white">Loading...</div>
        )}
        <div className="flex gap-10 flex-wrap ">
          {data?.map((book) => (
            <div
              className="shadow-lg bg-blue-900 text-white p-4 rounded-lg h-[30%] w-[40%] flex flex-col gap-4"
              key={book.id}
            >
              <h3 className="text-xl font-bold pb-3 mb-1 border-gray-200 text-center">
                <span className="text-red-500">Book Name: </span>
                {book.title}
              </h3>
              <p>
                <span className="text-red-500 text-xl">Book desc: </span>
                {book.desc}
              </p>
              <p>
                {" "}
                <span className="text-red-500 text-xl">Author: </span>
                {book.author}
              </p>
              <p>
                {" "}
                <span className="text-red-500 text-xl">Type: </span>
                {book.type}
              </p>
              <p className="mb-2">
                {" "}
                <span className="text-red-500 text-xl">Sold Count: </span>
                {book.soldCount}
              </p>
              <button
                onClick={() => handleDeleteBook(book.id)}
                className="cursor-pointer py-1 px-5 bg-red-800 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home
