import styled from "styled-components";
import { keyframes, css } from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0 0.5rem 1rem 0 #f0f0f0;
`;

export const NavButton = styled.button`
  padding: 1.5rem;
  outline: none;
  border: none;
  border-bottom: ${({ active }) => (active ? "2px solid #5ece7b;" : "none")};
  font-family: inherit;
  color: ${({ active }) => (active ? "#5ece7b;" : "none")};
  background: transparent;
  cursor: pointer;
`;

export const NavCurrencyBtn = styled.div`
  padding: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
`;

const Animate = keyframes`
from {
    transform: translateY(-14.3rem);
  }

  to {
    transform:translateY(0);
  }
`;

const ReAnimate = keyframes`
from {
    transform: translateY(0);
  }

  to {
    transform:translateY(-22.3rem);
  }
`;

export const NavCurrencyList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  box-shadow: 0 0.1rem 1rem 0 #f0f0f0;
  list-style-type: none;
  z-index: -1;
  transform: translateY(-22.3rem);
  ${({ show }) =>
    show
      ? css`
          animation: ${Animate} 0.5s linear forwards;
        `
      : css`
          animation: ${ReAnimate} 0.5s linear forwards;
        `};
`;

export const NavCurrencyItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const NavCurrSelectBtn = styled.div`
  display: flex;
  font-size: 1.125rem;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const CartBtn = styled(NavCurrencyBtn)``;

export const CartList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  padding: 0.2rem;
  width: 20rem;
  height: 32rem;
  background-color: white;
  border: 1px solid #f0f0f0;
  list-style-type: none;
  z-index: 5;
  display: none;
  transition: all 0.5s ease-in;
  ${CartBtn}:hover & {
    display: block;
    transition: all 0.5s ease-in;
  }
`;

export const CartOverLay = styled.div`
  position: absolute;
  top: 100%;
  right: -100%;
  width: 100vw;
  height: 89.5vh;
  background-color: rgba(57, 55, 72, 0.22);
  z-index: 3;
  display: none;
  transition: all 0.5s ease-in;
  ${CartBtn}:hover & {
    display: block;
    transition: all 0.5s ease-in;
  }
`;

export const CurrCartWrap = styled.section`
  display: flex;
  margin-left: auto;
`;

export const CartCount = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: black;
  color: white;
  right: 0.3rem;
  top: 0.8rem;
  text-align: center;
`;
