import TableImage from "../images/img";


function TableContent()
{
    return (

        <table>
            <tr>
                <th>ID</th>
                <th>Names</th>
                <th>Photos</th>
            </tr>

            <tr>
                <td>1</td>
                <td>Rick</td>
                <td>
                    <TableImage></TableImage>
                </td>
            </tr>


            <tr>
                <td>2</td>
                <td>Pattinson</td>
                <td>
                <TableImage></TableImage>
                </td>
            </tr>
        </table>
    )
}

export default TableContent; 