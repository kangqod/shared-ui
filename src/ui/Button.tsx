import React from 'react'
import styled, { css } from 'styled-components'
import AntdButton, { ButtonProps } from 'antd/lib/button'
import { appendBaseClassName } from '../utils'
import * as S from '../styles/button'

const defaultStyle = css`
  width: 140px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  cursor: pointer;
  color: ${(props) => S.defaultColor(props) ?? '#d5e0e9'};
  border-radius: ${(props) => S.defaultBorderRadius(props) ?? '4px'};
  &.wh-auto {
    width: auto;
    height: auto;
  }
`

const disabled = css`
  &:disabled {
    color: ${(props) => S.disabledColor(props) ?? '#d5e0e9 !important'};
    border-color: transparent !important;
    background: transparent !important;
    opacity: 0.2;
  }
`

const StyledButton = styled(AntdButton)`
  &.sample-button {
    ${defaultStyle}
    ${disabled}
  }
  &.type1 {
    border: ${(props) => S.type1.border(props) ?? '1.5px solid transparent'};
    background-color: ${(props) => S.type1.bgColor(props) ?? '#20bdbe'};
    > span {
      color: ${(props) => S.type1.color(props) ?? '#000825'};
    }
    &:hover {
      border: ${(props) =>
        S.type1.hover.border(props) ?? '1.5px solid #2cdbdd'};
      box-shadow: ${(props) =>
        S.type1.hover.boxShadow(props) ??
        '0px 0px 6px rgba(32, 189, 190, 0.5)'};
      background-color: ${(props) => S.type1.hover.bgColor(props) ?? '#2cdbdd'};
    }
    &:active,
    &:focus {
      border: ${(props) =>
        S.type1.active.border(props) ?? '1.5px solid transparent'};
      background-color: ${(props) =>
        S.type1.active.bgColor(props) ?? '#039494'};
      }
    }
  }
  &.type2 {
    border: ${(props) => S.type2.border(props) ?? '1.5px solid #008c8e'};
    background-color: ${(props) => S.type2.bgColor(props) ?? '#252D37'};
    > span {
      color: ${(props) => S.type2.color(props) ?? '#20bdbe'};
    }
    &:hover {
      border: ${(props) =>
        S.type2.hover.border(props) ?? '1.5px solid #2cdbdd'};
      box-shadow: ${(props) =>
        S.type2.hover.boxShadow(props) ??
        '0px 0px 6px rgba(32, 189, 190, 0.5)'};
      background-color: ${(props) => S.type2.hover.bgColor(props) ?? '#2A3440'};
      > span {
        color: ${(props) => S.type2.hover.color(props) ?? '#2CDBDD'};
      }
    }
    &:active,
    &:focus {
      border: ${(props) =>
        S.type2.active.border(props) ?? '1.5px solid #039494'};
      background-color: ${(props) =>
        S.type2.active.bgColor(props) ?? '#252D37'};
      > span {
        color: ${(props) => S.type2.active.color(props) ?? '#20BDBE'};
      }
    }
  }
`

function Button({ className, children, ...rest }: ButtonProps) {
  const names = appendBaseClassName('sample-button', className)
  return (
    <StyledButton {...rest} className={names}>
      {children}
    </StyledButton>
  )
}

export default Button
