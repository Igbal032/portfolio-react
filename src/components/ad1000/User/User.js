import { Fragment, useState } from "react";
import { Button, Form,  Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editUser, saveUser } from '../../../store/user-action'
import Modal from "../../../UI/Modal";
import classes from "./User.module.css";

const User = () => {

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isSaveAndEditModalActive, setIsSaveAndEditModalActive] = useState(false);
  const [isCreate, setIsCreate] = useState();
  //form inputs
  const [id, setId] = useState(0)
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthday] = useState("");
  const [about, setAbout] = useState("");
  const [professinal, setProfessinal] = useState("");
  const [phone, setPhone] = useState("");
  const [conatctContent, setConatctContent] = useState("");
  const [cvName, setCvName] = useState("");
  const [cv, setCv] = useState();

  
  const onCloseHandler = ()=>{
    setIsSaveAndEditModalActive(false)
  }

  const onEditSubmitHandler = (event) => {
    
    const editedUser = {
      id: id,
      name: name,
      surname: surname,
      birthDay: birthDay,
      about: about,
      professinal: professinal,
      phone: phone,
      email: email,
      contactContent: conatctContent,
      cv: cv
    }
    dispatch(editUser(editedUser))
    setIsSaveAndEditModalActive(false)
  }

  const onCreateSubmitHandler = () => {
    setId(0)
    const newUser = {
      name: name,
      surname: surname,
      birthDay: birthDay,
      about: about,
      professinal: professinal,
      phone: phone,
      email: email,
      contactContent: conatctContent,
      cv: cv
    }
    dispatch(saveUser(newUser))
    setIsSaveAndEditModalActive(false)
  }

  const onEditHandler = (event) => {
    setId(event.target.id)
    if (event.target.id!=='') {
      setIsCreate(false)
    }
    else{
      setId(0)
      setIsCreate(true)
    }
    setIsSaveAndEditModalActive(true)
    if (!isCreate) {
      setName(user.name);
      setSurName(user.surname);
      setBirthday(user.birthDay);
      setAbout(user.about);
      setProfessinal(user.professinal);
      setPhone(user.phone);
      setEmail(user.email);
      setConatctContent(user.contactContent);
      setCvName(user.cv);
      setIsSaveAndEditModalActive(true);
    }
  };

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeSurname = (event) => {
    setSurName(event.target.value)
  }

  const onChangeBirthDay = (event) => {
    setBirthday(event.target.value)
  }

  const onChangeAbout = (event) => {
    setAbout(event.target.value)
  }
  const onChangeProfessinal = (event) => {
    setProfessinal(event.target.value)
  }

  const onChangePhone = (event) => {
    setPhone(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangeConatctContent = (event) => {
    setConatctContent(event.target.value)
  }

  const onChangeResume = (event) => {
    setCv(event.target.files[0])
  }

  return (
    <Fragment>
      {user.name}
      {isSaveAndEditModalActive && (
        <Modal className={classes.modal} onClose={onCloseHandler}>
          <Form>
            <h2>{`${!isCreate ? "EDIT USER" : "CREATE USER"}`}</h2>
            <Form.Group className="mb-3" controlId="First Name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={onChangeName}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Last Name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={surname}
                onChange={onChangeSurname}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Birthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="text"
                value={birthDay}
                onChange={onChangeBirthDay}
                placeholder="Birthday"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="About">
              <Form.Label>About</Form.Label>
              <Form.Control
                type="text"
                value={about}
                onChange={onChangeAbout}
                placeholder="About"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Professinal">
              <Form.Label>Professinal</Form.Label>
              <Form.Control
                type="text"
                value={professinal}
                onChange={onChangeProfessinal}
                placeholder="Professinal"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={onChangePhone}
                placeholder="Phone"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={onChangeEmail}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Conatct Content">
              <Form.Label>Conatct Content</Form.Label>
              <Form.Control
                type="text"
                value={conatctContent}
                onChange={onChangeConatctContent}
                placeholder="Conatct Content"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Resume">
              <Form.Label>Resume</Form.Label>
              <p>{cvName}</p>
              <Form.Control
                type="file"
                name="cv"
                // value={conatctContent}
                onChange={onChangeResume}
                placeholder="Upload Resume"
              />
            </Form.Group>
            
          <div className={classes.buttonDiv}>
            <Button onClick={onCloseHandler}>Close</Button>
            {isCreate && <Button onClick={onCreateSubmitHandler}>Create</Button>}
            {!isCreate && <Button id={id} onClick={onEditSubmitHandler}>Edit</Button>}
          </div>
          </Form>
        </Modal>
      )}
      <Table className={classes.table} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Birthday</th>
            <th>About</th>
            <th>Professinal</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Conatct content</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{user.name}</th>
            <th>{user.surname}</th>
            <th>{user.birthDay}</th>
            <th>{user.about}</th>
            <th>{user.professinal}</th>
            <th>{user.phone}</th>
            <th>{user.email}</th>
            <th>{user.contactContent}</th>
            <th>
              <Button
                onClick={onEditHandler}
                id={user._id}
                size="sm"
                variant="warning"
              >
                EDIT
              </Button>{" "}
            </th>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default User;
