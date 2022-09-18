import { Button } from "react-bootstrap";

const ExperienceItem = (props) => {
  return (
    <tr>
      <th>{props.experience.title}</th>
      <th>{props.experience.start}</th>
      <th>{props.experience.end}</th>
      <th>{props.experience.description}</th>
      <th>{props.experience.orderNo}</th>
      <th>
        <Button
          id={props.experience._id}
          onClick={props.onEdit}
          size="sm"
          variant="warning"
        >
          EDIT
        </Button>{" "}
      </th>
      <th>
        <Button
          id={props.experience._id}
          onClick={props.onDelete}
          size="sm"
          variant="danger"
        >
          DELETE
        </Button>{" "}
      </th>
    </tr>
  );
};

export default ExperienceItem;
