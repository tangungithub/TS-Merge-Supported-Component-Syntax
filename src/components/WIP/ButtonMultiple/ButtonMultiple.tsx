import * as React from "react";

// NOTE
// This currently isn't supported but is in the pipeline
// But has an unknown dev start date

interface IButtonWrapper {
  className?: string;
  children: React.ReactNode;
}

export const ButtonWrapper = ({ className, children }: IButtonWrapper) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

interface Props {
  type?: "button" | "submit";
  disabled?: boolean;
  children: string;
  onClick(): void;
}

const MultipleExportComponentOne = ({children = "gello", type = "button"}:Props) => {
  return (
    <button type={type}>
      {children}
    </button>
  );
};

export default MultipleExportComponentOne

