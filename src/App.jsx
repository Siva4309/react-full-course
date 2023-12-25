import React from 'react'
//import Profile from './Profile';
//import data from "./data"
//import { moreData } from "./data"
//import ListItem from './ListItem';
import Index from './useEffect/3-useEffect-example-1';


function App() {

    return (
        <div className="App">
           <Index />
        </div>
    )
}




// const App = () => {

//     const clickHandle = (event,firstName) => {
//         console.log("Hello iam " ,firstName,event);
//     }
//     return (
//         <main className="container">
//            {/* <button className="button" onClick={clickHandle}>click Me</button> */}
//             {/* <button className="button" onClick={function (e) {
//                 return clickHandle(e, "sivareddy");
//            }}>click Me</button> */}
//             <button className="button" onClick={(e) => clickHandle(e,"sivareddy")
//            }>click Me</button>
//         </main>
//     );
// };
// const App = () => {
//     return (
//         <main className="container">
//             <ul className="comments-container">
//                 {
//                     moreData.map((eachObj) => {
//                         const { id, email, name, body } = eachObj;
//                         return (
//                             <ListItem key={id} id={id} email={email} name={name} body={body}  />
//                         )
//                     })
//                 }   
//             </ul>
//         </main>
//     );
// };



// const App = () => {
//     return (
//         <section className="post-container">
//           {
//                 data.map((eachObj) => {
//                     const { id, title, thumbnailUrl, url } = eachObj;
//                     return <Profile
//                         key={id}
//                         id={id}
//                         title={title}
//                         thumbnailUrl={thumbnailUrl}
//                         url={url}
//                     />
//                 })
//           }
//         </section>
       
//     );
// };

// const data = [
//     {
//         title: "Crash Landing on you",
//         imgURL: "./images.jpg",
//         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
//     },
//     {
//         title: "New Movie Object",
//         imgURL: "./images.jpg",
//         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
//     },
//     {
//         title: "New Movie Object-2",
//         imgURL: "./images.jpg",
//         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
//     }
// ]


// let NetflixMovie = {
//     title: "Crash Landing on you",
//     imgURL: "./images.jpg",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
// }

// let newMovie = {
//     title: "New Movie Object",
//     imgURL: "https://decider.com/wp-content/uploads/2021/01/Crash-Landing-on-You-.jpg?quality=75&strip=all&w=1200",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
// }

// let title = "Crash Landing on you";
// let imgURL = "./images.jpg";
// let desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
// const user = {
//     firstName: "siva",
//     lastName: "reddy"c
// }

// const PrintName = () => {
//     return <h1> Hello {user.firstName + " " + user.lastName} </h1>
// }

// const ImageComponent = () => {
//     return (
//         <img src="./images.jpg" alt="Netflix Image" />
//     )
// }

// const Movie = (props) => {
//     console.log(props);
//     const { title, imgURL, desc } = props;
//     return (
//         <article className='each-movie'>
//             {/* <ImageComponent />
//             <Title /> */}
//             {/* <h2>{ props.firstName}</h2> */}
//             {/* <img src={imgURL} alt="netflix movie" />
//             <h1>{title}</h1> */}
//             {/* <h1>{props.title}</h1>
//             <img src={props.imgURL} alt="netflix movie" />
//             <p>{props.desc}</p> */}
//             <h1>{title} || "Random Title"</h1>
//             <img src={imgURL} alt={title} />
//             <p>{desc} || "Alternative description for temporary"</p>
//         </article>
//     )
// }
// const Movie = ({title, imgURL, desc}) => {
//     // console.log(props);
//     // const { title, imgURL, desc } = props;
//     return (
//         <article className='each-movie'>
//             <h1>{title || "Random Title"} </h1>
//             <img src={imgURL} alt={title} />
//             <p>{desc || "Alternative description for temporary"} </p>
//         </article>
//     )
// }

// const Title = () => {

//     // const styles = {
//     //     heading: {
//     //         color: "blue",
//     //         fontSize: "20px"
//     //     },
//     //     smallHeading: {
//     //         color: "red",
//     //         fontSize:"15px"
//     //     },
//     // };
//     return (
//         // <h3 style={styles.heading}> Crash Landing on you
//         // <span style={styles.smallHeading}>Small Title</span></h3>
//         <h3 className='heading'>Crash Landing on you</h3>
//     );
// }

// function getData() {
//     console.log(arguments);
// }

// getData("SivaReddy");

// function App() {

//     // let temparray = [<h1>Mango</h1>, <h1>Berries</h1>];
//     // let newtempArr = data.map((eachObj) => {
//     //     return (
//     //         <article>
//     //             <h1>{eachObj.title}</h1>
//     //             <img src={eachObj.imgURL} alt={eachObj.title} />
//     //             <p>{ eachObj.desc}</p>
//     //         </article>  
//     //     )
//     // })

//     // console.log(newtempArr);
//     return (
//         <section className='movie-container'>

//         {/* <Movie firstName = "sivareddy" lastName="Yarragudi"/>
//         <Movie firstName="Chandra Kala" /> */}
//         {/* <Movie title={title} imgURL={imgURL} desc={desc} /> */}
//         {/* <Movie title={NetflixMovie.title} imgURL={NetflixMovie.imgURL} desc={NetflixMovie.desc} />
//         <Movie title={newMovie.title} imgURL={newMovie.imgURL} desc={newMovie.desc} /> */}
//         {/* <Movie title={data[0].title} imgURL={data[0].imgURL} desc={data[0].desc} />
//         <Movie title={data[1].title} imgURL={data[1].imgURL} desc={data[1].desc} />
//         <Movie title={data[2].title} imgURL={data[2].imgURL} desc={data[2].desc} /> */}
            
//             {/* {temparray} */}
//             {/* {newtempArr} */}

//             {/* {
//                 data.map((eachObj) => {
//                     return <Movie title={eachObj.title} imgURL={eachObj.imgURL} desc= {eachObj.desc} />
//                 })
//             } */}
//             {
//                 data.map((eachObj, index) => {
//                     const { title, imgURL, desc } = eachObj;
//                     return <Movie key={index} title={title} imgURL={imgURL} desc= {desc} />
//                 })
//             }
//         </section>
//     )
// }

export default App;