/*Dark Mode*/
import { css } from "styled-components";
import { flexboxCenter } from "./CommonStyles";

export const settingsTitlesLayer = css`
  width: 901px;
  height: 22px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
`;

/*Edit, Cancel and Apply Buttons*/

export const ButtonWrapper1 = css`
  width: 78px;
  height: 35px;
  background: transparent
    linear-gradient(180deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
  ${flexboxCenter}
`;

export const ButtonWrapper2 = css`
  width: 68px;
  height: 25px;
  /* UI Properties */
  background: transparent
    linear-gradient(180deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
  ${flexboxCenter}
`;

/*Select Units Imperial and Metric*/

export const Wrapper = css`
  width: 286px;
  height: 218px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 16px;
  opacity: 1;
`;

export const Wrapper2 = css`
  width: 282px;
  height: 214px;
  background: transparent linear-gradient(91deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 1px 2px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerOfImperial = css`
  width: 274px;
  height: 32px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 1px solid red;
  border-radius: 16px;
  opacity: 1;
  margin-top: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* position: relative; */
`;

export const OutsideRingGreenCircle = css`
  width: 23px;
  height: 23px;
  margin-left: 3px;
  border: 1.5px solid #95ff45;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InsideFilledGreenCircle = css`
  width: 14px;
  height: 14px;
  background-color: #95ff45;
  border-radius: 50%;
`;

export const Span = css`
  margin-left: 6px;
  font-size: var(--font-size3);
`;

export const ContainerOfMeasurements = css`
  width: 274px;
  height: 158px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const MeasurementsContainer = css`
  width: 264px;
  height: 158px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  margin-left: 10px;
  margin-right: 4px;
  /* margin-top: 8px;
  margin-bottom: 8px; */
`;

export const Container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Measurements = css`
  width: 68px;
  font-size: var(--space1);
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 2px;
  padding-left: 4px;
`;

export const IndividualContainer = css`
  width: 169px;
  height: 32px;
  border: 1.5px solid #142033;
  border-radius: 16px;
  opacity: 1;
  display: flex;
  align-items: center;
  margin-left: 21px;
`;

export const MeasureUnits = css`
  font-size: var(--space2);
  margin-left: 8px;
`;

/////////////////////////////////////////

/*Light Mode*/
