interface Header {
  display: boolean;
  width: "fixed" | "fluid";
  backgroundColor: string;
}

interface Footer {
  display: boolean;
  width: "fixed" | "fluid";
  backgroundColor: string;
}

interface Aside {
  display: boolean;
  collapse: boolean;
  popperEffect: "dark" | "light";
  backgroundColor: string;
  textColor: string;
}

interface MainLayout {
  asideTop: boolean;
}

interface defaultConfig {
  theme: "auto" | "dark";
  mainLayout: MainLayout;
  headers: Header;
  footer: Footer;
  aside: Aside;
}

export default defaultConfig;
export type { defaultConfig, Header, Aside, Footer, MainLayout };
