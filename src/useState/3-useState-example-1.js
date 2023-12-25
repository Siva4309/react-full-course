
import React, { useState } from 'react'

const Index = () => {

    const [showData, setShowData] = useState(false);

    const handleChange = () => {
        setShowData(!showData);
    }
    return (
        <div>
            <button onClick={handleChange}>{showData ? "Hide" : "Show"}</button>
            {/* {showData && (
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore delectus facilis voluptatum natus voluptatibus recusandae maxime dolorum illo sunt distinctio accusamus autem soluta quia nesciunt, totam atque eius pariatur molestias aliquid. Ullam aut molestias aspernatur perspiciatis quis pariatur voluptatum sed in. Officiis, eveniet. Temporibus recusandae suscipit expedita a minima!
                </div>
            )} */}

            {
                showData ? (<div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus corporis aperiam libero aut enim debitis in error consequuntur dicta doloribus explicabo ducimus tenetur id dolor, fugiat fugit atque incidunt odit repellat vitae porro officia ratione ad mollitia. Aperiam culpa quis nesciunt incidunt modi odio voluptates vel, facere provident quisquam non.</div>) : (
                    <h3> Data is Hidden</h3>
                )
            }
        </div>
    )
}

export default Index;