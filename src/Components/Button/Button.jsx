import PropTypes from "prop-types";

import { Btn, SpanAnimateBtn } from "./ButtonStyle";

function Button({ children, onClick, $primary, $hasMarginTop }) {
  return (
    <Btn onClick={onClick} $primary={$primary} $hasMarginTop={$hasMarginTop}>
      {children} <SpanAnimateBtn $primary={$primary} />
    </Btn>
  );
}

Button.propTypes = {
  $primary: PropTypes.bool,
  $hasMarginTop: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
