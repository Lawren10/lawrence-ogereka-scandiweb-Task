import styled from "styled-components";

export const PicContainer = styled.div`
  height: 22rem;
  background-color: white;
`;

export const ItemPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ItemName = styled.h5`
  margin-top: 1.5rem;
  font-weight: 300;
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 2rem;
`;
export const ItemPrice = styled.h5`
  font-weight: 500;
  font-family: inherit;
  font-size: 1.125rem;
`;

export const CategoriesName = styled.h1`
  margin: 1rem;
  font-family: inherit;
  font-weight: 400;
  font-size: 2.6rem;
  text-transform: capitalize;
`;

export const ProductsContainer = styled.ul`
  display: flex;
  column-gap: 1rem;
  row-gap: 2rem;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const AddToChartBtn = styled.div`
  position: absolute;
  right: 2rem;
  top: 73%;
  display: grid;
  place-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #5ece7b;
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease;
  @media screen and (max-width: 720px) {
    opacity: 1;
  }
`;

export const ItemWrapper = styled.li`
  position: relative;
  width: 32.3%;
  padding: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0.2rem 0.8rem 2rem 0 #f0f0f0;
    transition: all 0.5s ease;
    ${AddToChartBtn} {
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
`;