/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let style = {
    'small': {
      '--height': '8px',
      '--padding': '0px',
      '--radius': '4px'
    },
    'medium': {
      '--height': '12px',
      '--padding': '0px',
      '--radius': '4px'
    },
    'large': {
      '--height': '24px',
      '--padding': '4px',
      '--radius': '8px'
    }
  }
  return (
    <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={style[size]}>
      <BarWrapper>
        <Bar value={value > 100 ? 100: value}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => p.value === 100 ? '4px': '0px'};
  border-bottom-right-radius: ${p => p.value === 100 ? '4px': '0px'};
`;

export default ProgressBar;
