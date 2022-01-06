import PropsType from "prop-types";
import React from "react";
import { FormSelect } from "react-bootstrap";

const Select = props => {
  const { options, onChange, value, isShowPleaseChoose, name } = props;
  return (
    <FormSelect onChange={onChange} value={value} name={name}>
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
  isShowPleaseChoose: PropsType.bool,
  name: PropsType.string
};

Select.defaultProps = {
  options: [],
  value: "",
  isShowPleaseChoose: false,
  name: ""
};

export default Select;
