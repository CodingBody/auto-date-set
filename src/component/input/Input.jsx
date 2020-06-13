import React from "react";
import PropTypes from "prop-types";

const Input = ({ input, handlePaste }) => {
  return (
    <div>
      <textarea
        multiple
        value={input}
        cols="100"
        rows="40"
        onChange={(e) => handlePaste(e)}
      />
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.string.isRequired,
  handlePaste: PropTypes.func.isRequired,
};

export default Input;
