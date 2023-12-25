import React, { useState } from 'react'

const Index = () => {

    const initialArray = [
        {
            id: 1,
            firstName: "siva",
            lastName: "reddy",
            age: 31
        },
        {
            id: 2,
            firstName: "chandra",
            lastName: "kala",
            age: 28
        },
        {
            id: 3,
            firstName: "don",
            lastName: "seenu",
            age: 28
        },
    ]

    const [data, SetData] = useState(initialArray);

    console.log(data);

    const handleDelete = (comingid) => {
        const filterData = data.filter((eachitem) => {
            return eachitem.id !== comingid;
        })
        SetData(filterData);
    }

    // const initialObj = {
    //     firstName: "siva",
    //     lastName: "Reddy",
    //     age: 31
    // }

    // function initialData() {
    //     return {
    //         firstName: "siva",
    //         lastName: "Reddy",
    //         age: 31
    //     }
    // }
    // const [data, SetData] = useState(initialData);

    // const [firstName, setFirstName] = useState("siva");
    // const [lastName, setLastName] = useState("reddy");
    // const [age, setAge] = useState(32);

    // const changeFirstName = () => {
    //     SetData({
    //         ...data, //spread operator
    //         firstName: "SivaReddy"
    //     });
    // };

    // const changeLastName = () => {
    //     SetData({
    //         ...data, //spread operator
    //         lastName: "yarragudi"
    //     });
    // };
    // const changeFirstName = () => {
    //     setFirstName("Sivareddy");
    // };

    // const changeLastName = () => {
    //     setLastName("Yarragudi");
    // };
    // const changeAge = () => {
    //     setAge(28);
    // };
    return (
        <div>
            {/* <h1>My First Name is {data.firstName}</h1>
            <button onClick={changeFirstName}>change Firstname</button>
            <h1>My Last Name is {data.lastName}</h1>
            <button onClick={changeLastName}>change Last Name</button>
            <h1>My Age {data.age}</h1> */}
            {/* <h1>My First Name is {firstName}</h1>
            <button onClick={changeFirstName}>change Firstname</button>
            <h1>My Last Name is {lastName}</h1>
            <button onClick={changeLastName}>change Last Name</button>
            <h1>My Age {age}</h1>
            <button onClick={changeAge}>changeAge</button> */}
            <ul>
                {
                    data.map((eachItem, index) => {
                        const { firstName, lastName, age, id } = eachItem;
                        return (
                            <li key={index}>
                                <div>firstName : {firstName}</div>
                                <div>lastName: {lastName}</div>
                                <div>Age: {age}</div>
                                <button onClick={() => handleDelete(id)}>Delete Me</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Index;