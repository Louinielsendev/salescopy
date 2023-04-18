
import Image from "next/image"
import headerImage from '../public/header.jpg'

import Nav from './Nav'
import Form from "./Form"

export default async function Home() {
  
  return (
    <main >
      <Nav />
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 mb-16 md:mb-24 ">
        <div className="lg:w-6/12">
          <h1 className="font-extrabold text-2xl leading-normal mb-5 md:text-3xl lg:text-4xl lg:leading-normal">Skapa Effektiva Annonser Snabbt och Enkelt med <span className="text-themecolor">Salescopy.se</span> </h1>
          <p className="text-sm md:text-base lg:text-lg">Få dina annonser att sticka ut från mängden med vår avancerade plattform för att skapa annonstexter!</p>
        </div>
        <Image className="transform -scale-x-100 hidden md:block lg:w-1/2" src={headerImage} width={450} height={500} alt='headerImg' unoptimized={true} />
      </div>
      <div className="text-center mb-8 flex justify-center items-center flex-col">
        <h1 className="text-xl font-semibold md:text-2xl">Skapa en annons</h1>
      </div>
      <Form  />
      <footer className='-mt-24 h-56 bg-themecolor relative before:content-[""] before:absolute before:-top-32 before:h-32 before:left-0 before:right-0 before:bg-footer'></footer>
     
    </main >
  )
}
