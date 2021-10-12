import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import User from './components/User'

const App = () => {


  const getUserData = async () => {
    const { data } = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    console.log(data)
    return data
  }

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUserData()
      .then(data => {
        setUsers(data)
      })
  }, [])


  const checkedAll = (e) => {

    const userField = document.getElementsByClassName('user')
    const userArr = [].slice.call(userField);
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


  return (


    <div className="app-container">
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
          </tr>
        </thead>

        <tbody>
          {users.map(user => <User user={user} key={user.id} />)}
        </tbody>
      </table>
    </div>
  )
}

export default App