import React from "react";

function StudentList() {
  const students = ["Marc", "Lucy", "Anna"];

  return (
    <div className="list">
      <h2>Student List</h2>
      {/* When pulling this data from a database, you will need to use the ID, not the index. If you are generating all of these values from the front end, it is better to use an ID generator npm */}
      {students.map((student, index) => {
        return <p key={index}> {student} </p>;
      })}
    </div>
  );
}

export default StudentList;
