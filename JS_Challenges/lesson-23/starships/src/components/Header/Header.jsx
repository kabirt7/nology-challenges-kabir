import { useRef } from "react";
import styles from "./Header.module.scss";

const Header = ({ setStarshipName }) => {
  const formRef = useRef(null);

  // const [errors, setErrors] = useState(null);

  const validateForm = (data) => {
    const errorObj = {
      username: [],
    };

    if (data.username === "") {
      errorObj.username.push("Username cannot be empty");
    }

    if (Object.values(errorObj).some((arr) => arr.length > 0)) {
      setErrors(errorObj);
      console.log(errorObj, "ERRORS");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef);
    console.log(formRef.current);
    const form = formRef.current;
    const formData = new FormData(form);
    console.log(formData);
    const dataToSendToBackend = Object.fromEntries(formData);
    console.log(dataToSendToBackend);
    const isValid = validateForm(dataToSendToBackend);

    if (isValid) {
      console.log(dataToSendToBackend.starshipName);
      console.log("form is valid, submitting");

      setStarshipName(dataToSendToBackend.starshipName);
      form.reset();
    }
  };

  return (
    <header>
      <h1>Header</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="starshipNameInput"></label>
          <input type="text" id="starshipNameInput" name="starshipName" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </header>
  );
};
export default Header;
