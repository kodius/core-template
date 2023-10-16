import type { PropsWithChildren } from "react";

export const TestComponent = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex justify-center items-center ui-bg-red-500">{children}</div>
  );
};
