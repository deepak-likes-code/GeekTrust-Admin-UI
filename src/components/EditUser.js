import React from 'react'
import { FaSave } from "react-icons/fa";


const EditUser = ({ editFormData, handleEditFormChange }) => {
    return (
        <tr className="user">
            <td>
                <input className="checkbox" type="checkbox" />

            </td>
            <td ></td>
            <td>
                <input
                    type='text'
                    required="required"
                    placeholder="Enter a name..."
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type='email'
                    required="required"
                    placeholder="Enter email.."
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}

                ></input>
            </td>
            <td>
                <input
                    type='text'
                    required="required"
                    placeholder="Enter a role"
                    name="role"
                    value={editFormData.role}

                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">
                    <FaSave />

                </button>

            </td>
        </tr>
    )
}

export default EditUser
