import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!name || !mobile || !address) {
      alert('Please fill all fields');
      return;
    }

    const newStudent = { name, mobile, address };

    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = newStudent;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, newStudent]);
    }

    setName('');
    setMobile('');
    setAddress('');
  };

  const handleEdit = (index) => {
    const student = students[index];
    setName(student.name);
    setMobile(student.mobile);
    setAddress(student.address);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <h1>Student Manager</h1>
      <h3>All Students: {students.length}</h3>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <h2>All students</h2>
      <table border="1" style={{ width: '50%', margin: 'auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.mobile}</td>
              <td>{student.address}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
