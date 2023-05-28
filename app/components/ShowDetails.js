'use client'
import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Text,Metric, Button } from "@tremor/react";
import Image from 'next/image';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function ShowDetails({ darkMode, jobs, agendar }) {
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Call handleResize on mount and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let [ofertas] = useState({
    Requisitos: [   {
      id: jobs.id,
      itemone: jobs.study.value,
      category:"Requisitos",
      itemtwo: jobs.experienceMin.value,
      itemthree: jobs.requirementMin
    } ],
    Descripción: [  {
      id: jobs.id,
      itemone: jobs.description}  ],
    Detalles: [ {
      id: jobs.id,
      itemone: jobs.salaryDescription,
      category:"Detalles",
      itemtwo: jobs.workDay.value,
      itemthree: jobs.category.value
    } ]
  })

  const tamanio = isMobile ? "h-200 ml-2 mr-2  px-2 pr-2 py-8  sm:px-0 sm:pr-0" : "h-200 ml-10 mr-80 max-w-40 px-2 pr-16 py-8  sm:px-0 sm:pr-20"

  return (
    <div className={tamanio} >     
      {isMobile ? (
        <>
          <div className="flex-container mr-5 max-w-200" >
          <Image alt='company logo'   src={jobs.author.logoUrl } height={100} width= {100}  />
             <div className=" space-x-1 rounded-xl mr-5 max-w-400 ">
                <Metric className={`text-bold ml-3 mt-1 mr-2  ${darkMode ? 'text-white' : 'text-black-300' }`}>{jobs.title}</Metric>
                <Text className={`ml-3 mt-1 text-inf ${darkMode ? 'text-white' : 'text-black-300' }`}>{jobs.author.name}</Text>
             </div>
         </div>
          <div className="flex-container mb-1 mr-2">
          <Button onClick={(event) => {event.preventDefault (); window.open (jobs.link)}} size="xs" className={`p-2 mb-2 mt-2 ml-5  text-white  ${darkMode ? 'bg-orange-500' : 'bg-colorAzul' }` }>
             Toda la Información
           </Button>
           <Button onClick={agendar} size="xs" className={`p-2 mb-2 mt-2 ml-5 text-white  ${darkMode ? 'bg-orange-500 hover:bg-colorAzul' : 'bg-colorAzul hover:bg-orange-500' }` }>
             Agendar Entrevista
           </Button>
         </div>
         </>
      ) : (
        <div className="fle-container" >
        <Image alt='company logo' className="mb-2"  src={jobs.author.logoUrl} height={100} width= {100}  />
           <div>
             <Metric className={`ml-3 mt-1 text-inf ${darkMode ? 'text-white' : 'text-black-300' }`}>{jobs.title}</Metric>
             <div className="flex-container">
               <Text className={`ml-3 mt-1 text-inf ${darkMode ? 'text-white' : 'text-black-300' }`}>{jobs.author.name}</Text>
               <Button onClick={(event) => {event.preventDefault (); window.open (jobs.link)}} size="xs" className={`p-2 mb-2 mt-2 ml-5  text-white  ${darkMode ? 'bg-orange-500' : 'bg-colorAzul' }` }>
                 Toda la Información
               </Button>
               <Button onClick={agendar} size="xs" className={`p-2 mb-2 mt-2 ml-5 text-white  ${darkMode ? 'bg-orange-500 hover:bg-colorAzul' : 'bg-colorAzul hover:bg-orange-500' }` }>
                 Agendar Entrevista
               </Button>
             </div>
           </div>
       </div>
      )}
  
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(ofertas).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ${darkMode ? 'text-orabe-500' : 'text-black-300' } `, // text-blue-700
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? ` ${darkMode ? 'bg-darkSecondary' : 'bg-white' }  shadow`
                    : `text-blue-100 hover:bg-white/[0.8] ${darkMode ? 'hover:text-orange-500' : 'text-blue-700' } `  
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(ofertas).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                `rounded-xl ${darkMode ? 'bg-darkSecondary' : 'bg-white' } p-3`,
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 "
                  >
                  {post.category === "Requisitos" ? <h1>Estudios mínimos</h1> : null}
                  {post.category === "Detalles" ? <h1>Salario</h1> : null}  
                    <h3 className="text-sm font-medium leading-5 ml-10">
                      {post.itemone}
                    </h3>
                    {post.category === "Requisitos" ? <h1 className='mt-5'>Experiencia mínima</h1> : null}
                    {post.category === "Detalles" ? <h1 className='mt-5'>Jornada</h1> : null} 
                    <h3 className="text-sm font-medium leading-5 ml-10">
                    {post.itemtwo}
                    </h3>
                    {post.category === "Requisitos" ? <h1 className='mt-5'>Requisitos mínimos</h1> : null}
                    {post.category === "Detalles" ? <h1 className='mt-5'>Categoría</h1> : null} 
                    <h3 className="text-sm font-medium leading-5 ml-10">
                    {post.itemthree}
                    </h3>
                  
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
