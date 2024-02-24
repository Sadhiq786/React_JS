import { Component } from "react";

class DataInTable extends Component{
    constructor()
    {
        super()
        this.state = {
            filter:  [
                {Name:"Sadhiq", Designation: "React-Developer", Salary: 40000 },

                 {Name: "Sameer", Designation: "Angular", Salary: 35000},

                  {Name: "Harini", Designation: "JavaScript", Salary: 38000 },

                  {Name: "Dheeraj", Designation: "React-Developer", Salary: 30000 },

                  {Name: "Rithesh", Designation: "JavaScript", Salary: 25000},

                  {Name: "Venkat", Designation: "Angular", Salary: 32000 },

                  {Name: "Sathwika", Designation: "React-Developer", Salary: 52000},

                  {Name: "Shamitha", Designation: "Angular", Salary: 20000},

                  {Name: "Sunny", Designation: "JavaScript", Salary: 29500 },

                  {Name: "Vamsi", Designation: "React-Developer", Salary: 43000 }
            ],
            Data: [
                {Name:"Sadhiq", Designation: "React-Developer", Salary: 40000 },

                 {Name: "Sameer", Designation: "Angular", Salary: 35000},

                  {Name: "Harini", Designation: "JavaScript", Salary: 38000 },

                  {Name: "Dheeraj", Designation: "React-Developer", Salary: 30000 },

                  {Name: "Rithesh", Designation: "JavaScript", Salary: 25000},

                  {Name: "Venkat", Designation: "Angular", Salary: 32000 },

                  {Name: "Sathwika", Designation: "React-Developer", Salary: 52000},

                  {Name: "Shamitha", Designation: "Angular", Salary: 20000},

                  {Name: "Sunny", Designation: "JavaScript", Salary: 29500 },

                  {Name: "Vamsi", Designation: "React-Developer", Salary: 43000 }
            ],

        }
    }

    // function
    Funfilter1=()=>{
       let res1 = this.state.Data.filter((item)=>item.Designation==="React-Developer");
        console.log(res1);
       this.setState(
        {
            filter:res1
        }
       )

    }

    Funfilter2=()=>{
        let res2 = this.state.Data.filter((item)=>item.Designation==="JavaScript");
         console.log(res2);
        this.setState(
         {
            filter:res2
         }
        )
 
     }

     Funfilter3=()=>{
        let res3 = this.state.Data.filter((item)=>item.Designation==="Angular");
         console.log(res3);
        this.setState(
         {
            filter:res3
         }
        )
 
     }

    render()
    {
        const tablestyle= {
            borderCollapse: 'collapse',
            border:"2px solid black",
            padding : "10px",
            marginTop: "40px"
        }

        const thstyle = {
            borderCollapse: 'collapse',
            border:"2px solid black",
            padding : "10px"
        }

        return(

       
            <div>
                <table style={tablestyle}>
                    <tr>
                        <th style={thstyle}>Names</th>
                        <th style={thstyle}>Designation</th>
                        <th style={thstyle}>Salary</th>
                    </tr>
                    {
                        this.state.filter.map((Items)=>{
                        
                            return(
                            <tr>
                                <td style={thstyle}>{Items.Name}</td>
                                <td style={thstyle}>{Items.Designation}</td>
                                <td style={thstyle}>{Items.Salary}</td>
                            </tr>
                        )})
                    }

                </table>

                <button onClick={this.Funfilter1}>React-Developer</button>
                <button onClick={this.Funfilter2}>JavaScript</button>
                <button onClick={this.Funfilter3}>Angular</button>
            </div>
        )
    }
}

export default DataInTable;