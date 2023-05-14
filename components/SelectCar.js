import { Fragment, useState,useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import carlist from "../json/carlist.json"

let colorList=["Black","Blue","Brown","Green","Grey","Purple","Red","Silver","White","Yellow","Hazel"]

const yearsList=()=>{
    const d = new Date();
    let year = d.getFullYear()
    let years=[]
    for (let i=1970;i<year+1;i++){
        years.push(i)
    }
    return years
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SelectBox=({selected,setSelected,arrayObj})=>{
    return(
        <Listbox  value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
          <div className="relative mt-1 pb-5">
            <Listbox.Button className="  relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                {/* <img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                <span className="ml-3 block truncate">{selected}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {arrayObj?.map((item) => (
                  <Listbox.Option
                    key={item}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {item}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    )
}

export default function SelectCar({model0}) {
  const [selected, setSelected] = useState("Select Make")
  const [selectedModel, setSelectedModel] = useState("Select Model")
  const [selectedColor, setSelectedColor] = useState("Select Color")
  const [selectedYear, setSelectedYear] = useState("Select Year")
  const [models,setModels]=useState([])

  useEffect(()=>{
      setModels(carlist[selected])
      setSelectedModel("Select Model")
      model0=carlist[selected]
  
  },[selected])
  
//   console.log("///// Models //////\n",models)
// console.log(yearsList())

useEffect(()=>{
    let btns=document.getElementsByTagName("button")
    for(let i=0;i<btns.length;i++){

        if(btns[i].attributes.id?.value.includes("headlessui-listbox-button")){
        // console.log("////// modal buttons //////",btns[i].getElementsByTagName('span')[1].innerHTML)
            if(!btns[i].getElementsByTagName('span')[1].innerHTML.includes("Select")){
                btns[i].classList.remove("outline")
                btns[i].classList.remove("outline-red-200")
            }
        }
    }
},[selected,selectedModel,selectedColor,selectedYear])


  return (
  <>
    <SelectBox selected={selected} setSelected={setSelected} arrayObj={Object.keys(carlist)}/>

    <SelectBox selected={selectedModel} setSelected={setSelectedModel} arrayObj={models}/>

    <SelectBox selected={selectedColor} setSelected={setSelectedColor} arrayObj={colorList}/>
    
    <SelectBox selected={selectedYear} setSelected={setSelectedYear} arrayObj={yearsList().reverse()}/>

  </>

    
  )
}