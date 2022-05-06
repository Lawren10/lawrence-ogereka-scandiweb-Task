import styled from "styled-components";

//main cart styling
export const Cart = styled.main`
  padding: ${({ mini }) => (mini === "true" ? "1rem" : "2rem 4rem")};
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
      ? "height:20rem;overflow-y: scroll;&::-webkit-scrollbar {width: 0.3rem;border-radius: 0.2rem;}&::-webkit-scrollbar-track {background: #fff;}&::-webkit-scrollbar-thumb {background: #888;border-radius: 0.2rem;}"
      : ""}; ;
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0;
  border-top: ${({ mini }) => (mini === "true" ? "none" : "1px solid #f0f0f0")};
`;

//Cart Item Desription styling
export const CartItemName = styled.h1`
  font-size: ${({ mini }) => (mini === "true" ? "1rem" : "1.6rem")};
  font-weight: ${({ mini }) => (mini === "true" ? "400" : " 600")};
  /* margin-bottom: 0.2rem; */
`;

export const CartItemBrandName = styled.h2`
  font-size: ${({ mini }) => (mini === "true" ? "1rem" : "1.6rem")};
  font-weight: 400;
`;

export const CartItemLabel = styled.h4`
  font-size: ${({ mini }) => (mini === "true" ? "0.8rem" : "1rem")};
  font-weight: 700;
  font-family: "Roboto Condensed";
  margin: ${({ mini }) => (mini === "true" ? "0.6rem 0" : "1rem 0")};
`;

export const CartPrice = styled.h2`
  font-size: ${({ mini }) => (mini === "true" ? "1rem" : "1.3rem")};
  font-weight: 700;
  margin-top: ${({ mini }) => (mini === "true" ? "0.4rem" : "0.8rem")};
`;

export const CartSwatch = styled.label`
  width: 2rem;
  height: 2rem;
  background-color: ${({ color }) => (color ? color : "")};
`;

export const CartContWrap = styled.div`
  width: ${({ mini }) => (mini === "true" ? "80%" : "")};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ mini }) => (mini === "true" ? "0.5rem" : "1rem")};
  margin-bottom: 0.5rem;
`;

export const CartSizeCont = styled.label`
  font-size: ${({ mini }) => (mini === "true" ? "0.8rem" : "1rem")};
  font-weight: 400;
  font-family: "Source Sans Pro";
  padding: ${({ mini }) => (mini === "true" ? "0.2rem 0.5rem" : "0.5rem 1rem")};
  border: 1px solid #1d1f22;
`;

export const LabelWrap = styled.div`
  position: relative;
`;

//Cart Item Quantity styling
export const QuantityWraper = styled.div`
  padding: 0.5rem;
  border: 1px solid black;
  align-self: center;
`;
export const QuantityChange = styled.div`
  position: absolute;
  left: ${({ mini }) => (mini === "true" ? "65%" : "75%")};
  display: grid;
  place-items: center;
  padding: ${({ mini }) => (mini === "true" ? "0 0.5rem" : "0 0.8rem")};
  font-size: ${({ mini }) => (mini === "true" ? "1rem" : "2rem")};
  font-weight: 200;
  align-self: ${({ start }) => (start === "true" ? "flex-start" : "flex-end")};
  border: 0.8px solid black;
  cursor: pointer;
`;

export const QuantityCount = styled.div`
  position: absolute;
  left: ${({ mini }) => (mini === "true" ? "63%" : "75%")};
  display: grid;
  place-items: center;
  font-weight: 500;
  font-size: ${({ mini }) => (mini === "true" ? "1" : "1.3rem")};
  padding: 1rem;
  align-self: center;
`;

export const TotalPriceWrap = styled.section`
  width: 20%;
  margin-top: 1.5rem;
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
  width: 20%;
  margin-left: 0.5rem;
  align-self: center;
`;
export const PicButtonContainer = styled.div`
  position: absolute;
  inset: ${({ mini }) =>
    mini === "true" ? "80% auto auto auto" : "80% 1rem auto auto"};
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
