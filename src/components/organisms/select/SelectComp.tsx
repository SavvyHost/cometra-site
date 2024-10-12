import React from "react";
import Select, { OptionsType, ValueType } from "react-select";

// Define the prop types
interface SelectCompProps {
  labelClassName?: string;
  label?: string;
  options: OptionsType<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean | string;
  selectedValue?: ValueType<{ value: string; label: string }>;
  name: string;
  disabled?: boolean;
  isClearable?: boolean;
  icon?: React.ReactNode;
  onChange?: (option: ValueType<{ value: string; label: string }>) => void;
  setValue: any;
}

const SelectComp: React.FC<SelectCompProps> = ({
  labelClassName = "",
  label,
  options,
  placeholder,
  required,
  selectedValue,
  name,
  disabled = false,
  isClearable = false,
  icon,
  onChange,
  setValue,
}) => {
  const handleSelectChange = (
    option: ValueType<{ value: string; label: string }>
  ) => {
    if (onChange) {
      onChange(option);
    } else {
      setValue((option as { value: string })?.value);
    }
  };

  return (
    <div>
      {label && (
        <label className={`${labelClassName} text_Dark`}>{label}</label>
      )}
      <Select
        isDisabled={disabled}
        options={options}
        placeholder={placeholder || "اختر"}
        isClearable={isClearable}
        styles={{
          control: (base) => ({
            ...base,
            border: "1px solid #ced4da",
            boxShadow: "none",
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: "all .2s ease",
            transform: state.selectProps.menuIsOpen
              ? "rotate(180deg)"
              : undefined,
          }),
          menu: (provided) => ({
            ...provided,
            // maxHeight: "200px",
            // overflowY: "scroll",
          }),
        }}
        value={selectedValue}
        onChange={handleSelectChange}
        noOptionsMessage={() => "لايوجد بيانات"}
      />
    </div>
  );
};

export default SelectComp;
