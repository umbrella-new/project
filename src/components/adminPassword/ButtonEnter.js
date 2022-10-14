import { flexboxCenter } from '../styles/commonStyles';
import styled from 'styled-components';

function ButtonEnter() {
  return (
    <Button>
      <Wrapper1>
        <Wrapper2></Wrapper2>
      </Wrapper1>
    </Button>
  );
}

export default ButtonEnter;

const Button = styled.button``;
const Wrapper1 = styled.div``;
const Wrapper2 = styled.div``;
