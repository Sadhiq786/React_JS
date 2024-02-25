
export function Data(){

    return(

        <div style={{"display":"flex","justify-content":"center", "margin-top":"80px"}}>
        <forms>
            
            <label>Username: </label>
            <input type="text" name="username"/><br/><br/>

            <label>Password: </label>
            <input type="text" name="password"/><br/><br/>
        </forms>
        </div>
    )
}

export function Picture()
{
    return(
        <div>
        <img src ="https://media.istockphoto.com/id/183823708/photo/men-with-poster.jpg?s=612x612&w=0&k=20&c=817avPl2G1ThBZx4DGkTM6V7XE8dHkSfG2BBTTwlp4w=" height="150" width="150" alt=""/>
        </div>
    )
}

