const StudentProf=(props)=>{
    return(
    <>
    <div id="box">
     <h1>welcome: {props.name}</h1>
     <img src={"image/"+props.a} alt="" />
     
     <h2>class:{props.cls}</h2>
     <h3>class:{props.descr}</h3>


    </div>

</>
    );
}
export default StudentProf
