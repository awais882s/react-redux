import { useState } from "react";
import { data } from "./data";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

export function useStudents() {

    const [students, setStudents] = useState(data);
    const [name, setName] = useState("");
    const [Batch, setBatch] = useState("");
    const [roll, setRoll] = useState("");
    const [stuClass, setStuClass] = useState("");
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdateIndex] = useState(0);

    // store data 
    const studentReducers = useSelector(state => state.studentReducers);
    console.log("StudentReducers", studentReducers);

    // end of store data

    const deleteHandler = (index) => {
        // console.log('name', stuname);
        // eslint-disable-next-line array-callback-return
        let newStudents = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        });

        setStudents([...newStudents]);
        console.log("newStudents", newStudents);
        toast.success('You Have Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    // delete by name
    // const deleteHandler = (name) => {
    //   console.log("name", name);

    //   let newStudents = students.filter((student, i) => {
    //     if (student.name !== name) {
    //       return student;
    //     }

    //   });
    //   setStudents([...newStudents]);
    //   console.log("newstudents", newStudents);
    // };
    // for update items
    const updateHandler = (student, index) => {
        console.log("need to update stu ", student);
        setUpdateIndex(index);
        setName(student.name);
        setBatch(student.batch);
        setStuClass(student.class);
        setRoll(student.roll);
        setFlag(true);
        toast.success('Record Selected', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const ctaHandler = () => {
        if (name !== "" && Batch !== "" && roll !== "" && stuClass !== "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass,
            };
            console.log("student", student);
            setStudents([student, ...students,]);
            toast.warn('Your Recoed Has Been Submitted Success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setName("");
            setBatch("");
            setStuClass("");
            setRoll("");
        } else {
            toast.error('You Cannot Add empty Values', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        // new data add in student list
    };

    // call to action for update handlers
    const ctaUpdateHandler = () => {
        if (name !== "" && Batch !== "" && roll !== "" && stuClass !== "") {
            let student = {
                name,
                batch: Batch,
                class: stuClass,
                roll,
            };
            console.log("student", student);

            let updateStudents = students.map((stu, index) => {
                if (updatedIndex === index) {
                    return student;
                } else {
                    return stu;
                }
            });

            setStudents([...updateStudents]);
            toast.info('Information Has Been Updated Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setName("");
            setBatch("");
            setStuClass("");
            setRoll("");
            setFlag(false);
        } else {
            toast.error('You Cannot Add empty Values', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return ([students, name, Batch, roll, stuClass, flag, deleteHandler, updateHandler, ctaHandler, ctaUpdateHandler, setName, setBatch, setRoll, setStuClass]
    )
}
