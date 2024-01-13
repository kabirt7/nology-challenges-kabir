import "../../index.scss";

const Button = ({ btnClick, children }) => {
  return <button onClick={btnClick}>{children}</button>;
};

export default Button;
