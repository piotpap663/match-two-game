import { MenuNav, MenuBox, MenuLink } from "./style";

export const Menu = () => {
  return (
    <MenuNav data-testid="menu">
      <MenuLink data-testid="menu-home" to="/">
        <MenuBox>Home</MenuBox>
      </MenuLink>
      <MenuLink data-testid="menu-about" to="/about">
        <MenuBox>About</MenuBox>
      </MenuLink>
    </MenuNav>
  );
};
