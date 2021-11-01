import * as React from 'react';

interface InputProps {
  value?: string;
  onChange?: (val: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    value,
    onChange,
  } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  return (
    <input ref={ref} value={value} onChange={handleChange} />
  );
});

export default Input;
export type {InputProps};
