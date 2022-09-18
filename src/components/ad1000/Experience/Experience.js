import { Fragment, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import classes from "./Experience.module.css";
import { useDispatch, useSelector } from "react-redux";
import ExperienceItem from "./ExperienceItem";
import Modal from "../../../UI/Modal";
import { deleteExperience, editExperience, saveExperience } from "../../../store/experience-actions";
const Experience = () => {
  const dispatch = useDispatch();

  const [isSaveAndEditModalShow, setIsSaveAndEditModalShow] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  //form inputs
  const [experienceId, setExperienceId] = useState(0);
  const [experienceOrderNo, setExperienceOrderNo] = useState(0);
  const [experienceStart, setExperienceStart] = useState(0);
  const [experienceEnd, setExperienceEnd] = useState(0);
  const [experienceTitle, setExperienceTitle] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");

  const experiences = useSelector((state) => state.exps.experiences);

  const onChangeTitle = (event) => {
    setExperienceTitle(event.target.value);
  };
  const onChangeStart = (event) => {
    setExperienceStart(event.target.value);
  };
  const onChangeEnd = (event) => {
    setExperienceEnd(event.target.value);
  };
  const onChangeOrderNo = (event) => {
    setExperienceOrderNo(event.target.value);
  };
  const onChangeDescription = (event) => {
    setExperienceDescription(event.target.value);
  };

  const onDeleteHandler = (event) => {
    const ex = {
      id: event.target.id
    }
    dispatch(deleteExperience(ex))
    console.log();
  };

  const onCreateHander = () => {
    setExperienceOrderNo();
    setExperienceEnd();
    setExperienceTitle("");
    setExperienceStart();
    setExperienceEnd();
    setExperienceDescription("");
    setIsCreate(true);
    setIsSaveAndEditModalShow(true);
  };

  const onEditHandler = async (event) => {
    setIsCreate(false);
    const exId = event.target.id;
    const faundExp = await experiences.filter((ex) => ex._id === exId);
    setExperienceId(faundExp[0]._id);
    setExperienceOrderNo(faundExp[0].orderNo);
    setExperienceStart(faundExp[0].start);
    setExperienceEnd(faundExp[0].end);
    setExperienceTitle(faundExp[0].title);
    setExperienceDescription(faundExp[0].description);
    setIsSaveAndEditModalShow(true);
  };

  const onCloseHandler = () => {
    setIsSaveAndEditModalShow(false);
  };

  const onSaveSubmitHandler = () => {
   const newExperience = {
      orderNo: experienceOrderNo,
      title: experienceTitle,
      start: experienceStart,
      end: experienceEnd,
      description: experienceDescription,
    };
    dispatch(saveExperience(newExperience));
    setIsSaveAndEditModalShow(false)
  };
  const onEditSubmitHandler = (event) => {
    const updatedExperience = {
      id: experienceId,
      orderNo: experienceOrderNo,
      title: experienceTitle,
      start: experienceStart,
      end: experienceEnd,
      description: experienceDescription,
    };
    dispatch(editExperience(updatedExperience));
    setIsSaveAndEditModalShow(false)
  };

  return (
    <Fragment>
      {isSaveAndEditModalShow && (
        <Modal onClose={onCloseHandler}>
          <Form>
            <h2>{`${!isCreate ? "EDIT" : "CREATE"}`} EXPERIENCE</h2>
            <Form.Group className="mb-3" controlId="Order No">
              <Form.Label>Order No</Form.Label>
              <Form.Control
                type="text"
                value={experienceOrderNo}
                onChange={onChangeOrderNo}
                placeholder="Order No"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={experienceTitle}
                onChange={onChangeTitle}
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Start">
              <Form.Label>Start</Form.Label>
              <Form.Control
                type="text"
                value={experienceStart}
                onChange={onChangeStart}
                placeholder="Start date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="End">
              <Form.Label>End</Form.Label>
              <Form.Control
                type="text"
                value={experienceEnd}
                onChange={onChangeEnd}
                placeholder="End date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={experienceDescription}
                onChange={onChangeDescription}
                placeholder="Description"
              />
            </Form.Group>
          </Form>
          <div className={classes.buttonDiv}>
            <Button onClick={onCloseHandler}>Close</Button>
            {isCreate && <Button onClick={onSaveSubmitHandler}>Save</Button>}
            {!isCreate && <Button onClick={onEditSubmitHandler}>Edit</Button>}
          </div>
        </Modal>
      )}
      <Table className={classes.table} striped bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan={7}>
              <Button onClick={onCreateHander} size="md" variant="success">
                Create Experience
              </Button>{" "}
            </th>
          </tr>
          <tr>
            <th>Title</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Description</th>
            <th>Order No</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience, key) => (
            <ExperienceItem
              key={key}
              onDelete={onDeleteHandler}
              onEdit={onEditHandler}
              experience={experience}
            />
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Experience;
