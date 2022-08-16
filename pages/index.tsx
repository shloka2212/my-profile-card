import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
  <div className="main grid place-items-center h-screen bg-cover bg-[url('/img/background.jpg')]">
    <div
      id="card"
      className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex p-4 shadow-lg rounded-2xl h-1/2 w-2/5 space-x-5"
    >
      <div className="flex flex-col items-center justify-center px-2">
        <img src="img/circle-cropped.png" alt="" className=" h-60 w-60" />
      </div>
      <div className="flex flex-col space-x-3 items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Shloka Bhatt</h1>
        <h2 className="text-3xl pt-2 text-white">Web Developer</h2>
        <ul className="flex flex-row space-x-3 pt-4">
          <li>
            <a
              href="https://www.linkedin.com/in/shloka-bhatt-b9a8a1165/"
              className="text-white hover:text-blue-700"
            >
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Shlokabhatt"
              className="text-white hover:text-blue-700"
            >
              <i className="fa-brands fa-twitter fa-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shloka2212"
              className="text-white hover:text-blue-700"
            >
              <i className="fa-brands fa-github fa-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/shlokabhatt22/"
              className="text-white hover:text-blue-700"
            >
              <i className="fa-brands fa-facebook fa-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


  )
}

export default Home
