import React from "react";
import Employee from "./Employee";
import axios from "axios";
import { useState, useEffect } from "react";



const App = () => {

  const [data, setData]=useState([]);

const loadData=()=>{
  let url=`http://34.198.81.140/attendance.json`;
  axios.get(url).then((res)=>{
    setData(res.data);
  });
}

useEffect(()=>{
  loadData();
},[]);

const myData=data.map((key)=>{
  var overTime;
  var a=key.total_hours-8;
  var Status=key.total_hours;
  var myDay="";
  if (Status===8){
    myDay="Full Day";
    overTime="No Overtime";
  }
  else if (Status<4){
    myDay="Absent";
  }
  else if (Status>=8){
    myDay="Overtime";
    overTime=a.toFixed(2);
  }
  else {
    myDay="Half Day";
  }
  return (
    <>
    <Employee
empid={key.emp_id}
date={key.date}
timein={key.time_in}
timeout={key.time_out}
totalhours={key.total_hours}
weekday={key.weekday}
name={key.name}
gender={key.gender}
designation={key.designation}
department={key.department}
basicsalary={key.basic_salary}
perdaysalary={key.per_day_salary}
dayStatus={myDay}
overtime={overTime}
/>
    </>
  );

  
});

  return (
    <>
    <table border={'2px'}>
      <thead>
        <th>Employee id </th>
        <th>Date </th>
        <th>Time in </th>
        <th>Time out </th>
        <th>Total hours</th>
        <th>Week day</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Designation</th>
        <th>Department</th>
        <th>Basic Salary</th>
        <th>Per Day Salary</th>
        <th>Day Status</th>
        <th>Overtime</th>
      </thead>
      <tbody>
      {myData}
      </tbody>
    </table>
    </>
  );
}

export default App;
