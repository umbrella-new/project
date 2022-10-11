import styled from "styled-components";

const DisplayBox = ({ data, label }) => {
  const displayData = data;
  return (
    <Wrapper>
      <InnerLayer>
        <DisplayData>{displayData ? displayData : "__"}&deg;C</DisplayData>
        <DisplayLabel>
          {label.split()[0]} <br></br> {label.split()[1]}
        </DisplayLabel>
      </InnerLayer>
    </Wrapper>
  );
};

export default DisplayBox;

const Wrapper = styled.div`
  width: 132px;
  height: 40px;
  box-shadow: 0px 0px 2px var(--unnamed-color-000000);
  background: transparent
    linear-gradient(180deg, #d9d24b 0%, #aea951 61%, #67665c 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border-radius: 6px;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const InnerLayer = styled.div`
  width: 124px;
  height: 33px;
  background: transparent linear-gradient(180deg, #2e2e1e 0%, #fef100 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #ffe600;
  border-radius: 4px;
  opacity: 1;
`;
const DisplayData = styled.span`
  position: absolute;
  top: 2px;
  left: 10px;
  width: 14px;
  height: 22px;
  color: var(--unnamed-color-1b2b44);
  text-align: left;
  font-size: 14px;
  letter-spacing: 1.8px;
  color: #1b2b44;
`;
const DisplayLabel = styled.span`
  position: absolute;
  top: 15px;
  right: 7px;
  line-height: 10px;
  color: var(--unnamed-color-1b2b44);
  text-align: right;
  font-size: 10px;
  letter-spacing: 0.8px;
  color: #1b2b44;
  opacity: 1;
  text-transform: uppercase;
`;
