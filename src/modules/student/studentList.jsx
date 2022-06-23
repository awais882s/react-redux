import React from "react";
export default function StudentList({ student, index, deleteHandler, updateHandler }) {

    return (
        <tbody>
            <tr>
                <td>{index}</td>
                <td>{student.name}</td>
                <td>{student.batch}</td>
                <td>{student.class}</td>
                <td>{student.roll}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => deleteHandler(index)}>
                        Delete
                    </button>
                </td >
                <td>
                    <button className="btn btn-primary" onClick={() => updateHandler(student, index)}>
                        Update Items
                    </button>
                </td>

            </tr>
        </tbody>
    );
}
