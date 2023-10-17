import { TestComponent } from "ui"

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="text-red-500">tw local</div>
      <TestComponent>hi</TestComponent>
    </div>
  )
}
