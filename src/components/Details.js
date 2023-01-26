import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import "./carddetails.css"

const Details = () => {

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    
    const Employees = [
        {
            id:"1",
            item:"G42295",
            quantity:"10",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Lorem Ipsum is simply dummy text of the printing ",
        },
        {
            id:"2",
            item:"M721",
            quantity:"83",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Lorem Ipsum is simply dummy text of the printing ",
        },
        {
            id:"3",
            item:"M94796",
            quantity:"31",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Lorem Ipsum is simply dummy text of the printing ",
        },
        {
            id:"4",
            item:"S25907",
            quantity:"47",
            description:"Lorem Ipsum is simply dummy text of the printing ",
            notes:"Lorem Ipsum is simply dummy text of the printing ",
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
        <Button clas variant='success' className='buttoni'>SideWalk Sheed</Button>
        <Button clas variant='' className='buttoni1'>Scafold</Button>
        <Button clas variant='primary' className='buttoni2'>Go Back</Button>
        </div>
      </Card>
      <Card className="cardDetails2">
        <Card.Title></Card.Title>
        <div className='detajet1'>
        <h1 className='titulli'>Sidewalk Shed</h1>
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
        {
            filteredData.length > 0 
            ?
            filteredData.map((item)  =>{
                return(
                    <tr>
                         <td>
                            {item.id}
                        </td>
                        <td>
                            {item.item}
                        </td>
                        <td>
                            {item.quantity}
                        </td>
                        <td>
                            {item.description}
                        </td>
                        <td>
                            {item.notes}
                        </td>
                    </tr>
                )
            }) : "no"
        }
    </tbody>
 
</table>
        
      </Card>
     
      </div>
   
    
   
  )
}

export default Details