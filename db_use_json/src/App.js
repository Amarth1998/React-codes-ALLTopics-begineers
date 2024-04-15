
// -----------------------------useEffect()----------------------------

// import { useState, useEffect } from "react";

// const App = () => {

//   const [cnt, setCnt] = useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCnt(cnt+1);
//     },1000);
//   });

//   return (
//     <>
//       <h1 id="demo">My Number : {cnt} </h1>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// const App = () => {

//   const [cnt, setCnt] = useState(0);
//   const [multi, setMulti] = useState(0);

//   const myCal=()=>{
//     setCnt(cnt+1);
//   }

//   useEffect(()=>{
//     setMulti(cnt*2);
//   });

//   return (
//     <>
//       <h1 id="demo">My Count : {cnt} </h1>
//       <h1 id="demo">My Count : {multi} </h1>
//       <button onClick={myCal}>Click here !</button>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import College from "./College";

const App = () => {

  const [data, setData] = useState([]);

  const loadData=()=>{
    let url="http://localhost:4000/students";

    axios.get(url)
    .then((res)=>{
      setData(res.data);
    });
  }

  useEffect(()=>{
    loadData();
  },[]);

  const myData=data.map((key)=><College
  nm={key.name}
  rn={key.rollno}
  add={key.address}
  fee={key.fees}
  />);

  return (
    <>
      <h1>Student Records</h1>
      {myData}
    </>
  );
}

export default App;