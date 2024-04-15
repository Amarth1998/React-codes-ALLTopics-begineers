

const College = (props) => {
    return (
        <>
            {/* <h1> Student Name : {props.nm}</h1><br />
            <h1> Roll no : {props.rn}</h1><br />
            <h1> Address : {props.add}</h1><br />
            <h1> Fees : {props.fee}</h1><br /> */}
            <tr>
                <td>Student Name </td>
                <td>Roll no</td>
                <td>Address</td>
                <td>Fees</td>
            </tr>
            <tr>
                <td>{props.nm}</td>
                <td>{props.rn}</td>
                <td>{props.add}</td>
                <td>{props.fee}</td>
            </tr>
        </>
    );
}

export default College;
