import React,{useState} from "react"

const EmployeesList = ()=>{


    const[employees,setEmployeeData] = useState([
        {id:1, name:"Sadhiq", age:23},
        {id:2, name:"Sameer", age:19}
    ])

    // adding
    const addEmployees=()=>{

        const newEmployee = {
            // id: employees.length + 1,
            name: `Employee ${employees.length + 1}`,
            // age: Math.floor(Math.random() * 30) + 20,
        }

        setEmployeeData([...employees,newEmployee]);
    }

    // deleting

    const deleteemp=(id)=>{
        let deleteemployees = employees.filter((employees)=>employees.id!==id)
        setEmployeeData(deleteemployees);
    }

    return(
        <>
            <h1>Employees</h1>

            <ul>
                {
                    employees.map((eachPerson,id)=>{
                        return(
                            <>
                            {/* <li>{eachPerson.id}</li> */}
                            <li>{eachPerson.name}</li>
                            {/* <li>{eachPerson.age}</li> */}

                            <button onClick={()=>deleteemp(eachPerson.id)}>Delete employees</button>
                            </>
                        )
                    })
                }
            </ul>
            <button onClick={addEmployees}>Add employees</button>

        </>
    )
}
export default EmployeesList;