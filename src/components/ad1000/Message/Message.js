import { Fragment } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../../store/message-action";
import classes from "./Message.module.css";
import MessageItem from "./MessageItem";
const Message = () => {
  const dispatch = useDispatch();
  const onDeleteHandler = (event) => {
    dispatch(deleteMessage(event.target.id))
  };
  const messages = useSelector((state) => state.message.messages);
  return (
    <Fragment>
      <Table className={classes.table} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Content</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, key) => (
            <MessageItem
              key={key}
              onDelete={onDeleteHandler}
              message={message}
            />
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};
export default Message;
