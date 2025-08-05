import React from "react";

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2> Se está ocupando el ClientLayout </h2>
      {children}
    </div>
  );
}
