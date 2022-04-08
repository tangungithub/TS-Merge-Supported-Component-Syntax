import * as React from 'react';

type TableData = string | number | React.ReactNode;

interface Props {
  // In Merge props panel [[12], [23]}
  rows: TableData[][],
}

export default class ClassWithTwoDimensionalArray extends React.Component<Props> {
  public render():JSX.Element {
    const { rows } = this.props;
    return (
      <div>
        <button>
          {rows}
        </button>
      </div>
    );
  }
}
