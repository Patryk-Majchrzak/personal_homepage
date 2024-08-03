import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display:flex;
  justify-content:flex-end;
`;

export const DropdownContent = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 1;
  transition: opacity 0.3s ease-in-out;

  ${DropdownContainer}:hover & {
    opacity: 1;
  }
`;

export const Option = styled.div`
  cursor: pointer;
`;

export const OptionImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;