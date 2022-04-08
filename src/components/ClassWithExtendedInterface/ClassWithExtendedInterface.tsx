import * as React from 'react';

interface Action {
  actionType: string;
}

interface DisableAction extends Action {
  disabled: boolean;
}

interface IconAction {
  iconType: string;
  size: number;
}

interface ExtendedInterface extends IconAction, DisableAction {
  helpText: string;
  image: string;
}

export default class ClassWithExtendedInterface extends React.Component<ExtendedInterface> {

  public static defaultProps:Partial<ExtendedInterface> = {
    helpText: "ClassWithExtendedInterface",
  }

  public render(): JSX.Element {
    const { helpText, disabled } = this.props;
    return (
      <div>
        <button disabled={disabled}>
          {helpText}
        </button>
      </div>
    )
  }
}