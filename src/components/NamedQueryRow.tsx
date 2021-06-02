import React from 'react';

export type HandleSelectQueryFn = (
  name: string,
  query: string,
  jsonata?: string,
) => void;

type NamedQuery = {
  name: string;
  query: string;
  jsonata?: string;
};

export type HistoryQueryProps = {
  onSelect: HandleSelectQueryFn;
} & NamedQuery;

export default class HistoryQuery extends React.Component<
  HistoryQueryProps,
  { editable: boolean }
> {
  editField: HTMLInputElement | null;
  constructor(props: HistoryQueryProps) {
    super(props);
    this.state = {
      editable: false,
    };
    this.editField = null;
  }

  render() {
    const displayName = this.props.name;
    return (
      <li>
        <button className="history-label" onClick={this.handleClick.bind(this)}>
          {displayName}
        </button>
      </li>
    );
  }

  handleClick() {
    this.props.onSelect(this.props.name, this.props.query, this.props.jsonata);
  }
}
