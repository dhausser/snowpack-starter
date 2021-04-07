import * as React from 'react'

type OperationFn = (left: number, right: number) => number
type Operator = '+' | '-' | '*' | '/'
const operations: Record<Operator, OperationFn> = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
}

interface CalculatorProps {
  left: number
  operator: keyof typeof operations
  right: number
}

function Calculator({ left, operator, right }: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}

export { Calculator }
