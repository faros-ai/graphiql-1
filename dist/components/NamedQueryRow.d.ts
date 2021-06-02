import React from 'react';
export declare type HandleSelectQueryFn = (name: string, query: string, jsonata?: string) => void;
declare type NamedQuery = {
    name: string;
    query: string;
    jsonata?: string;
};
export declare type HistoryQueryProps = {
    onSelect: HandleSelectQueryFn;
} & NamedQuery;
export default class HistoryQuery extends React.Component<HistoryQueryProps, {
    editable: boolean;
}> {
    editField: HTMLInputElement | null;
    constructor(props: HistoryQueryProps);
    render(): JSX.Element;
    handleClick(): void;
}
export {};
//# sourceMappingURL=NamedQueryRow.d.ts.map