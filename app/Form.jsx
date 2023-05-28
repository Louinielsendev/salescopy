'use client'
import Image from 'next/image'
import copyIcon from '../public/copy.svg'
import backArrow from '../public/arrow.png'

import { useState } from "react"
import GridLoader from 'react-spinners/GridLoader'

export default function Form() {
  const [loading, setLoading] = useState(false)
  const [complete, setComplete] = useState(false)
  const [formData, setFormData] = useState({
    produktname: "",
    kampanj: "",
    desc: "",
  })
  const [adResponse, setAdResponse] = useState()
  
  const prompt = `Generera en annonstext för en produkt med namnet: ${formData.produktname}, beskrivningen: ${formData.desc} ${formData.kampanj ? `och erbjudande: ${formData.kampanj}%` : ''}. Skriv en text som fångar läsarnas uppmärksamhet, samtidigt som den är kort och konkret. `

  function updateProductData(e) {
    setFormData(prevForm => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value
      }
    })
  }

  function returnToForm(){
    setComplete(false)
  }

  async function saveFormData(e) {
    e.preventDefault()
    setLoading(true)
    console.log(prompt)
    const response = await fetch('/api/hello/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    }).then((response) => response.json())
    setAdResponse(response.text)
    setLoading(false); 
    setComplete(true);
  }

  return (
    <div className="relative h-[475px] flex  justify-center bg-white z-50 p-6  shadow mx-6 rounded max-w-4xl  md:mx-auto md:h-[500px]">
      
      {loading && (
        <div className="flex justify-center items-center w-full">
          <GridLoader color="#434B8C"/>
        </div>
      )}

      {!loading && !complete &&( 
        
        <form action="" method="post">
          <label className="text-xs md:text-base" htmlFor="produktname">Produktens/tjänstens namn</label>
          <br />
          <input value={formData.produktname} placeholder="salescopy.se" className="text-sm border outline-buttoncolor mb-6 rounded-lg p-2 w-3/5 md:text-base" type="text" name="produktname" onChange={updateProductData} />
          <br />
          <label className="text-xs md:text-base"  htmlFor="kampanj">Kampanj</label>
          <br />
          <input value={formData.kampanj} placeholder="20%" className="text-sm border outline-buttoncolor mb-6 rounded-lg p-2 w-3/5 md:text-base" type="text" name="kampanj" onChange={updateProductData} />
          <br />
          <label className="text-xs md:text-base" htmlFor="desc">Berätta mer om produkten/tjänsten</label>
          <textarea value={formData.desc} placeholder="Med hjälp av AI, autogenererar Salescopy.se unika annonstexter baserat på produkten och som står ut från mängden." className="text-sm border outline-buttoncolor w-full rounded-lg p-2 resize-none mb-20 md:text-base" name="desc" id="" rows="5" onChange={updateProductData}></textarea>
          <button onClick={saveFormData} className="bg-buttoncolor p-4 text-white text-xs rounded-full float-right -mt-12 md:text-base md:-mt-16 ">Generera annons</button>
        </form>
        
      )}
      {complete && (
        <div className=''>
          <button className="mb-10 flex items-center justify-between" onClick={returnToForm}>  <Image className="mr-2" src={backArrow} width={15} height={20} alt='copy' unoptimized={true} />Tillbaka</button>
         
          <div className="relative rounded-lg shadow mx-1  p-6 pt-16 mb-12">
          <button className="absolute top-0 right-0 p-3 border-l border-b rounded-sm" onClick={() => {navigator.clipboard.writeText(adResponse)}}>
          <Image className="" src={copyIcon} width={20} height={20} alt='copy' unoptimized={true} /></button>  
          <h1 className='text-sm'>{adResponse}</h1>
          </div>
        </div>
        
      )}
     
    </div>
  )
}
