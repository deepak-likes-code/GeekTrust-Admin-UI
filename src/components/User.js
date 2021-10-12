import React from 'react'

const User = ({ user }) => {




    const checked = (e) => {
        const td = document.getElementById(e.target.id)
        const tRow = td.parentElement.parentElement
        if (e.target.checked) {
            console.log('Checked', e.target)
            tRow.classList.add('checked')

        } else {
            tRow.classList.remove('checked')
        }

    }


    return (
        <tr className="user">
            <td>
                <input className="checkbox" type="checkbox" id={user.id} onChange={checked} />

            </td>
            <td >{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
        </tr>
    )
}

export default User
