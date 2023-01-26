import React,{useState} from 'react'
import './single.css'
import { Trash } from 'react-feather'
import { Link } from 'react-router-dom'


const SingleNote = ({item,refresher}) => {
    let savedData = JSON.parse(localStorage.getItem('myNotes')) || []
    const [rating, setRating] = useState(item.priority === 'high' ? 100 : 0)
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(item.content)

    const handleDelete = () =>{
    const pass = window.confirm('Are you sure you want to delete this note ?')
    if(!pass){
        return
    }
    if(savedData.length){
        let newData = savedData.filter((data)=>data.id !== item.id)
        localStorage.setItem('myNotes', JSON.stringify(newData))

        // window.location.reload()
        refresher()
    }
    }

    const handleEdit = () =>{
        let idx = savedData.findIndex((x)=>x.id === item.id)
        savedData[idx].content = content;
        localStorage.setItem('myNotes', JSON.stringify(savedData))
        setEdit(false)
        // window.location.reload()
        refresher()
    }

  return (
    <>
    <table className='table table-bordered'>
      <thead>
        <tr>
            <th>
name
            </th>
            <th>
status
            </th>
            <th>
options
            </th>
        </tr>
      </thead>
      <tbody>
    <tr>
     
    <td>
      <Link to={`/details/${item.id}`}>
        {item.title}
      </Link>
    </td>
      <td style={{backgroundColor:`${item.background}`}}>{item.priority}</td>
      <td> <button className='btn btn-outline-danger btn-sm shadow' onClick={handleDelete}><Trash/></button></td>

    </tr>
    </tbody>
    </table>
    
       
     </>
  )
}

export default SingleNote