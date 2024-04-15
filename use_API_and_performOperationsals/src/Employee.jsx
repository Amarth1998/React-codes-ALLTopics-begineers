
const Employee = (props) => {
    return (
        <>
            <tr style={{border:'1px'}}>
                <td>{props.empid}</td>
                <td>{props.date}</td>
                <td>{props.timein}</td>
                <td>{props.timeout}</td>
                <td>{props.totalhours}</td>
                <td>{props.weekday}</td>
                <td>{props.name}</td>
                <td>{props.gender}</td>
                <td>{props.designation}</td>
                <td>{props.department}</td>
                <td>{props.basicsalary}</td>
                <td>{props.perdaysalary}</td>
                <td>{props.dayStatus}</td>
                <td>{props.overtime}</td>
            </tr>
        </>
    );
}

export default Employee;
