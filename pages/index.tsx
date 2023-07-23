import Head from "next/head";
import { Inter, Titillium_Web } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });
const titilum = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "900", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple Calculator Replica</title>
        <meta name="description" content="calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/react.svg" />
      </Head>
      <header>
        <h1 className={`${titilum.className}`}>Calculator</h1>
      </header>
      <main className={`${inter.className} container`}>
        <div className="row answerboard">0</div>
        <div className="row">
          <Button
            value={"+"}
            label={
              <div>
                log<sub>y</sub>
              </div>
            }
          />
          <Button
            value={"+"}
            label={
              <div>
                2<sup>x</sup>
              </div>
            }
          />
          <Button value={"+"} label={<div>MC</div>} />
          <Button value={"+"} label={<div>M+</div>} />
          <Button value={"+"} label={<div>M-</div>} />
          <Button value={"+"} label={<div>MR</div>} />
          <Button value={"+"} label={<div>AC</div>} />
          <Button value={"+"} label={<div>+&#8725;-</div>} />
          <Button value={"+"} label={<div>%</div>} />
          <Button value={"+"} label={<div>&#8725;</div>} />
        </div>

        <div className="row">
          <Button
            value={"+"}
            label={
              <div>
                2<sup>nd</sup>
              </div>
            }
          />
          <Button
            value={"+"}
            label={
              <div>
                x<sup>2</sup>
              </div>
            }
          />
          <Button
            value={"+"}
            label={
              <div>
                x<sup>3</sup>
              </div>
            }
          />
          <Button
            value={"+"}
            label={
              <div>
                x<sup>y</sup>
              </div>
            }
          />
          <Button
            value={"+"}
            label={
              <div>
                e<sup>x</sup>
              </div>
            }
          />
          <Button
            value={"+"}
            label={
              <div>
                10<sup>x</sup>
              </div>
            }
          />
          <Button value={"+"} label={<div>7</div>} />
          <Button value={"+"} label={<div>8</div>} />
          <Button value={"+"} label={<div>9</div>} />
          <Button value={"+"} label={<div>X</div>} />
        </div>

        <div className="row">
          <Button value={"+"} label={<div>1&nbsp;&#8725;&nbsp;x</div>} />
          <Button value={"+"} label={<div>&#8730;x</div>} />
          <Button value={"+"} label={<div>&#8731;x</div>} />
          <Button value={"+"} label={<div>y&#8730;x</div>} />
          <Button value={"+"} label={<div>Ln</div>} />
          <Button
            value={"+"}
            label={
              <div>
                log<sub>10</sub>
              </div>
            }
          />
          <Button value={"+"} label={<div>4</div>} />
          <Button value={"+"} label={<div>5</div>} />
          <Button value={"+"} label={<div>6</div>} />
          <Button value={"+"} label={<div>-</div>} />
        </div>

        <div className="row">
          <Button value={"+"} label={<div>x!</div>} />
          <Button value={"+"} label={<div>sin</div>} />
          <Button value={"+"} label={<div>cos</div>} />
          <Button value={"+"} label={<div>tan</div>} />
          <Button value={"+"} label={<div>e</div>} />
          <Button value={"+"} label={<div>EE</div>} />
          <Button value={"+"} label={<div>1</div>} />
          <Button value={"+"} label={<div>2</div>} />
          <Button value={"+"} label={<div>3</div>} />
          <Button value={"+"} label={<div>+</div>} />
        </div>

        <div className="row">
          <Button
            value={"+"}
            label={
              <div>
                log<sub>2</sub>
              </div>
            }
          />
          <Button value={"+"} label={<div>sinh</div>} />
          <Button value={"+"} label={<div>cosh</div>} />
          <Button value={"+"} label={<div>tanh</div>} />
          <Button value={"+"} label={<div>Pie</div>} />
          <Button value={"+"} label={<div>Rand</div>} />
          <Button value={"+"} label={<div>0</div>} />
          <Button value={"+"} label={<div>.</div>} />
          <Button value={"+"} label={<div>=</div>} />
        </div>
      </main>
    </>
  );
}
