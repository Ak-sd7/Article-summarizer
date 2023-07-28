// import React from 'react'
import {logo} from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <b><h6 className=" orange_gradient w-28 object-contain text-3xl text-orange-400">SumIt..</h6></b>
      <button
        type="button"
        onClick={()=>window.open("https://github.com/Ak-sd7")}
        className="black_btn outline"  
      >
        GitHub
      </button>
    </nav>
    <h1 className="head_text">
      <span className="orange_gradient">Summarize Articles</span>
    </h1>
    <h2 className="desc">
      Conserve your time with SumIt, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
    </h2>
    </header>
  )
}

export default Hero
