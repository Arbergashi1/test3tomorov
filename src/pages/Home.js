import React, { useState, useEffect } from "react";
import ModalDiv from "../components/modal/ModalDiv";
import Navv from "../components/navbar/Navv";
import SingleNote from "../components/singleNote/singleNote";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      setData(JSON.parse(localStorage.getItem("myNotes")) || []);
    }
  }, [data]);

  const [showModal, setShowModal] = useState(false);

  const refresher = () => {
    setData(JSON.parse(localStorage.getItem("myNotes")) || []);
  };

  return (
    <>
      <Navv
        setShowModal={setShowModal}
        data={data}
        setData={setData}
        refresher={refresher}
      />
      {showModal && (
        <ModalDiv
          showModal={showModal}
          setShowModal={setShowModal}
          refresher={refresher}
        />
      )}

      {/* notes */}
      <div className="">
        {!data.length ? (
          <h1 className="text-center display-1 fw-light text-seconday my-5">
            not found
          </h1>
        ) : (
          data.map((item, i) => (
            <SingleNote key={item.id} item={item} refresher={refresher} />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
