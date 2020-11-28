import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.section`
  display: flex;
`;

export type ContainerProps = {
  children: JSX.Element[];
};

export default function Container(containerProps: ContainerProps) {
  return (
    <ContainerWrapper>{containerProps.children}</ContainerWrapper>
  )
}
