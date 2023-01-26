import React,{useState} from 'react'
import {Plus, RefreshCcw, Search, Trash2} from 'react-feather'
import Cards from '../cards/Cards'

const Navv = ({setShowModal, data, setData, refresher}) => {
const [searchValue, setSearchValue] = useState('')

const deleteAll = () =>{
    const pass = window.confirm('Are you sure you want to delete all notes ?')
    if(!pass){
        return
    }
    localStorage.removeItem('myNotes')
    // window.location.reload()
    refresher()
}

const sorter = (value) =>{
    if(value === 'latest'){
        data.sort((a,b)=>b.id - a.id)
    }
    if(value === 'oldest'){
        data.sort((a,b)=>a.id - b.id)
    }
    if(value === 'high'){
        data.sort((a,b)=>a.priority.localeCompare(b.priority))
    } 
    if(value === 'normal'){
        data.sort((a,b)=>b.priority.localeCompare(a.priority))
    } 
    setData([...data])
}

const search = (e) =>{
    e.preventDefault()
    let newData;
    if(searchValue){
        newData = data.filter((x)=>x.title.toLowerCase().includes(searchValue.toLowerCase()))
        setData([...newData])
    }else{
        // window.location.reload()
        refresher()
    }
}

  return (
    <>
    <Cards/>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        

        <li className='nav-item mx-2'>
            <button className='nav-link btn btn-sm btn-info text-light px-2 my-3' onClick={()=>setShowModal(true)}><Plus/> Add new</button>
        </li>
        <li className='nav-item mx-2'>
            <button className='nav-link btn btn-sm btn-danger text-light px-2 my-3' onClick={deleteAll}><Trash2/> Delete All</button>
        </li>

      </ul>
      <form className="d-flex" onSubmit={search}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearchValue(e.target.value)} />
        <button className="btn btn-outline-success" type="submit">{searchValue ? <Search/> : <RefreshCcw/>}</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Navv