import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import User from './components/User'
import EditUser from './components/EditUser'
import Search from './components/Search'

const App = () => {


  const getUserData = async () => {
    const { data } = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    console.log(data)
    return data
  }

  const [users, setUsers] = useState([])
  const [editUserId, setEditUserId] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: ""
  })

  useEffect(() => {
    getUserData()
      .then(data => {
        setUsers(data)
      })
  }, [])


  const checkedAll = (e) => {

    const userField = document.getElementsByClassName('user')
    const checkBoxes = document.getElementsByClassName('checkbox')

    if (e.target.checked) {

      for (let i = 0; i < userField.length; i++) {
        userField.item(i).classList.add('checked')
        checkBoxes.item(i).checked = true
      }

    } else {
      for (let i = 0; i < userField.length; i++) {
        userField.item(i).classList.remove('checked')
        checkBoxes.item(i).checked = false
      }
    }
  }


  const handleEditFormChange = e => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value;

    console.log(fieldValue)

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)

  }

  const handleEditClick = (e, user) => {
    e.preventDefault()
    setEditUserId(parseInt(user.id))

    const formValues = {
      name: user.name,
      email: user.email,
      role: user.role
    }

    setEditFormData(formValues)
  }

  const handleAddFormSubmit = e => {
    e.preventDefault()

    const editedUser = {
      id: editUserId,
      name: editFormData.name,
      email: editFormData.email,
      role: editFormData.role
    }

    const before = users.slice(0, editUserId - 1)
    const after = users.slice(editUserId, users.length)
    before.push(editedUser)
    const newArr = before.concat(after)
    setUsers(newArr)
    setEditUserId(null)


  }

  const setSearch = e => {

    console.log(e.target.value)
    setSearchTerm(e.target.value.toLowerCase())

  }

  const handleDeleteClick = (e, user) => {
    e.preventDefault()
    let updatedUsers = users.filter(val => val.id !== user.id);
    setUsers(updatedUsers)
  }

  const deleteSelected = () => {
    const checkedUsersID = []
    const checkedUsers = document.getElementsByClassName('checked');
    for (let i = 0; i < checkedUsers.length; i++) {
      checkedUsersID.push(checkedUsers.item(i).firstChild.firstChild.id)
    }
    console.log(checkedUsersID)
    let unSelectedUsers = users.filter(user => !checkedUsersID.includes(user.id))

    setUsers(unSelectedUsers)
  }

  return (


    <div className="app-container">
      <Search setSearch={setSearch} />
      <form onSubmit={handleAddFormSubmit}>
        <table>
          <thead>
            <tr>
              <th class="table-head">
                <input type="checkbox" id="select_all_checkboxes" onChange={checkedAll} />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.filter((val) => {
              if (searchTerm === "") {
                return val
              } else if (
                val.name.toLowerCase().includes(searchTerm) || val.email.toLowerCase().includes(searchTerm)
                || val.role.toLowerCase().includes(searchTerm)
              ) {
                return val
              }
            }).map(user => (
              <>

                {editUserId === parseInt(user.id) ? (
                  <EditUser editFormData={editFormData} handleEditFormChange={handleEditFormChange} />
                ) : (
                    <User user={user} key={user.id} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                  )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <button id="delete" onClick={deleteSelected} >Delete Selected</button>
    </div>
  )
}

export default App