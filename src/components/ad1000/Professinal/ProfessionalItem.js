import { Button } from "react-bootstrap"

const ProfessionalItem = (props) =>{
    return <tr>
    <th>{props.professional.skillName}</th>
    <th>{props.professional.skillPercentage}</th>
    <th>{props.professional.orderNo}</th>
    <th><Button id={props.professional._id} onClick={props.onEdit} size='sm' variant="warning">EDIT</Button>{' '}</th>
    <th><Button id={props.professional._id} onClick={props.onDelete} size='sm' variant="danger">DELETE</Button>{' '}</th>
  </tr>
}

export default ProfessionalItem;