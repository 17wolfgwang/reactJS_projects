import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInAuthUserWithEmailAndPassword,
// } from "../../utils/firebase/firebase.utils";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart());
    // await signInWithGooglePopup();
    // setCurrentUser(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/wrong-password") {
        alert("wrong password!");
      }
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
