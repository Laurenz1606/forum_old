import React from "react";

//the props for the inputLabelRequired component
type InputLabelRequiredComponentProps = {
  //add props here
};

//the inputLabelRequired component
export default function InputLabelRequiredComponent({}: InputLabelRequiredComponentProps) {
  return (
    <sup className="text-danger">*</sup>
  );
}
