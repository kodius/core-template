import type { PropsWithChildren } from "react"

import { Button } from "./components/ui/button"

export const TestComponent = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex items-center justify-center bg-blue-400">
      <Button>{children}</Button>
    </div>
  )
}
