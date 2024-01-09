import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/parallax.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Parallax() {
  return (
    <section className="container">
      <div className="parallax-wrapper">
        <div className="img-wrapper slower">
          <a
            href="https://www.wikipedia.org/wiki/Judith_Butler"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/butler.jpg" alt="" />
          </a>
        </div>
        <div className="img-wrapper faster">
          <a
            href="https://www.wikipedia.org/wiki/Gilles_Deleuze"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/deleuze.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper slower slower-up">
          <a
            href="https://www.wikipedia.org/wiki/Jacques_Derrida"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/derrida.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper faster vertical">
          <a
            href="https://www.wikipedia.org/wiki/Simone_de_Beauvoir"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/de-beauvoir.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper faster">
          <a
            href="https://www.wikipedia.org/wiki/Virginie_Despentes"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/despentes.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper slower">
          <a
            href="https://www.wikipedia.org/wiki/Michel_Foucault"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/foucault.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper faster">
          <a
            href="https://www.wikipedia.org/wiki/Georg_Wilhelm_Friedrich_Hegel"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/hegel.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper slower slower1">
          <a
            href="https://www.wikipedia.org/wiki/Immanuel_Kant"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/kant.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper faster">
          <a
            href="https://www.wikipedia.org/wiki/Karl_Marx"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/marx.jpeg" alt="" />
          </a>
        </div>
        <div className="img-wrapper faster faster-up">
          <a
            href="https://www.wikipedia.org/wiki/Friedrich_Nietzsche"
            target="_blank"
            rel="noopener"
          >
            <img src="/assets/nietzsche.jpeg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
