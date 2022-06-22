import React, { useState } from "react";
import { data } from "./data"

export function useStudents() {
    const [students, setStudents] = useState(data);
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [batch, setBatch] = useState("");
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdateIndex] = useState(0);
    const [errorMessage, setMessage] = useState("");

    // }
    const deleteHandler = (index) => {
        console.log("index", index);

        const newStudents = students.filter((student, i) => {
            if (i !== index) {
                // console.log("this is delete ", index);
                return student;
            }
        });
        setStudents([...newStudents]);
        console.log("newstudents", newStudents);
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
    const updatehandler = (student, index) => {
        console.log("need to update stu", student);
        setUpdateIndex(index);
        setName(student.name);
        setRollno(student.rollno);
        setBatch(student.batch);
        setFlag(true);
    };

    const ctaHandler = () => {
        setMessage("");
        if (name !== "" && batch !== "" && rollno !== "") {
            let newStudent = {
                name,
                rollno,
                batch,
            };
            setStudents([newStudent, ...students]);
            console.log("New add Students", newStudent);
            // new data add in student list
            // setStudents([...students, newStudent]);

            // for empty inputs
            setName("");
            setRollno("");
            setBatch("");
        } else {
            setMessage("Found Few of Params empty! Params can,t empty");
        }
    };

    // call to action for update handlers
    const ctaUpdateHandler = () => {
        setMessage("");
        if (name !== "" && batch !== "" && rollno !== "") {
            let student = {
                name,
                rollno,
                batch,
            };
            console.log("New add Students", student);

            let updatedStudents = students.map((stu, index) => {
                if (updatedIndex === index) {
                    return student;
                } else {
                    return student;
                }
            });
            // new data add in student list
            // setStudents([...students, newStudent]);
            setStudents([...updatedStudents]);

            // for empty inputs
            setName("");
            setRollno("");
            setBatch("");
            setFlag(false);
        } else {
            setMessage("Found Few of Params empty! Params can,t empty");
        }
    };

    return ([students, name, rollno, batch, flag, errorMessage, deleteHandler, updatehandler, ctaHandler, ctaUpdateHandler, setName, setRollno, setBatch,]
    )
}
