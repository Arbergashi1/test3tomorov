import React, { useEffect, useState } from "react";
import "./cards.css";
import { Card } from "react-bootstrap";

const Cards = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [onHoldCount, setOnHoldCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("myNotes"))) {
      let finalResult = inProgressCount;

      JSON.parse(localStorage.getItem("myNotes")).forEach((note) => {
        console.log(note);
      });

      const inProgressCounts = JSON.parse(localStorage.getItem("myNotes")).map(
        (note) => note.inProgressCount
      );
      const sum = inProgressCounts.reduce(function (accumulator, initialValue) {
        return accumulator + initialValue;
      }, 0);
      setInProgressCount(sum);

      const completedCounts = JSON.parse(localStorage.getItem("myNotes")).map(
        (note) => note.completedCount
      );
      const sumCompleted = completedCounts.reduce(function (
        accumulator,
        initialValue
      ) {
        return accumulator + initialValue;
      },
      0);
      setCompletedCount(sumCompleted);

      const onHoldCounts = JSON.parse(localStorage.getItem("myNotes")).map(
        (note) => note.onHoldCount
      );
      const sumOnh = onHoldCounts.reduce(function (accumulator, initialValue) {
        return accumulator + initialValue;
      }, 0);
      setOnHoldCount(sumOnh);
    }
  }, [JSON.parse(localStorage.getItem("myNotes"))]);

  console.log(inProgressCount);
  return (
    <div className="shade">
      <div className="parentCard">
        <Card className="card1">
          <Card.Title>{inProgressCount} On Road</Card.Title>
        </Card>
        <Card className="card2">
          <Card.Title>{completedCount} Completed</Card.Title>
        </Card>
        <Card className="card3">
          <Card.Title> {onHoldCount} HOLD</Card.Title>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
