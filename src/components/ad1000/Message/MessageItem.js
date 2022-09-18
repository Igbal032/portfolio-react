import { Button } from "react-bootstrap"

const MessageItem = (props) =>{
    return <tr>
    <th>{props.message.name}</th>
    <th>{props.message.email}</th>
    <th>{props.message.phone}</th>
    <th>{props.message.content}</th>
    <th><Button id={props.message._id} onClick={props.onDelete} size='sm' variant="danger">DELETE</Button>{' '}</th>
  </tr>
}

export default MessageItem;