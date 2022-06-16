import styled from "styled-components";

export const PicContainer = styled.div`
  position: relative;
  height: 22rem;
  background-color: white;
`;

export const ItemPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ItemName = styled.h5`
  font-weight: 300;
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 2rem;
  opacity: ${({ inStock }) => (inStock ? 1 : 0.5)};
`;

export const ItemBrandName = styled.h5`
  margin-top: 1.5rem;
  font-weight: 600;
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 2rem;
  opacity: ${({ inStock }) => (inStock ? 1 : 0.5)};
`;

export const ItemPrice = styled.h5`
  font-weight: 500;
  font-family: inherit;
  font-size: 1.125rem;
  opacity: ${({ inStock }) => (inStock ? 1 : 0.5)};
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
  padding: 1rem;
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
  @media screen and (max-width: 920px) {
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

  @media screen and (max-width: 1024px) {
    width: 47.3%;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const OutOfStockOverLay = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: lightgray;
  opacity: 0.3;
`;

export const OutOfStockText = styled.div`
  font-size: 2rem;
`;

export const MainContainer = styled.main`
  padding: "2rem";
`;

export const AddedToCartMessage = styled.div`
  position: absolute;
  inset: 40% auto auto 5rem;
  padding: 0.5rem 2rem;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: ${({ added }) => (added ? "#5ece7b" : "")};
  backdrop-filter: blur(0.5rem);
  display: ${({ show }) => (show ? "block" : "none")};
`;
