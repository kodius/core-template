import type { PropsWithChildren } from "react";

export const TestComponent = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex justify-center items-center">{children}</div>
  );
};
