import React, { useState } from "react";
import { data } from "./data"

export function useStudents() {
    const [students, setStudents] = useState(data);
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("");
    const [Batch, setBatch] = useState("");
    const [roll, setRoll] = useState("");
    const [stuClass, setStuClass] = useState("");
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdateIndex] = useState(0);
    // }

    const deleteHandler = (index) => {
        // console.log('name', stuname);

        let newStudents = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        });

        setStudents([...newStudents]);
        console.log("newStudents", newStudents);
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
        setStuClass(student.class);
        setRoll(student.roll);
        setBatch(student.batch);
        setFlag(true);
    };

    const ctaHandler = () => {
        setMessage("");

        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass,
            };
            console.log("student", student);

            setStudents([...students, student]);
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");
        } else {
            setMessage(" Found few of params empty! Params can't be empty.");
        }
        // new data add in student list
    };

    // call to action for update handlers
    const ctaUpdateHandler = () => {
        setMessage("");

        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass,
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
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");
            setFlag(false);
        } else {
            setMessage(" Found few of params empty! Params can't be empty.");
        }
    };
    return ([students, name, Batch, roll, stuClass, flag, errorMessage, deleteHandler, updateHandler, ctaHandler, ctaUpdateHandler, setName, setBatch, setRoll, setStuClass]
    )
}
