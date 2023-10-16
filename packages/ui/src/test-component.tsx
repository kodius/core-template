import type { PropsWithChildren } from "react";

export const TestComponent = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="ui-flex ui-justify-center ui-items-center">{children}</div>
  );
};
