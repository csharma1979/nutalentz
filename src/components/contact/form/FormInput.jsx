import React from 'react';

const FormInput = ({ 
  label, 
  id, 
  type = 'text', 
  value, 
  onChange, 
  required = false, 
  pattern, 
  title,
  ...props 
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        title={title}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand"
        {...props}
      />
    </div>
  );
};

export default FormInput;