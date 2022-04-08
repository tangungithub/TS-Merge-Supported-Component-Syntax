import * as React from 'react';

interface SubItem {
  name: string;
}

interface Item {
  param1: string;
  param2?: string;
  param3: SubItem;
}

export interface Props {
  item: Item;
}

export function labelID(item:Item):string {
  return `${item.param1} Label`;
}

export default class ClassInterfaceTypes extends React.Component<Props> {

  public render():JSX.Element {
    const { item } = this.props;
    return (
      <div>
        <button id={labelID(item)}>
          {item.param3.name}
        </button>
      </div>
    );
  }
}