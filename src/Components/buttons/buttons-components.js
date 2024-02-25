
function ButtonComponents({title, width=100, bgColor, textColor})
{
    return (

        <button style={{width:width, backgroundColor:bgColor, color: textColor}}>{title}</button>
    )
}
export default ButtonComponents;