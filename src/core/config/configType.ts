interface Header {
  display: boolean;
  width: "fixed" | "fluid";
  asideTop: boolean;
}

interface Footer {
  display: boolean;
  width: "fixed" | "fluid";
}

interface Aside {
  display: boolean;
  collapse: boolean;
  popperEffect: "dark" | "light";
  backgroundColor: string;
  textColor: string;
}

interface defaultConfig {
  headers: Header;
  footer: Footer;
  aside: Aside;
}

export default defaultConfig;
export type { Header, defaultConfig, Aside, Footer };
