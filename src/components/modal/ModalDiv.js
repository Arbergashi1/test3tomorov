import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './modal.css'
import { Plus } from 'react-feather';

function ModalDiv({showModal,setShowModal,refresher}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [background, setBackground] = useState('#F9F5EB')

  const [priority, setPriority] = useState('')

  const handleAdd = () =>{
    const savedData = JSON.parse(localStorage.getItem('myNotes')) || []
   
    let newData ={
        id: Date.now(),
        title,
        content,
        priority,
        background,
        date: new Date().toLocaleDateString()
    }
    savedData.push(newData)
    localStorage.setItem('myNotes', JSON.stringify(savedData))
    setTitle('')
    setContent('')
    setPriority('')
    setShowModal(false)
    // window.location.reload()
    refresher()
  }

  const handleCancel = () =>{
    setTitle('')
    setContent('')
    setPriority('normal')
    setShowModal(false)
  }

  const handleColor = (bg)=>{
    setBackground(bg)
   
  }


  return (
    <>
      <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label>Name</label>
            <input className='form-control mb-3' placeholder='Enter name' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label>Priority</label>
            <select className='form-control mb-3' value={priority} onChange={(e)=>setPriority(e.target.value)} >
                <option value='in delivry'>in delivry</option>
                <option value='deliverd'>deliverd</option>
                <option value='refuzed'>refuzed</option>
            </select>
            {/* <textarea className='form-control' style={{height:'180px'}} placeholder='Enter notes....' value={content} onChange={(e)=>setContent(e.target.value)} ></textarea> */}
        {/* for theme selection */}
        
        <DropdownButton id="dropdown-basic-button" variant='outline-primary' title="Select Status"  className='form-control mb-3' >
      <Dropdown.Item href="#/action-1"><div className='d-flex'  onClick={()=>handleColor('yellow')}><div className='circle' style={{backgroundColor:'yellow'}}></div>In Delivry</div> </Dropdown.Item>
      <Dropdown.Item href="#/action-2"><div className='d-flex' onClick={()=>handleColor('green')}><div className='circle' style={{backgroundColor:'green'}}></div>Deliverd</div></Dropdown.Item>
      <Dropdown.Item href="#/action-3"><div className='d-flex'  onClick={()=>handleColor('red')}><div className='circle' style={{backgroundColor:'red'}}></div>Refuzed</div></Dropdown.Item>
      
    </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            <Plus/> Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDiv