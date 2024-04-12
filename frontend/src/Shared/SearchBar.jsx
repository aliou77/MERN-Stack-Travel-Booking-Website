import { faLocation, faMapMarkerAlt, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'

function SearchBar() {
    const locationref = useRef('')
    const distanceref = useRef(0)
    const groupsref = useRef(0)

    const searchbarHandler = () =>{
        const location = locationref.current.value
        const distance = distanceref.current.value
        const groups = groupsref.current.value
        if(location === '' || distance === '' || groups === ''){
            alert('fields are required !')
        }
        // console.log(location, distance, groups);
    }
    

  return (
    <div className='searchbar-section mt-[3rem]'>
        <div className='content'>
            <form className='flex gap-8'>
                <div className='form-item border-r border-[#ddd]'>
                    <FontAwesomeIcon icon={faLocation} />
                    <div>
                        <h4>Location</h4>
                        <input ref={locationref}  type="text" className='border-none outline-none' placeholder='Where are you going ?' />
                    </div>
                </div>
                <div className='form-item border-r border-[#ddd]'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div>
                        <h4>Distance</h4>
                        <input ref={distanceref}  type="number" min={0} className='border-none outline-none' placeholder='Distance k/m' />
                    </div>
                </div>
                <div className='form-item '>
                    <FontAwesomeIcon icon={faUserGroup} />
                    <div>
                        <h4>Max people</h4>
                        <input ref={groupsref}  type="number" className='border-none outline-none' placeholder='0' />
                    </div>
                </div>
                <div>
                    <p className='bg-blue-900 p-[5px] rounded-md'>
                        <span typeof='submit' className='cursor-pointer' onClick={searchbarHandler}>
                            <FontAwesomeIcon icon={faSearch} className='!text-white text-[1.6rem]' />
                        </span>
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchBar;