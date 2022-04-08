import * as React from 'react';

export interface Props {
  // Dates only
  dateInteger: Date,
  dateString: Date,
  dateRest: Date,
}

export default class ClassWithDateType extends React.Component<Props> {
  // Partial -  constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
  public static defaultProps:Partial<Props> = {
    dateInteger: new Date(1468959781804),
    dateString: new Date("2022-04-05"),
    dateRest: new Date(1997, 1, 1, 1, 1, 1, 1),
  };

  public render(): JSX.Element {
    const { dateInteger, dateString, dateRest } = this.props;
    let isoInteger = dateInteger.toISOString().split('T')[0];
    let isoString = dateString.toISOString().split('T')[0];
    let isoRest = dateRest.toISOString().split('T')[0];
    return (
      <label>
        <input type="date" value="" />
        <input type="date" value="" />
        <input type="date" value="" />
      </label>
    )
    
  }
}