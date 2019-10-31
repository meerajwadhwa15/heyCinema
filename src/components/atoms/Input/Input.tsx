import React, { FunctionComponent, SyntheticEvent } from 'react';

export type Props = {
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: SyntheticEvent) => void;
};

const Input: FunctionComponent<Props> = props => <input {...props} />;

export default Input;
