import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import "./carddetails.css"

const Details2 = () => {

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [editId, setEditId] = useState(null);
    const handleEdit = (id) => {
        setEditId(id);
      };
      
      const handleSave = (id, updatedData) => {
        setFilteredData(filteredData.map((item) => (item.id === id ? {...item, ...updatedData} : item)));
        setEditId(null);
      };

    const Employees = [
        {
            id:"1",
            item:"G42295",
            quantity:"10",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Scaffold",
        },
        {
            id:"2",
            item:"M721",
            quantity:"83",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Scaffold",
        },
        {
            id:"3",
            item:"M94796",
            quantity:"31",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Scaffold",
        },
        {
            id:"4",
            item:"S25907",
            quantity:"47",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Scaffold",
        },

    ]

    useEffect(() => {
        setFilteredData(Employees.filter((item) => item.item.toLowerCase().includes(search.toLowerCase())));
    }, [search]);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }


    

    
    
  return (
    
       <div className="parentCard1">
      <Card className="cardDetails1">
        <Card.Title></Card.Title>
        <div className='detajet'>
        <h1 className='titulli'>24 avni rrustemi, new yourn</h1>
        <Link to='/details/:id'>
        <Button clas variant='success' className='buttoni'>SideWalk Sheed</Button>
        </Link>
      <Button className='buttoni1'>Scaffold</Button>
      
      <Link to='/'>
        <Button clas variant='primary' className='buttoni2'> <ArrowLeft/> Go Back </Button>
        </Link>
        </div>
      </Card>
      <Card className="cardDetails2">
        <Card.Title></Card.Title>
        <div className='detajet1'>
        <h1 className='titulli'>Scaffold</h1>
         <form >
            <input type="search" placeholder="Search.." onChange={handleSearch} value={search}/>
        </form>
        </div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nr</th>
      <th scope="col">Item</th>
      <th scope="col">Quantity</th>
      <th scope="col">Description</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
 
     <tbody>
        {filteredData.map((item) => (
          <tr>
            <td>{item.id}</td>
            {editId === item.id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={item.item}
                    onChange={(e) => handleSave(item.id, {item: e.target.value})}
                    style={{ backgroundColor: '#f2f2f2', padding: '0.1rem', borderRadius: '5px', textAlign:'center', border: 'none'}}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleSave(item.id, {quantity: e.target.value})}
                    style={{ backgroundColor: '#f2f2f2', padding: '0.1rem', borderRadius: '5px', textAlign:'center', border: 'none'}}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleSave(item.id, {description: e.target.value})}
                    style={{ backgroundColor: '#f2f2f2', padding: '0.1rem', borderRadius: '5px', textAlign:'center', border: 'none'}}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.notes}
                    onChange={(e) => handleSave(item.id, {notes: e.target.value})}
                    style={{ backgroundColor: '#f2f2f2', padding: '0.1rem', borderRadius: '5px', textAlign:'center', border: 'none'}}
                  />
                </td>
              </>
            ) : (
              <>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.notes}</td>
              </>
            )}
            <td>
              {editId === item.id ? (
                <Button onClick={() => handleSave(item.id, item)} variant='success'>Save</Button>
              ) : (
                <Button onClick={() => handleEdit(item.id)} variant='info'>Edit</Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </Card>
    </div>
   
  )
}

export default Details2