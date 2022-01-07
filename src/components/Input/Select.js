import PropsType from "prop-types";
import React from "react";
import { FormSelect } from "react-bootstrap";

const Select = props => {
  const {
    options,
    onChange,
    value,
    isShowPleaseChoose,
    name,
    pleaseChooseText
  } = props;
  return (
    <FormSelect onChange={onChange} value={value} name={name}>
      {isShowPleaseChoose && <option> {pleaseChooseText} </option>}
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
  name: PropsType.string,
  pleaseChooseText: PropsType.string
};

Select.defaultProps = {
  options: [],
  value: "",
  isShowPleaseChoose: true,
  name: "",
  pleaseChooseText: "Please Choose"
};

export default Select;
