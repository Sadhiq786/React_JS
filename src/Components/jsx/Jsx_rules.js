
// Rules of JSX

// 1) Every tag must be enclosed in a single container;
// 2) Use camelCase for attributes
// 3) className instead of class (class is a predefined keyword in react)
// 4) Every tag must be enclose. 

const RulesofJsx = ()=>{

    return(

        <div>
            <h2 className ="hello">Hello</h2>
            <h2>Good Morning</h2>
        </div>
    )
}
export default RulesofJsx;


export function Picture()
{
    return(
        <div>
        <img src ="https://media.istockphoto.com/id/183823708/photo/men-with-poster.jpg?s=612x612&w=0&k=20&c=817avPl2G1ThBZx4DGkTM6V7XE8dHkSfG2BBTTwlp4w=" height={150} width={150} alt=""/>
        </div>
    )
}


