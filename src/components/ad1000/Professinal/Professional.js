import { Fragment, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../UI/Modal";
import classes from "./Professinal.module.css";
import ProfessionalItem from "./ProfessionalItem";
import { saveSkill, editSkill, deleteSkill } from "../../../store/skill-action";


const Professinal = () => {
  const dispatch = useDispatch();

  const [isSaveAndEditModalActive, setIsSaveAndEditModalActive] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  //form inputs
  const [skillId, setSkillId] = useState();
  const [orderNo, setOrderNo] = useState(0);
  const [skillName, setSkillName] = useState("");
  const [skillPersentage, setSkillPersentage] = useState(0);

  const skills = useSelector((state) => state.skill.skills);

  const onCreateHander = () => {
    setOrderNo();
    setSkillName('');
    setSkillPersentage('');
    setIsCreate(true);
    setIsSaveAndEditModalActive(true);
  };

  const onEditHandler = async (event) => {
    setIsCreate(false);
    const skillId = event.target.id;
    const faundSkill = await skills.filter((skill) => skill._id === skillId);
    setSkillId(faundSkill[0]._id)
    setOrderNo(faundSkill[0].orderNo);
    setSkillName(faundSkill[0].skillName);
    setSkillPersentage(faundSkill[0].skillPercentage);
    setIsSaveAndEditModalActive(true);
  };

  const onCloseHandler = () => {
    setIsSaveAndEditModalActive(false);
  };

  const onChangeOrderNo = (event) => {
    setOrderNo(event.target.value);
  };

  const onChangeName = (event) => {
    setSkillName(event.target.value);
  };

  const onChangePersentage = (event) => {
    setSkillPersentage(event.target.value);
  };

  const onEditSubmitHandler = () => {
    const skill = {
      id: skillId,
      orderNo: orderNo,
      name: skillName,
      persentage: skillPersentage
    }
    dispatch(editSkill(skill))
    setIsSaveAndEditModalActive(false)
    setOrderNo();
    setSkillName('');
    setSkillPersentage('');
  };
  const onSaveSubmitHandler = () => {
    const skill = {
      orderNo: orderNo,
      name: skillName,
      persentage: skillPersentage
    }
    dispatch(saveSkill(skill))
    setIsSaveAndEditModalActive(false)
    setOrderNo();
    setSkillName('');
    setSkillPersentage('');
  };

  const onDeleteHandler = (event) => {
    const skill = {
      id: event.target.id
    }
    dispatch(deleteSkill(skill))
    console.log();
  };

  return (
    <Fragment>
      {isSaveAndEditModalActive && (
        <Modal onClose={onCloseHandler}>
          <Form>
            <h2>{`${!isCreate ? "EDIT SKILL" : "CREATE SKILL"}`}</h2>
            <Form.Group className="mb-3" controlId="Order No">
              <Form.Label>Order No</Form.Label>
              <Form.Control
                type="text"
                value={orderNo}
                onChange={onChangeOrderNo}
                placeholder="Order No"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Skill Name">
              <Form.Label>Skill Name</Form.Label>
              <Form.Control
                type="text"
                value={skillName}
                onChange={onChangeName}
                placeholder="Skill Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Skill Persentage">
              <Form.Label>Skill Persentage</Form.Label>
              <Form.Control
                type="text"
                value={skillPersentage}
                onChange={onChangePersentage}
                placeholder="Persentage"
              />
            </Form.Group>
          </Form>
          <div className={classes.buttonDiv}>
            <Button onClick={onCloseHandler}>Close</Button>
            {isCreate && <Button onClick={onSaveSubmitHandler}>Create</Button>}
            {!isCreate && <Button onClick={onEditSubmitHandler}>Edit</Button>}
          </div>
        </Modal>
      )}
      <Table className={classes.table} striped bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan={7}>
              <Button onClick={onCreateHander} size="md" variant="success">
                Create Skill
              </Button>{" "}
            </th>
          </tr>
          <tr>
            <th>Skill Name</th>
            <th>Skill Persentage</th>
            <th>Order No</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((professional, key) => (
            <ProfessionalItem
              key={key}
              onDelete={onDeleteHandler}
              onEdit={onEditHandler}
              professional={professional}
            />
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Professinal;
