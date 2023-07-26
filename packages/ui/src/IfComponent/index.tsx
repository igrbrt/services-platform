import React, { type ReactNode } from "react";

interface IFProps {
  condition: boolean;
  children: ReactNode;
}

export default function If({ condition, children }: IFProps): JSX.Element {
  if (!condition) {
    return <></>;
  }

  return <>{children}</>;
}
