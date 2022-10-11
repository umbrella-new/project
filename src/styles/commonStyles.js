import { css } from 'styled-components';

export const flexboxCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const layer1 = css`
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
`;

export const layer90Deg = css`
  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);
  border-radius: 37px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

export const activeLayer1 = css`
  background: transparent
    linear-gradient(180deg, #4baf00 0%, var(--unnamed-color-124000) 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #4baf00 0%, #124000 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;

  /* border: 0.5px solid #000000; */

  opacity: 1;
`;
export const activeLayer2 = css``;

export const activeInput = css`
  background: #124000 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  opacity: 1;
`;

export const marginBottom = css`
  margin-bottom: 5px;
`;

export const ssrHole = css`
  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  opacity: 1;
`;

export const ssrOn = css`
  background: transparent linear-gradient(180deg, #4baf00 0%, #124000 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
`;

export const ssrOff = css`
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;

  opacity: 1;
`;

export const ControllerDisabledBackground = css`
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(90deg, #565656 0%, #1d1d1d 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px;
  opacity: 1;
`;

export const ControllerEnabledBackground = css`
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px;
  opacity: 1;

  background-image: -webkit-linear-gradient(
    180deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

export const DisableApplyButtonBG = css`
  background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  opacity: 1;
`;

export const DisableApplyButtonHole = css`
  background: #3b3b3b 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  opacity: 1;
`;

export const ItemBackground = css`
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
`;

export const ItemBackgroundDisable = css`
  background: var(--unnamed-color-3b3b3b) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px var(--unnamed-color-000000);
  background: #3b3b3b 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  opacity: 1;
  border-radius: 12px;
`;

export const ButtonReady = css`
  background: transparent linear-gradient(180deg, #1e7fc1 0%, #001640 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  opacity: 1;
`;
