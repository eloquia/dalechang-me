import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  return (
    <header>
      <StaticImage
        style={{ margin: ".5rem" }}
        src="../../images/dale-future-techno-italic.png"
        placeholder="blurred"
        layout="fixed"
        width={100}
        loading="eager"
        alt="Dale Chang Logo"
      />
    </header>
  )
}