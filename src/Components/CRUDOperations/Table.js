import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "./table.css"


const Table = ()=>{

    const[data, setData]= useState([])
    const[name, setName] = useState("");
    const[username, setUsername]= useState("");
    const[email,setEmail] = useState("")
    const[editId, setEditID]=useState(-1)

    const[uname, setuName] = useState("");
    const[uusername, setuUsername]= useState("");
    const[uemail,setuEmail] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>setData(res.data))
        .catch(err=> console.error(err))
    },[])

    const handleSubmit=(event)=>{
        const id = data.length+1
        event.preventDefault();
        axios.post("http://localhost:3000/users",{
            id: id,
            name: name, 
            username:username,
            email: email
        })
        .then(res=>{
           window.location.reload( )
        })
        .catch(err => console.log('Error!'))
    }

    const handleEdit=(id)=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res=>{
            const user = res.data
            setuName(user.name)
            setuUsername(user.username)
            setuEmail(user.email)
        })
        .catch(err=> console.error(err))
        setEditID(id)
    }

    const handleUpdate=()=>{
        axios.put("http://localhost:3000/users/"+editId, {
            id: editId,
            name: uname,
            username: uusername,
            email: uemail
        })
        .then(res =>{
            window.location.reload();
            setEditID(-1);
        })
        .catch(error=>console.log(error));
    }

    return(
        <div className="container">
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
                <input type="text" value={username} placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}></input>
                <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input>
                <button>Add</button>
            </form>
        </div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {
               data.map((eachUser,index)=>{
                    return(

                        eachUser.id === editId ?
                        <tr>
                            <td>{eachUser.id}</td>
                            <td>
                                <input type="text" value={uname} onChange={(e)=>setuName(e.target.value)}/>
                            </td>
                            <td>
                                <input type="text" value={uusername}  onChange={(e)=>setuUsername(e.target.value)}/> 
                            </td>
                            <td>
                                <input type="text" value={uemail} onChange={(e)=>setuEmail(e.target.value)} /> 
                            </td>
                            <td>
                                <button onClick={handleUpdate}>Update</button>
                            </td>
                        </tr>
                        :

                        <tr key={index}>
                        <td>{eachUser.id}</td>
                        <td>{eachUser.name}</td>
                        <td>{eachUser.username}</td>
                        <td>{eachUser.email}</td>
                        <td>
                            <button onClick={()=>handleEdit(eachUser.id)}>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    )
               })
            }

        </table>
        </div>
    )
}
export default Table;