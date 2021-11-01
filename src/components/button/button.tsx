import * as React from 'react';
import classnames from 'classnames';

interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger';
  text: string;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    type = 'primary',
    text,
    onClick,
  } = props;
  const cls = classnames('button', `is-${type}`);
  return (
    <button className={cls} onClick={onClick}>{text}</button>
  );
}

export default Button;
export type {ButtonProps};
