import StudentList from "./studentList";
import { useStudents } from "./useStudent";

export default function Students() {
    const [students, name, Batch, roll, stuClass, flag, errorMessage, deleteHandler, updateHandler, ctaHandler, ctaUpdateHandler, setName, setBatch, setRoll, setStuClass] = useStudents()

    return (
        <div className="container">
            <div className="row">
                <div className="col col-x-sm-12">
                    <input
                        className="form-control m-4"
                        maxLength={20}
                        type="text"
                        value={name}
                        placeholder="Enter Your Name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="form-control m-4"
                        type="text"
                        value={Batch}
                        placeholder="Enter Your Batch"
                        onChange={(e) => setBatch(e.target.value)}
                    />
                    <input
                        className="form-control m-4"
                        type="text"
                        maxLength={8}
                        value={stuClass}
                        placeholder="Enter Your Class"
                        name="name"
                        onChange={(e) => setStuClass(e.target.value)}
                    />
                    <input
                        className="form-control m-4"
                        type="text"
                        maxLength={8}
                        value={roll}
                        placeholder="Enter Your Roll No"
                        name="name"
                        onChange={(e) => setRoll(e.target.value)}
                    />
                </div>

                {/* for using flag mtlb konsa button dikhana hai usko  */}
                {flag ? (
                    <button
                        className="btn btn-danger w-100 ms-4"
                        onClick={ctaUpdateHandler}
                    >
                        Update
                    </button>
                ) : (
                    <button className="btn btn-dark w-80 ms-4" onClick={ctaHandler}>
                        Submit
                    </button>
                )}
                <br />
                <h1 className=" d-flex justify-content-center align-items-center ">
                    List of Students
                </h1>
                <table class="table table-warning ms-4 ">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th scope="col">Name</th>
                            <th scope="col">Batch</th>
                            <th scope="col">Class</th>
                            <th scope="col">RollNo</th>
                            <th scope="col">Actions Perform</th>
                            <th scope="col">Update Item</th>
                        </tr>
                    </thead>
                    {students.map((item, index,) => {
                        return (
                            <StudentList
                                index={index}
                                student={item}
                                deleteHandler={deleteHandler}
                                updateHandler={updateHandler}
                            />
                        );
                    })}
                </table>
            </div>
        </div>
    );
}
