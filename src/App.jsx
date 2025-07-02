import "./App.css";
import { useState } from "react";
// const App = () => {
// const[Count,setCount]=useState(0)

// return (
//   <>
//     <h1>hello react</h1>
//     <div className="butt">
//       <div>Count:{Count}</div>
//       <div className="button">
//         <button onClick={() => setCount((prev) => prev + 1)}>
//           Increment
//         </button>
//         <button onClick={() => setCount((prev) => prev - 1)}>
//           decrement
//         </button>
//         <button onClick={() => setCount(0)}>reset</button>
//       </div>
//     </div>
//   </>
// );
// }
// const App = () => {

// const [user, setUser] = useState({
//   FirstName: "najlaa",
//   LastName: "mohammad",
// });

// return (
//   <>
//     <h1>
//       Hello {user.FirstName} {user.LastName}
//     </h1>

//     <button
//       type="button"
//       onClick={() =>
//         setUser((prev) => ({
//           ...prev,
//           LastName: "nn",
//         }))
//       }
//     >
//       Change user
//     </button>

//     <button
//       type="button"
//       onClick={() => setUser({ FirstName: "najlaa", LastName: "mohammad" })}
//     >
//       Reset
//     </button>
//   </>
// );
// }
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      alert("please fill in all fields!");
    }
    console.log({ username, password });
    // console.log(password);
  };
  return (
    <>
      <h1>hello react</h1>
      <form className="forms" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </>
  );
};

// export default App;

// const App = () => {
//   const [user, setUser] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value, // Dynamically update the correct field
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user.username === "" || user.password === "") {
//       alert("Please fill in all fields!");
//     } else {
//       console.log(user); // Output the user object
//     }
//   };

//   return (
//     <>
//       <h1>Hello React</h1>
//       <form className="forms" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           value={user.username}
//           id="username"
//           onChange={handleChange}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           id="password"
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// };

// export default App;
//ES 6
// const App=()=>{
//   fetch("https://jsonplaceholder.typicode.com/photos").then((res)=>
//   // console.log(res)

//     res.json())
//     .then((data )=>
// console.log(data)).catch((error)=> console.log(error));

//   //ES 7
//   const getData=async()=>{
//     try{
//       const res=await  fetch("https://jsonplaceholder.typicode.com/photos")
//       const data=await res.json()
//       console.log(data)
//     }
//     catch(error){
//       console.log(error)

//     }

//   }
//   getData()
//   return(
//     <>
//     <h1>hello react</h1>
//     </>
//   )
// }
export default App;
