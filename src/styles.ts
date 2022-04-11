import { css } from "styled-components";

import "./styles.css";

export const ToolBarHeight = "64px";

export const cleanScrollBar = css`
  scrollbar-color: #FFFFFF transparent;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    min-height: 40px;
    background: #e1f5fe;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #afc2cb;
  }
`;

export const cleanScrollBarWithWhiteBorder = css`
  ${cleanScrollBar}
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid #EDFDFF;
  }
`;

export const unSelectable = css`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`;
