/**
 * TODO: Partial<any> 부분 수정 필요
 * theme.ui.button.value 에 해당컬러값을 변수로 설정
 */
export const defaultColor = ({ theme }: Partial<any>) =>
  theme.ui && theme.ui.button.value

export const defaultBorderRadius = ({ theme }: Partial<any>) =>
  theme.ui && theme.ui.button.value

export const disabledColor = ({ theme }: Partial<any>) =>
  theme.ui && theme.ui.button.value

export const type1 = {
  border: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
  bgColor: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
  color: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,

  hover: {
    border: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
    boxShadow: ({ theme }: Partial<any>) =>
      theme.ui && theme.ui.button.type1.hover.boxShadow,
    bgColor: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value
  },

  active: {
    border: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
    bgColor: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value
  }
}

export const type2 = {
  border: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
  bgColor: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
  color: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,

  hover: {
    border: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
    boxShadow: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
    bgColor: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
    color: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value
  },

  active: {
    border: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
    bgColor: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value,
    color: ({ theme }: Partial<any>) => theme.ui && theme.ui.button.value
  }
}
