const FaultsTypeRadioBox = ({ onHandler, checked, data }) => {
  return (
    <Wrapper onClick={() => onHandler(data)}>
      <OptionChecker>
        <CheckedCircle checked={checked == data ? true : false}></CheckedCircle>
      </OptionChecker>
      <Label>{data}</Label>
    </Wrapper>
  );
};

export default FaultsTypeRadioBox;
