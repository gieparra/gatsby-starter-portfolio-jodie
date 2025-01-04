import "gatsby";

declare module "gatsby" {
  interface GatsbyConfig {
    trailingSlash?: "always" | "never" | "ignore";
  }
}
