import type * as CM from 'codemirror';
import React from 'react';
declare type JsonataEditorProps = {
    value?: string;
    onEdit: (value: string) => void;
    readOnly?: boolean;
    onHintInformationRender: (value: HTMLDivElement) => void;
    onPrettifyQuery: (value?: string) => void;
    onMergeQuery: (value?: string) => void;
    onRunQuery: (value?: string) => void;
    editorTheme?: string;
    active?: boolean;
};
export declare class JsonataEditor extends React.Component<JsonataEditorProps> {
    CodeMirror: any;
    editor: (CM.Editor & {
        options: any;
        showHint: any;
    }) | null;
    cachedValue: string;
    private _node;
    ignoreChangeEvent: boolean;
    constructor(props: JsonataEditorProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: JsonataEditorProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    getCodeMirror(): CM.Editor;
    getClientHeight(): number | null;
    private _onKeyUp;
    private _onEdit;
    private _onHasCompletion;
}
export {};
//# sourceMappingURL=JsonataEditor.d.ts.map