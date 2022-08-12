import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    gap: 8,
    pading: 4,
    border: 1
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    gap: 12,
    pading: 6,
    border: 2
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const style = STYLES[size];

  return (
    <Wrapper style={{
      '--width': width + 'px',
      '--gap': style.gap + 'px',
      '--font-size': style.fontSize + 'px',
      '--padding': style.pading + 'px',
      '--border': style.border + 'px'
    }} 
      for={label}
    >
      <VisuallyHidden>
        { label }
      </VisuallyHidden>
      <Icon id={icon} size={ style.iconSize } />
      <Input type="text" id={label} placeholder={placeholder}></Input>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  width: var(--width);
  display: flex;
  align-items: center;
  gap: var(--gap);
  font-size: var(--font-size);
  padding-bottom: var(--padding);
  border-bottom: var(--border) solid ${ COLORS.black };
  color: ${COLORS.gray700}; 
  &:hover {
    color: ${ COLORS.black }
  }
  &:focus-within {
    outline: 2px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: inherit;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  color: ${COLORS.gray700};
  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  ${Wrapper}:hover & {
    color: ${ COLORS.black }
  }
`;

export default IconInput;
