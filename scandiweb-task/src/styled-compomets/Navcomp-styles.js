import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  padding: 0 2rem;
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

export const NavCurrencyList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  /* width: 1.5rem;
  height: 2rem; */
  background-color: white;
  box-shadow: 0 0.1rem 1rem 0 #f0f0f0;
  list-style-type: none;
  display: none;
  transition: all 0.5s ease-in;
  ${NavCurrencyBtn}:hover & {
    display: block;
    transition: all 0.5s ease-in;
  }
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
  padding: 1rem;
  width: 1.5rem;
  height: 2rem;
  background-color: white;
  border: 1px solid #f0f0f0;
  list-style-type: none;
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
