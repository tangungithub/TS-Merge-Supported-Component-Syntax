import * as React from 'react';
import { ExternalShape, NestedShape } from '../_Externals/ExternalShapeType';

export function labelID(item:NestedShape):string {
  return `${item.keyA} Label`
} 

interface Props {
  // Local property
  id: string;
}

type CombinedType = ExternalShape & Props;

export default class ClassWithCombinedAndImportedPropertiesType extends React.PureComponent<CombinedType> {
  
  public render(): JSX.Element {
    const { nested } = this.props;
    return (
      <div>
        <button id={labelID(nested)}>
          {nested.keyB}
        </button>
      </div>
    )
  }
}
