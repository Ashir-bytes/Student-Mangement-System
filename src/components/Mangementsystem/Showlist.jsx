import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Showlist({ Data }) {
    let [StudentData, setStudentData] = useState(Data || []);
    
    useEffect(() => {
        setStudentData(Data || []);
        localStorage.setItem("Data", JSON.stringify(Data || []));
    }, [Data]);

    const deleteStudent = (index) => {
        const updatedData = [...StudentData];
        updatedData.splice(index, 1);
        setStudentData(updatedData);
        localStorage.setItem("Data", JSON.stringify(updatedData));
    };




    return (
        <>
            <div className="showlist">
                <h1>Student List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sno #</th>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Student Email</th>
                            <th>Student Course</th>
                            <th>Student Phone</th>
                            <th>Student Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            
                            StudentData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{data.Sid}</td>
                                        <td>{data.Sname}</td>
                                        <td>{data.Semail}</td>
                                        <td>{data.Course === '' ? "Null" : data.Course}</td>
                                        <td>{data.Sphone}</td>
                                        <td className="del_btn" onClick={deleteStudent}>Delete</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showlist;