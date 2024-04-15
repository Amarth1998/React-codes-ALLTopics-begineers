import StudentProf from "./StudentProf";
import data from "./studata";

const mystudata =data.map((key)=>
<StudentProf 
name={key.name}
cls={key.class}
descr={key.desc}
 />);
const App=()=> {
  return (
    <>
  <h1 >welcome</h1>
  {mystudata}

    
    </>
  );
} 
export default App;












// import College  from "./college";
// const clgdata=[
//   {"colleageName":"Mits clg",
//   "course" :  "btect,metech , mca,bca" ,
//   "seats" :"400",
//   "conatct":"45612"
// },
// {"colleageName":"tit clg",
//   "course" :  "btect,metech , mca,bca" ,
//   "seats" :"400",
//   "conatct":"45612"},
// { "colleageName":"nice clg",
//   "course" :  "btect,metech , mca,bca" ,
//   "seats" :"400",
//   "conatct":"45612" } ]
// const mydata= clgdata.map((key)=> 
// <College 
//  clgNm={key.colleageName}
//  clgcrs={key.course}
//  clgseat={key.seats}
//  clgcont={key.conatct}
//   />  )
// const App=()=> {
//   return (
//     <>
//     {mydata}
//     </>  ); } 
// export default App;











// const data=[
//   {"roll_number":11,
//     "name":"amarth",
//     "city":"vidisha",
//     "fees" :1233

// },
// {"roll_number":22,
// "name":"patel",
// "city":"vidisha",
// "fees" :1000
// }
// ]

// const mydata=data.map(function (key) {
//   return <li>{key.roll_number} {key.name}   {key.city} {key.fees}</li>
// })

// // const mydata=data.map((key)=> <li>{key.name}</li>);  //this is arrow function
// const App=()=> {
//   return (
//     <>
//     <h1>hello</h1>
//     {mydata}
//     </>
//   );  }
// export default App;















// const data=["raju" , "sanju" ,"amarth" ,"lucky"]

// const mydata=data.map((key)=> <li>{key}</li>);
// const App=()=> {
//   return (
//     <>
//     <h1>hello</h1>
//     {mydata}
//     </>
//   );
// }

// export default App;
