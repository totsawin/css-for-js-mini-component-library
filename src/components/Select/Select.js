import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue);
  return (
    <Wrapper value={value} onChange={onChange}>
      <NativeSelect value={value} onChange={onChange}>
        { children }
      </NativeSelect>
      <PresentationSelect>
        { displayedValue }
        <Icon id="chevron-down" strokeWidth="2" size="16"/>
      </PresentationSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  opacity: 0;
`;

const PresentationSelect = styled.div`
  background-color: ${ COLORS.transparentGray15 };
  color: ${ COLORS.gray700 };
  padding: 12px 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  gap: 24px;
  align-items: center;
  line-height: 18.75px;
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: 2px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  };
  ${NativeSelect}:hover + & {
    color: ${ COLORS.black };
  }
`;

export default Select;
