import PropsType from "prop-types";
import React from "react";
import { FormSelect } from "react-bootstrap";

const Select = props => {
  const { options, onChange, value, isShowPleaseChoose } = props;
  return (
    <FormSelect onChange={onChange} value={value}>
      {isShowPleaseChoose && <option>Please choose </option>}
      {options.map((mode, key) => (
        <option key={`${mode}-${key}`}>{mode} </option>
      ))}
    </FormSelect>
  );
};

Select.propTypes = {
  options: PropsType.array,
  onChange: PropsType.func.isRequired,
  value: PropsType.string,
  isShowPleaseChoose: PropsType.bool
};

Select.defaultProps = {
  options: [],
  value: "",
  isShowPleaseChoose: false
};

export default Select;
