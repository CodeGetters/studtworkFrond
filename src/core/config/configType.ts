interface Header {
  display: boolean;
  width: "fixed" | "fluid";
}

interface Footer {
  display: boolean;
  width: "fixed" | "fluid";
}

interface defaultConfig {
  headers: Header;
  footer: Footer;
}

export default defaultConfig;
export type { Header, defaultConfig };
