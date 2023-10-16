import type { PropsWithChildren } from "react";
import { Button } from "./components/ui/button";

export const TestComponent = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex justify-center items-center ui-bg-red-500">
      <Button>{children}</Button>
    </div>
  );
};
