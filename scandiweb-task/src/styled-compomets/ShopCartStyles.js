import styled from "styled-components";

//main cart styling
export const Cart = styled.main`
  padding: ${({ mini }) => (mini === "true" ? "1rem" : "2rem 4rem")};
  @media screen and (max-width: 420px) {
    padding: 1.5rem;
  }
`;

export const CartHeader = styled.h1`
  position: relative;
  margin-bottom: 1.5rem;
  font-family: inherit;
  font-weight: ${({ mini }) => (mini === "true" ? "700" : "400")};
  font-size: ${({ mini }) => (mini === "true" ? "1rem" : "2.6rem")};
  text-transform: capitalize;
`;

export const CartItemsContainer = styled.ul`
  list-style-type: none;
  width: ${({ mini }) => (mini === "true" ? "100%" : "80%")};

  ${({ mini }) =>
    mini === "true"
      ? "height:20rem;overflow-y: scroll;&::-webkit-scrollbar {width: 0.15rem;border-radius: 0.1rem;}&::-webkit-scrollbar-track {background: #fff;}&::-webkit-scrollbar-thumb {background: #888;border-radius: 0.1rem;}"
      : ""};

  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0;
  border-top: ${({ mini }) => (mini === "true" ? "none" : "1px solid #f0f0f0")};
  @media screen and (max-width: 420px) {
    flex-direction: ${({ mini }) => (mini === "true" ? "row" : "column")};
  }
`;

//Cart Item Desription styling
export const CartContentWrap = styled.div``;

export const CartItemName = styled.h1`
  font-size: ${({ mini }) => (mini === "true" ? "0.9rem" : "1.6rem")};
  font-weight: ${({ mini }) => (mini === "true" ? "400" : " 600")};
`;

export const CartItemBrandName = styled.h2`
  font-size: ${({ mini }) => (mini === "true" ? "0.9rem" : "1.6rem")};
  font-weight: 400;
`;

export const CartItemLabel = styled.h4`
  font-size: ${({ mini }) => (mini === "true" ? "0.8rem" : "1rem")};
  font-weight: 700;
  font-family: "Roboto Condensed";
  margin: ${({ mini }) => (mini === "true" ? "0.6rem 0" : "1rem 0")};
`;

export const CartPrice = styled.h2`
  font-size: ${({ mini }) => (mini === "true" ? "0.9rem" : "1.3rem")};
  font-weight: 700;
  margin-top: ${({ mini }) => (mini === "true" ? "0.4rem" : "0.8rem")};
`;

export const CartSwatch = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ color }) => (color ? color : "")};
  cursor: pointer;
  ${({ selected }) => (selected === true ? "border:2px solid #5ece7b" : "")};
`;

export const CartContWrap = styled.div`
  width: ${({ mini }) => (mini === "true" ? "80%" : "")};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ mini }) => (mini === "true" ? "0.3rem" : "1rem")};
  margin-bottom: 0.5rem;
`;

export const CartSizeCont = styled.div`
  font-size: ${({ mini }) => (mini === "true" ? "0.7rem" : "1rem")};
  font-weight: 400;
  font-family: "Source Sans Pro";
  padding: ${({ mini }) => (mini === "true" ? "0.2rem 0.3rem" : "0.5rem 1rem")};
  border: 1px solid #1d1f22;
  cursor: pointer;
  ${({ selected }) =>
    selected === true ? "background-color:black;color:white" : ""};
`;

export const LabelWrap = styled.div`
  position: relative;
`;

//Cart Item Quantity styling
export const QuantityWraper = styled.div`
  position: absolute;
  height: 100%;
  left: ${({ mini }) => (mini === "true" ? "45%" : "65%")};
  top: 0;
  padding: 0.6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 920px) {
    left: ${({ mini }) => (mini === "true" ? "63%" : "65%")};
  }
  @media screen and (max-width: 420px) {
    position: ${({ mini }) => (mini === "true" ? "absolute" : "initial")};
    flex-direction: ${({ mini }) => (mini === "true" ? "column" : "row")};
    width: ${({ mini }) => (mini === "true" ? "" : "100%")};
    margin: 0.5rem 0;
  }
`;
export const QuantityChange = styled.div`
  display: grid;
  place-items: center;
  padding: ${({ mini }) => (mini === "true" ? "0.2rem 0" : "0 0.8rem")};
  font-size: ${({ mini }) => (mini === "true" ? "1rem" : "2rem")};
  font-weight: 200;
  border: 0.8px solid black;
  cursor: pointer;
`;

export const QuantityCount = styled.div`
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: ${({ mini }) => (mini === "true" ? "1" : "1.3rem")};
  padding: 1rem;
`;

export const TotalPriceWrap = styled.section`
  width: 20%;
  margin-top: 1.5rem;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const CartPriceLabel = styled.div`
  font-weight: ${({ total }) => (total ? 500 : 400)};
  font-size: ${({ mini }) => (mini === "true" ? "1" : "1.5rem")};
`;

export const Cartvalue = styled.h4`
  font-weight: 700;
  font-size: ${({ mini }) => (mini === "true" ? "1" : "1.5rem")};
`;

//cart pictures styling
export const CartPicContainer = styled.section`
  position: absolute;
  height: 100%;
  right: 0;
  width: 30%;
  margin-left: 0.5rem;
  align-self: center;
  @media screen and (max-width: 420px) {
    position: ${({ mini }) => (mini === "true" ? "absolute" : "relative")};
    width: ${({ mini }) => (mini === "true" ? "" : "100%")};
    height: ${({ mini }) => (mini === "100%" ? "" : "auto")};
  }
`;
export const PicButtonContainer = styled.div`
  position: absolute;
  inset: ${({ mini }) =>
    mini === "true" ? "80% auto auto auto" : "80% 2rem auto auto"};
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`;
export const PicButton = styled.button`
  outline: none;
  border: none;
  padding: ${({ mini }) =>
    mini === "true" ? "0.2rem 0.3rem" : "0.3rem 0.5rem"};
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  cursor: pointer;
`;

export const MiniCartTotalView = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 1rem;
`;

export const MiniCartItemDetailWrap = styled.div`
  margin-right: auto;
`;

export const MinicartTotalCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
export const MinicartButtonCont = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ShopCartEmptyMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: grid;
  place-content: center;
`;
