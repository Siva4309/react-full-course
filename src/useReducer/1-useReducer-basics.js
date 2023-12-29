import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachperson) => {
      return eachperson.id !== action.payload;
    });
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    };
  }
  return state;
};

const initialState = {
  data: [
    {
      id: "sfsfsf",
      firstName: "siva",
      email: "siva@gmail.com",
    },
    {
      id: "dafdadd",
      firstName: "chandu",
      email: "siva@gmail.com",
    },
  ],
  length: 2,
};

const Index = () => {
  console.log(useReducer(reducer, initialState));
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  const handleEdit = (id) => {
    dispatch({
      type: "UPDATE_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      <h1>current users length:{state.length}</h1>
      {state.data.map((eachItem) => {
        const { id, firstName, email } = eachItem;
        return (
          <div key={id}>
            <br />
            <br />
            <h3>{firstName}</h3>
            <h3>{email}</h3>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => handleEdit(id)}>Edit</button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Index;
