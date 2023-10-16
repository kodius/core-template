import { Button, TestComponent } from "ui";

export default function Page(): JSX.Element {
  return (
    <TestComponent>
      <div className="text-blue-500">Next 1</div>
      <Button>Button</Button>
    </TestComponent>
  );
}
