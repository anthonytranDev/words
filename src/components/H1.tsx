import * as React from "react"

export interface H1Props {
  compiler: string
  framework: string
}

const H1 = (props: H1Props) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
)

export default H1
