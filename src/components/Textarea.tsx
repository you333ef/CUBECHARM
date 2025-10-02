import React, { forwardRef } from "react";

interface TextareaProps {
  label?: string;
  rows: number;
  placeholder?: string;
  name: string;
  className: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (e: any) => void;
  error?: string;  // Add error prop for validation messages
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, rows, placeholder, name, className, value, readOnly, onChange, error, ...rest }, ref) => {
    return (
      <div className="col-span-4 w-full">
        {label && <label htmlFor={name} className="block mb-1 text-sm text-gray-600">{label}</label>}

        <textarea
          rows={rows}
          placeholder={placeholder}
          name={name}
          className={`${className} border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
          value={value}
          readOnly={readOnly}
          onChange={onChange}
          ref={ref}
          {...rest}
        />

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default Textarea;
