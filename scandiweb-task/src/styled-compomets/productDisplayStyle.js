import styled from "styled-components";

//main Product display style
export const ProductdisplayCont = styled.section`
  padding: 4rem;
  display: flex;
  align-items: flex-start;
  gap: 3rem;

  @media screen and (max-width: 920px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

// Product Display picture styles
export const PicWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  @media screen and (max-width: 920px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const LargeProductPicCont = styled.div`
  width: 80%;
  height: 25rem;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;

export const PicListCont = styled.ul`
  width: 20%;
  height: 32.5rem;
  list-style-type: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.3rem;
    border-radius: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.2rem;
  }

  @media screen and (max-width: 920px) {
    width: 52rem;
    display: flex;
    gap: 1rem;
    height: auto;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0.3rem;
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 0.2rem;
    }
  }

  @media screen and (max-width: 820px) {
    width: 47rem;
  }
  @media screen and (max-width: 420px) {
    width: 22rem;
  }
`;

export const SmallProductPicCont = styled.li`
  width: 90%;
  height: 5.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    box-shadow: 0.2rem 0.8rem 2rem 0 #f0f0f0;
  }

  @media screen and (max-width: 920px) {
    width: 12rem;
    height: auto;
  }
`;

export const ProductPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

//Product Discription display styles
export const ProductDescWrap = styled.section`
  width: 30%;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;

export const ProductName = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

export const ProductBrandName = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const ProductLabel = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Roboto Condensed";
  margin-bottom: 0.5rem;
`;

export const ProductSizeCont = styled.div`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Source Sans Pro";
  padding: 0.5rem 1rem;
  border: 1px solid #1d1f22;
`;

export const ProductSwatch = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ color }) => (color ? color : "")};
  box-shadow: 0.2rem 0.8rem 2rem 0 #f0f0f0;
`;

export const ProductSizeContWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProductPriceLabel = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Roboto Condensed";
  margin-bottom: 0.8rem;
`;

export const ProductPrice = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProductAddToCartBtn = styled.button`
  font-size: ${({ mini }) => (mini === "true" ? "0.8rem" : "1rem")};
  font-weight: 600;
  text-transform: uppercase;
  width: ${({ mini }) => (mini === "true" ? "50%" : "100%")};
  padding: ${({ order }) => (order ? "0.8rem 0" : "1.52rem 0")};
  border: ${({ minicart }) =>
    minicart === "true" ? "1px solid black" : "none"};
  outline: none;
  background-color: ${({ minicart, instock }) =>
    minicart === "true"
      ? "white"
      : instock === false
      ? "light-gray"
      : "#5ece7b"};
  color: ${({ instock }) => (instock === false ? "dark-gray" : "white")};
  margin-bottom: 1.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0.2rem 0.8rem 2rem 0 #f0f0f0;
  }
`;

export const ProductDescriptionText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto";
  line-height: 1.5rem;
  height: 8rem;
  padding-left: 0.3rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.3rem;
    border-radius: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.2rem;
  }
`;
