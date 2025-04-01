import type { HTMLAttributes } from 'vue'

export interface ButtonProps extends /* @vue-ignore */ HTMLAttributes {
  label?: string,
  variant?: 'primary' | 'secondary' | 'ghost',
  size?: 'sm' | 'md' | 'lg',
  icon?: string,
}
