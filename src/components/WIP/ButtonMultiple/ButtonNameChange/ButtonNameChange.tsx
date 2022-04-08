import React from "react";
// import styled from "styled-components";

// interface ButtonProps {
//   children: string;
//   disabled: boolean;
//   onClick(): void;
// }

// const Button = ({children = "gello", ...props}) => {
//   return (
//     <button {...props}>
//       {children}
//     </button>
//   );
// };

// // const StyledComponent = styled.button`
// //   color: red;
// // `;
// const NewButton = Button

// export default NewButton;

// const Button: React.VFC<ButtonProps> = ({children = "gello", ...props}) => {
//   return (
//     <button {...props}>
//       {children}
//     </button>
//   );
// };


// const StyledComponent = styled(Button)`
//   color: red;
// `;

// export default StyledComponent;


interface Props {
  children: string;
  disabled: boolean;
  onClick(): void;
}

const Button = ({children = "gello"}:Props) => {
  return (
    <button>
      {children}
    </button>
  );
};

const NewButton = Button

export default NewButton;