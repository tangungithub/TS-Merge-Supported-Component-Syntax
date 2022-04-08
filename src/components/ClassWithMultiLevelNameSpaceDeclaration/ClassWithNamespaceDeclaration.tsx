import * as React from 'react';

// NOTE
// Without creating the Namespace component this file will not work in Merge as it is not complete
// It has been commented out in the uxpin.config.js file for this reason
// This is purely a syntax demonstration

export interface Props {
  name:string;
}

// Below demonstrates the syntax for a single level namespace component
/**
 * @uxpinnamespace Namespace
 */
// export default class ClassWithNamespaceDeclaration extends React.Component<Props> {

//   public render():JSX.Element {
//     const { name } = this.props;
//     return (
//       <div>
//         <button id={name}>
//           {name}
//         </button>
//       </div>
//     );
//   }
// }

// Below demonstrates the syntax for a multi level namespace component
/**
 * @uxpinnamespace Some.Nested.Namespace
 */
// export default class ClassWithMultilevelNamespaceDeclaration extends React.Component<Props> {
//   public render():JSX.Element {
//     return (
//       <div>
//         <button id={name}>
//           {name}
//         </button>
//       </div>
//     );
//   }
// }
