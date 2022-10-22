import type { KeyboardEvent } from 'react'
import { regExpression } from '../../constants'

export const blockInvalidChar = (event: KeyboardEvent<HTMLInputElement>) => {
  const validator = event.key === 'Enter' || !regExpression.test(event.key)
  return validator && event.preventDefault();
}