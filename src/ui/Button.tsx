import React from 'react';
import styled, { css } from 'styled-components';
import AntdButton, { ButtonProps } from 'antd/lib/button';
import { appendBaseClassName } from '../utils';

const defaultStyle = css`
  width: 140px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => (theme.ui ? theme.ui.button.value : '#d5e0e9')};
  border-radius: ${({ theme }) => (theme.ui ? theme.ui.button.value : '4px')};
  &.wh-auto {
    width: auto;
    height: auto;
  }
`;

const disabled = css`
  &:disabled {
    color: ${({ theme }) =>
      theme.ui ? theme.ui.button.value : '#d5e0e9'} !important;
    border-color: transparent !important;
    background: transparent !important;
    opacity: 0.2;
  }
`;

const StyledButton = styled(AntdButton)`
  &.sample-button {
    ${defaultStyle}
    ${disabled}
  }
  &.type1 {
    border: ${({ theme }) =>
      theme.ui ? theme.ui.button.value : '1.5px solid transparent'};
    background-color: ${({ theme }) =>
      theme.ui ? theme.ui.button.value : '#20bdbe'};
    > span {
      color: ${({ theme }) => (theme.ui ? theme.ui.button.value : '#000825')};
    }
    &:hover {
      border: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '1.5px solid #2cdbdd'};
      box-shadow: ${({ theme }) =>
        theme.ui
          ? theme.ui.button.type1.hover.boxShadow
          : '0px 0px 6px rgba(32, 189, 190, 0.5)'};
      background-color: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '#2cdbdd'};
    }
    &:active,
    &:focus {
      border: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '1.5px solid transparent'};
      background-color: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '#039494'};
    }
  }
  &.type2 {
    border: ${({ theme }) =>
      theme.ui ? theme.ui.button.value : '1.5px solid #008c8e'};
    background-color: ${({ theme }) =>
      theme.ui ? theme.ui.button.value : '#252D37'};
    > span {
      color: ${({ theme }) => (theme.ui ? theme.ui.button.value : '#20bdbe')};
    }
    &:hover {
      border: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '1.5px solid #2cdbdd'};
      box-shadow: ${({ theme }) =>
        theme.ui
          ? theme.ui.button.value
          : '0px 0px 6px rgba(32, 189, 190, 0.5)'};
      background-color: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '#2A3440'};
      > span {
        color: ${({ theme }) =>
          theme.ui ? theme.ui.button.type2.color : '#2CDBDD'};
      }
    }
    &:active,
    &:focus {
      border: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '1.5px solid #039494'};
      background-color: ${({ theme }) =>
        theme.ui ? theme.ui.button.value : '#252D37'};
      > span {
        color: ${({ theme }) => (theme.ui ? theme.ui.button.value : '#20BDBE')};
      }
    }
  }
`;

function Button({ className, children, ...rest }: ButtonProps) {
  const names = appendBaseClassName('sample-button', className);
  return (
    <StyledButton {...rest} className={names}>
      {children}
    </StyledButton>
  );
}

export default Button;
