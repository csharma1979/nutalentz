import React from 'react';

const FormTextArea = ({ 
  label, 
  id, 
  value, 
  onChange, 
  required = false,
  rows = 4,
  ...props 
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand"
        {...props}
      />
    </div>
  );
};

export default FormTextArea;