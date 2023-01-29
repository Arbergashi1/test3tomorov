import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./modal.css";
import { Plus } from "react-feather";
import Select from "react-select";

function ModalDiv({ showModal, setShowModal, refresher }) {
  const [completedCount, setCompletedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [onHoldCount, setOnHoldCount] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [background, setBackground] = useState("");

  const [priority, setPriority] = useState("");

  const handleAdd = () => {
    const savedData = JSON.parse(localStorage.getItem("myNotes")) || [];

    let newData = {
      id: Date.now(),
      title,

      completedCount,
      inProgressCount,
      onHoldCount,

      content,
      priority,
      background,
      date: new Date().toLocaleDateString(),
    };
    savedData.push(newData);
    localStorage.setItem("myNotes", JSON.stringify(savedData));
    setTitle("");
    setContent("");
    setPriority("");

    setCompletedCount("");
    setInProgressCount("");
    setOnHoldCount("");

    setShowModal(false);
    // window.location.reload()
    refresher();
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setPriority("normal");
    setShowModal(false);
  };

  const category = [
    { value: "sidewalk Shed", label: "Sidewalk Shed", color: "red" },
    { value: "scaffold", label: "Scaffold", color: "red" },
    { value: "Shorting", label: "Shorting", color: "red" },
  ];

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Name</label>
          <input
            className="form-control mb-3"
            placeholder="Enter name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Category Included</label>
          <Select isMulti options={category} colorOption="color" />
          {/* <label>Category Includet</label>
            <select className='form-control mb-3' value={priority} onChange={(e)=>setPriority(e.target.value)} >
                <option value='Sidewalk Shed'>Sidewalk Shed</option>
                <option value='Scaffold'>Scaffold</option>
                <option value='Shorting'>Shorting</option>
            </select> */}
          <label>Status</label>
          <select
            className="form-control mb-3"
            value={priority}
            onChange={(e) => {
              setBackground(
                e.target.value === "Completed"
                  ? "#5fa342"
                  : e.target.value === "In Progress"
                  ? "#d1cb56"
                  : e.target.value === "On Hold"
                  ? "#dd3535"
                  : ""
              );
              if (e.target.value === "Completed")
                setCompletedCount((prevCount) => prevCount + 1);
              if (e.target.value === "In Progress")
                setInProgressCount((prevCount) => prevCount + 1);
              if (e.target.value === "On Hold")
                setOnHoldCount((prevCount) => prevCount + 1);
              setPriority(e.target.value);
            }}
          >
            <option value="">Select Status</option>
            <option value="Completed" style={{backgroundColor:'green'}}>Completed</option>
            <option value="In Progress" style={{backgroundColor:'yellow'}}>In Progress</option>
            <option value="On Hold" style={{backgroundColor:'red'}}>On Hold</option>
          </select>

          {/* <textarea className='form-control' style={{height:'180px'}} placeholder='Enter notes....' value={content} onChange={(e)=>setContent(e.target.value)} ></textarea> */}
          {/* for theme selection */}
          {/*       
      <DropdownButton id="dropdown-basic-button" variant='outline-primary' title="Select Status"  className='form-control mb-3' >
    <Dropdown.Item href="#/action-1"><div className='d-flex'  onClick={()=>handleColor('#5fa342')}><div className='circle' style={{backgroundColor:'yellow'}}></div>In Delivry</div> </Dropdown.Item>
    <Dropdown.Item href="#/action-2"><div className='d-flex' onClick={()=>handleColor('#d1cb56')}><div className='circle' style={{backgroundColor:'green'}}></div>Deliverd</div></Dropdown.Item>
    <Dropdown.Item href="#/action-3"><div className='d-flex'  onClick={()=>handleColor('#dd3535')}><div className='circle' style={{backgroundColor:'red'}}></div>Refuzed</div></Dropdown.Item>
    
  </DropdownButton> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Cancel Changes
          </Button>
          <Button className="ngjyra"  onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDiv;
