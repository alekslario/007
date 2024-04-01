import styled from "@emotion/styled";
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  background: ${({ theme }) => theme.backgroundColor};
`;

export default PageWrapper;
