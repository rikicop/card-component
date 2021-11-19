import styled from "styled-components/macro";

export const CardMain = styled.div`
  box-shadow: 0 0 10px 5px #e1e5ee;
  border-radius: 0.2rem;
  min-width: 28rem;
  display: flex;

  @media screen and (min-width: 600px) {
    flex-direction: column;
    text-align: center;
    min-width: 14rem;
  }
`;

export const CardImg = styled.img`
  width: 14rem;
  height: 11rem;
  object-fit: cover;
  @media screen and (min-width: 600px) {
    width: 100%;
    height: 12rem;
  }
`;

export const CardBody = styled.div`
  margin: 1rem;
  flex-grow: 1;
`;

export const CardTitle = styled.h2`
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  line-height: 1.2rem;
`;

export const CardPrice = styled.h3`
  font-size: 1.4rem;
  margin-top: 0.6rem;

  :before {
    content: "$";
    font-size: 1rem;
    position: relative;
    top: -0.3rem;
    padding-right: 0.1rem;
  }
`;

export const CardBtn = styled.button`
  border: none;
  border-top: 1px solid #e1e5ee;
  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  color: inherit;
  width: 100%;
  padding-top: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    color: #0e48fe;
  }
`;
