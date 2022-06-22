import StudentList from "./studentList";
import  {useStudents}  from "./useStudent";

export default function Students() {
    const [students, name, rollno, batch, flag, updatedIndex, errorMessage, deleteHandler, updatehandler, ctaHandler, ctaUpdateHandler] = useStudents()

    return (
        <div className="container">
            <div className="row">
                <div className="col col-x-sm-12">
                    <input
                        className="form-control m-4"
                        maxLength={20}
                        type="text"
                        value={name}
                        placeholder="Please Enter Your Name"
                        name="name"
                        // onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="form-control m-4"
                        type="text"
                        maxLength={8}
                        value={rollno}
                        placeholder="Please Enter Your Roll No"
                        name="name"
                        // onChange={(e) => setRollno(e.target.value)}
                    />
                    <input
                        className="form-control m-4"
                        type="text"
                        value={batch}
                        placeholder="Please Enter Your Batch"
                        // onChange={(e) => setBatch(e.target.value)}
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
                    <button className="btn btn-warning w-98 ms-4" onClick={ctaHandler}>
                        Submit
                    </button>
                )}

                <p
                    className="d-flex justify-content-center m-4 p-2 text-black"
                    style={{ backgroundColor: "blue", color: "whitesmoke" }}
                >
                    {errorMessage}
                </p>
                <hr />
                <h1 className=" d-flex justify-content-center align-items-center ">
                    List of Students
                </h1>
                <table class="table table-primary ms-4 ">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th scope="col">Name:</th>
                            <th scope="col">RollNo:</th>
                            <th scope="col">Batch</th>
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
                                updatehandler={updatehandler}
                            />
                        );
                    })}
                </table>
            </div>
        </div>
    );
}
