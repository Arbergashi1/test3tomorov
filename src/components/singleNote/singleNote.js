import React from "react";
import "./single.css";
import { Trash } from "react-feather";
import { Link } from "react-router-dom";
import "./single.css";

const SingleNote = ({ item, refresher }) => {
  let savedData = JSON.parse(localStorage.getItem("myNotes")) || [];

  // const [edit, setEdit] = useState(false)
  // const [content, setContent] = useState(item.content)

  const handleDelete = () => {
    const pass = window.confirm("Are you sure you want to delete this note ?");
    if (!pass) {
      return;
    }
    if (savedData.length) {
      let newData = savedData.filter((data) => data.id !== item.id);
      localStorage.setItem("myNotes", JSON.stringify(newData));

      // window.location.reload()
      refresher();
    }
  };

  // const handleEdit = () =>{
  //     let idx = savedData.findIndex((x)=>x.id === item.id)
  //     savedData[idx].content = content;
  //     localStorage.setItem('myNotes', JSON.stringify(savedData))
  //     setEdit(false)
  //     // window.location.reload()
  //     refresher()
  // }

  return (
    <div className="">
      <table class="tablea table table-striped">
        <thead>
          <tr>
            <th style={{ width: "20rem" }}>Name</th>
            <th style={{ width: "20rem" }}>Status</th>
            <th>Options </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to={`/details/${item.id}`}>{item.title}</Link>
            </td>
            <td
              id="priority"
              className="circle-input priority-text"
              style={{ backgroundColor: `${item.background}` }}
            >
              {item.priority}
            </td>
            <td>
              {" "}
              <button
                className="btn btn-outline-danger btn-sm shadow"
                onClick={handleDelete}
              >
                <Trash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleNote;
