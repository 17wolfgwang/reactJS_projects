import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const getResponse = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    getResponse().catch(console.error);
  }, []);

  const logGoogleUser = async () => {
    // Result of signInWithGooglePopup() -> Object UserCredentialImpl{}. inside of UserCredentialImpl, there is a user on key name.
    // So UserCredentialImpl.user will be user info, and it pass to createUserDocumentFromAuth by 'userAuth'
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirct
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
