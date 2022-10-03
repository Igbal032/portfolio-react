import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useInput from "../../../../hooks/use-input";
import Swal from "sweetalert2";
import classes from "./Contact.module.css";
import {createMessage } from "../../../../store/message-action";
const Contact = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  
  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailonChangehandler,
    inputBlurHandler: emailOnBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameonChangehandler,
    inputBlurHandler: nameOnBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhone,
    valueIsValid: phoneIsValid,
    hasError: phoneHasError,
    inputChangeHandler: phoneOnChangehandler,
    inputBlurHandler: phoneOnBlurHandler,
    reset: phoneReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    valueIsValid: messageIsValid,
    hasError: messageHasError,
    inputChangeHandler: messageOnChangehandler,
    inputBlurHandler: messsageOnBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid && phoneIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formOnSubmit = (event) => {
    event.preventDefault();
    if (nameHasError || emailHasError || phoneHasError || messageHasError) {
      return;
    }
    const message = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      content: enteredMessage,
    };
    dispatch(createMessage(message));
    Swal.fire({
      title: "Message was sent successfully",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "success",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("SUCCESS", "", "success");
      } else Swal.fire(" Cancelled", "", "error");
    });
    nameReset();
    phoneReset();
    emailReset();
    messageReset();
  };

  return (
    <div className={classes.contactDiv} id="#contact"  ref={props.refer}>
      <Container fluid={true} className={classes.contactSection}>
        <Row className={classes.contactRow}>
          <Col lg={6} md={6} xs={11} className={classes.contactCol}>
            <Container fluid={true}>
              <Row>
                <Col lg={6} md={6} xs={12} className={classes.contactInfoCol}>
                  <div className={classes.contactInfo}>
                    <h3>CONTACT</h3>
                    <p className={classes.about}>{user.contactContent}</p>
                    <p>{user.email}</p>
                    <span>Tel: </span>
                    {user.phone}
                  </div>
                </Col>
                <Col lg={6} md={6} xs={12} className={classes.formInputs}>
                  <Form onSubmit={formOnSubmit}>
                    <Container fluid={true}>
                      <Row>
                        <Col lg={6} md={12} xs={12}>
                          <Form.Group className="mb-3">
                            <Form.Control
                              onChange={nameonChangehandler}
                              onBlur={nameOnBlurHandler}
                              value={enteredName}
                              className={classes.input}
                              type="text"
                              placeholder="Name"
                            />
                            {nameHasError && (
                              <p className={classes["error-text"]}>
                                Name must not be empty.
                              </p>
                            )}
                          </Form.Group>
                        </Col>
                        <Col lg={6} md={12} xs={12}>
                          <Form.Group className="mb-3">
                            <Form.Control
                              className={classes.input}
                              type="text"
                              placeholder="Email"
                              value={enteredEmail}
                              onChange={emailonChangehandler}
                              onBlur={emailOnBlurHandler}
                            />

                            {emailHasError && (
                              <p className={classes["error-text"]}>
                                Coreect Email must be entered.
                              </p>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} md={12} xs={12}>
                          <Form.Group className="mb-3">
                            <Form.Control
                              className={classes.input}
                              type="text"
                              placeholder="Phone"
                              value={enteredPhone}
                              onChange={phoneOnChangehandler}
                              onBlur={phoneOnBlurHandler}
                            />
                            {phoneHasError && (
                              <p className={classes["error-text"]}>
                                Phone must not be empty.
                              </p>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} md={12} xs={12}>
                          <Form.Group className="mb-3">
                            <input
                              className={classes.messageInput}
                              onChange={messageOnChangehandler}
                              onBlur={messsageOnBlurHandler}
                              value={enteredMessage}
                              placeholder="Message"
                            />
                            {messageHasError && (
                              <p className={classes["error-text"]}>
                                Message must not be empty.
                              </p>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} md={12} xs={12}>
                          <Form.Group className="mb-3">
                            <Button
                              className={classes.sendButton}
                              variant="primary"
                              type="submit"
                              disabled={!formIsValid}
                            >
                              SEND MESSAGE
                            </Button>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
          <div></div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
