import { TestComponent } from "ui"

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="opactiy-0 flex text-red-500">tw local</div>
      <TestComponent>hi</TestComponent>
    </div>
  )
}
