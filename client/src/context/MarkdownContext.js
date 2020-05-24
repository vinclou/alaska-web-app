import {createContext} from 'react';

function noop() {}

export const MarkdownContext = createContext ({
    path1: null,
    path2: null,
    path3: null
});