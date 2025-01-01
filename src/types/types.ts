export type AppContainerClass = "app-container";
export type PostWithMenuClass = "post-with-menu";
export type CardContainerClass = "card-container";
export type CardTitleClass = "card-title";
export type CardTextClass = "card-text";
export type MenuIconClass = "menu-icon";
export type MenuContainerClass = "menu-container";
export type MenuItemClass = "menu-item";

export interface StyleProps {
  appContainer?: AppContainerClass;
  postWithMenu?: PostWithMenuClass;
  cardContainer?: CardContainerClass;
  cardTitle?: CardTitleClass;
  cardText?: CardTextClass;
  menuIcon?: MenuIconClass;
  menuContainer?: MenuContainerClass;
  menuItem?: MenuItemClass;
}
