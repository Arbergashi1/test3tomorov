import React, { useState } from "react";
import { Plus, RefreshCcw, Search, Trash2 } from "react-feather";
import Cards from "../cards/Cards";
import "./Navv.css";
import { BsInfoCircleFill } from "react-icons/bs";

const Navv = ({ setShowModal, data, setData, refresher }) => {
  const [searchValue, setSearchValue] = useState("");

  const deleteAll = () => {
    const pass = window.confirm("Are you sure you want to delete all notes ?");
    if (!pass) {
      return;
    }
    localStorage.removeItem("myNotes");
    // window.location.reload()
    refresher();
  };

  // const sorter = (value) =>{
  //     if(value === 'latest'){
  //         data.sort((a,b)=>b.id - a.id)
  //     }
  //     if(value === 'oldest'){
  //         data.sort((a,b)=>a.id - b.id)
  //     }
  //     if(value === 'high'){
  //         data.sort((a,b)=>a.priority.localeCompare(b.priority))
  //     }
  //     if(value === 'normal'){
  //         data.sort((a,b)=>b.priority.localeCompare(a.priority))
  //     }
  //     setData([...data])
  // }

  const search = (e) => {
    e.preventDefault();
    let newData;
    if (searchValue) {
      newData = data.filter((x) =>
        x.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData([...newData]);
    } else {
      // window.location.reload()
      refresher();
    }
  };

  return (
    <div>
      <Cards />
      <div className="hapsir"></div>
      <div className="navcon">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <h1 className="lorem">
              {" "}
              <BsInfoCircleFill size={20} style={{ color: "blue" }} />{" "}
              Informative piece of text that can be used regarding this modal.
            </h1>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <form className="searchi " onSubmit={search}>
                  <input
                    className="form-control me-1 m-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      search(e);
                    }}
                  />
                  <button
                    className="btn btn-outline-success m-3 "
                    type="submit"
                  >
                    {searchValue ? <Search /> : <RefreshCcw />}
                  </button>
                </form>
                <li className="nav-item mx-2">
                  <button
                    className="ngjyra nav-link btn btn-sm  text-light px-2 my-3"
                    onClick={() => setShowModal(true)}
                  >
                    <Plus /> Create
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button
                    className="nav-link btn btn-sm btn-danger text-light px-2 my-3"
                    onClick={deleteAll}
                  >
                    <Trash2 /> Delete All
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navv;
