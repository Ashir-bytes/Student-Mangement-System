import "./Manage.css"
import { useEffect, useState } from 'react'
import Showlist from './Showlist'


// Date: 03/18/2021
function Manage() {
  const [Sname, setSname] = useState('')
  const [Sid, setSid] = useState('')
  const [Semail, setSemail] = useState('')
  const [Sphone, setSphone] = useState('')
  const [Course, setCourse] = useState('');  // Add your state for course selection here
  const [Data, setData] = useState([])


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('Data')) || [];
    setData(storedData);
  }, []);

  const handleName = (e) => {
    setSname(e.target.value)
  }
  const handleId = (e) => {
    setSid(e.target.value)
  }
  const handleEmail = (e) => {
    setSemail(e.target.value)
  }
  const handlePhone = (e) => {
    setSphone(e.target.value)
  }
  const handleCourse = (e) => {
    setCourse(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Sname, Sid, Semail, Sphone, Course);
    const newData = [...Data, { Sname, Sid, Semail, Sphone ,Course}];
    // localStorage.setItem('Data', JSON.stringify(newData));
    setData(newData);
    setSname('');
    setSid('');
    setSemail('');
    setSphone('');
    setCourse('');
  };

  return (
    <>
      <div className="flex manage">
        <h1 className="heading">Student Mangement</h1>
        <form action="/">
          <input type="text" placeholder="Student Name" value={Sname} onChange={handleName} />
          <input type="text" placeholder="Student ID" value={Sid} onChange={handleId} />
          <input type="text" placeholder="Student Email" value={Semail} onChange={handleEmail} />
          <input type="text" placeholder="Student Course" value={Course} onChange={handleCourse} />
          <input type="text" placeholder="Student Phone" value={Sphone} onChange={handlePhone} />
          <button onClick={(handleSubmit)}>Submit</button>
        </form>
      </div>
      {/* <Showlist Data={JSON.parse(localStorage.getItem('Data'))} /> */}
      <Showlist Data={Data} />
    </>
  )
}

export default Manage