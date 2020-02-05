import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";
import { signUp } from "../actions/index";
import axios from "axios";

const MainCont = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;
const StyledEntry = styled.label`
  color: black;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
`;

const FormDiv = styled.div`
  margin: 10px 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const H2Styled = styled.h2`
  margin-top: 20px;
`;
const H3Styled = styled.h3`
  font-size: 25px;
  margin-top: 20px;
`;
const StyledButton = styled.button`
  background-color: #235b2d;
  border: 1px solid #235b2d;
  color: white;
  width: 30%;
  margin: 30 0;
  border-radius: 20px;
`;

const NewUser = props => {
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: ""
  });
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    console.log("Register:", NewUser);
    e.preventDefault();
    axios
      .post("https://sauti-studios-bw.herokuapp.com/api/auth/register", userInfo)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err.message);
        props.history.push("/");
      });
  };

  const handleLogin = e => {
    props.history.push("/");
  };

  return (
    <div>
      <MainCont>
        <div>
          <H2Styled>Sauti Studio</H2Styled>
          <H3Styled>Create your account</H3Styled>
        </div>
        <Form onSubmit={e => handleSubmit(e)}>
          <StyledForm>
            <StyledDiv>
              <FormDiv>
                <StyledEntry>Name</StyledEntry>
                <Field
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  value={userInfo.name}
                  required
                />
              </FormDiv>
              <FormDiv>
                <StyledEntry>Password</StyledEntry>
                <Field
                  type="password"
                  name="password"
                  placeholder="●●●●●●●●"
                  onChange={handleChange}
                  value={userInfo.password}
                  required
                />
              </FormDiv>
            </StyledDiv>
            <StyledButton type="submit">Next</StyledButton>
            <button onClick={handleLogin}>Already Have An Account?</button>
          </StyledForm>
        </Form>
      </MainCont>
    </div>
  );
};

const FormikNewUser = withFormik({
  mapPropsToValues({ name, password }) {
    return {
      name: name || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must have more than 3 characters.")
      .required("Required field."),
    password: Yup.string()
      .min(3, "Password must have at least 3 characters.")
      .required("Required field.")
  })
})(NewUser);

const mapDispatchToProps = {
  signUp
};

export default connect(state => state, mapDispatchToProps)(FormikNewUser);
