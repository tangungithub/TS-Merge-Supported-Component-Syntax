import * as React from 'react';
import { ExternalShape } from '../_Externals/ExternalShapeType';

const externalShapeType: ExternalShape = {
  name: 'someName',
  value: 1,
  nested: {
    keyA: 'keyA',
    keyB: 'keyB',
  },
};

const someValue: number = 5;

interface Props {
  typeOfProp: typeof someValue;
  keyOfProp: keyof ExternalShape;
  keyOfTypeOfProp: keyof typeof externalShapeType;
}

export default class ClassWithKeyOfTypeOfOperatorInType extends React.Component<Props> {
  public render():JSX.Element {
    const { typeOfProp, keyOfProp, keyOfTypeOfProp } = this.props;
    return (
        <div>
          <button>
            {typeOfProp} {keyOfProp} {keyOfTypeOfProp}
          </button>
        </div>
    );
  }
}