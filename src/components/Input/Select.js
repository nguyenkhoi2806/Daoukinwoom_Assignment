import PropsType from "prop-types";
import React from "react";
import { FormSelect } from "react-bootstrap";

const Select = props => {
  const { options, onChange, value } = props;
  return (
    <FormSelect onChange={onChange} value={value}>
      <option>Please choose </option>
      {options.map((mode, key) => (
        <option key={`${mode}-${key}`}>{mode} </option>
      ))}
    </FormSelect>
  );
};

Select.propTypes = {
  options: PropsType.array,
  onChange: PropsType.func.isRequired,
  value: PropsType.string
};

Select.defaultProps = {
  options: [],
  value: ""
};

export default Select;
