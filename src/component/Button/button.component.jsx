import "./button.styles.scss";

const Button_classes = {
  inverted: "inverted",
};

export const Button = ({ children, button_type, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_classes[button_type]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
