import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    // Result of signInWithGooglePopup() -> Object UserCredentialImpl{}. inside of UserCredentialImpl, there is a user on key name.
    // So UserCredentialImpl.user will be user info, and it pass to createUserDocumentFromAuth by 'userAuth'
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
