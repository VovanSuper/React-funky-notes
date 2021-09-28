import styled from 'styled-components';

import TodoLogo from './assets/TodoListLogo.svg';

const LogoImg = styled.img.attrs({
  src: TodoLogo,
})`
  max-width: 15rem;
  max-height: 30rem;
`;

const LogoImgComponent = styled.div`
  display: grid;
  place-content: center;
`;

export default () => (
  <LogoImgComponent>
    <LogoImg />
  </LogoImgComponent>
);
