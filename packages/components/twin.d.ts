import 'twin.macro'
import { css as cssImport } from 'styled-components'
import styledImport from 'styled-components'

declare module 'twin.macro' {
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
    interface DOMAttributes<T> {
    tw?: string
    css?: any
  }
} 