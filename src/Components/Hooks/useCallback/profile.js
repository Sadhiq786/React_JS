import { useCallback, useState } from "react";
import CustomButton from "./customButton";



const ProfileExample = ()=>{

    const[age, setAge]=useState(100)
    const[salary, setSalary]=useState(1000)

    const handleAge =  useCallback(()=>{
        setAge(age+10)
    },[age])


    const handleSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])




    return(
        <>
          <h1>Age {age}</h1>
          <h1>Salary {salary}</h1>

          <CustomButton onClick={handleAge}>
            Age increament
          </CustomButton>

          <CustomButton onClick={handleSalary}>
            Salary increament
          </CustomButton>
        </>
    )
}
export default  ProfileExample;