import "./text.css"

import styles from "./text.module.css"

const FancyText = ()=>{

    const ObjStyle = {
                color: "white",
                backgroundColor: "green",
                fontFamily: "centry gothic",

    }
    return(

        <div>
            <h1 style={ObjStyle}>Hello</h1>
            <h1 className="text">Hi</h1>

            <h2 className={styles.hello}>Good morning</h2>
        </div>
    )
}
export default FancyText; 