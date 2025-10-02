import React, { forwardRef } from "react";

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  name: string;
  className: string;
  value?: string;
  multiple?: boolean
  readOnly?: boolean;
  accept?: string
  onChange?: (e: any) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type,
      placeholder,
      name,
      className,
      value,
      readOnly,
      onChange,
      multiple,
      accept,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="col-span-10 w-full">
        {label && (
          <label htmlFor={name} className="block mb-1 text-sm text-gray-600">
            {label}
          </label>
        )}

        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={className}
          value={value}
          readOnly={readOnly}
          onChange={onChange}
          ref={ref}
          multiple
          accept={accept}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
