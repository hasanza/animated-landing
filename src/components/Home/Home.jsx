import React from "react";
import styles from "./Home.module.css";
import { Zoom, Fade } from "react-reveal";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.segment}>
        <div id={styles.msg2}>
          <h1>Remote Consultancy</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            voluptatem aliquam iste, eius maiores in veritatis debitis. Ipsa
            fugiat qui quaerat reiciendis ab. Consectetur, eius.
          </p>
        </div>

        <img id={styles.illus} src="/illustrations/wfh_1.svg" alt="wfh" />
      </div>
      <div className={styles.segment}>
        <Fade bottom>
          <img id={styles.illus} src="/illustrations/wfh_2.svg" alt="wfh" />
        </Fade>
        <div className={styles.msg2}>
          <Fade top>
            <h1>Reliable Communication</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              voluptatem aliquam iste, eius maiores in veritatis debitis. Ipsa
              fugiat qui quaerat reiciendis ab. Consectetur, eius.
            </p>
          </Fade>
        </div>
      </div>
      <div className={styles.segment}>
        <div className={styles.msg2}>
          <Fade top>
            <h1>Attractive and Inviting Designs</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              voluptatem aliquam iste, eius maiores in veritatis debitis. Ipsa
              fugiat qui quaerat reiciendis ab. Consectetur, eius.
            </p>
          </Fade>
        </div>
        <Fade bottom>
          <img id={styles.illus} src="/illustrations/wfh_3.svg" alt="wfh" />
        </Fade>
      </div>
      <div className={styles.segment}>
        <Fade bottom>
          <img id={styles.illus} src="/illustrations/wfh_4.svg" alt="wfh" />
        </Fade>
        <div className={styles.msg2}>
          <Fade top>
            <h1>All in the Comfort of Your Home</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              voluptatem aliquam iste, eius maiores in veritatis debitis. Ipsa
              fugiat qui quaerat reiciendis ab. Consectetur, eius.
            </p>
          </Fade>
        </div>
      </div>
      <Zoom>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>Team</h2>
            <h4>Determined</h4>
            <h4>Qualified</h4>
            <h4>Ferocious</h4>
          </div>
          <div className={styles.box}>
            <h2>Priorities</h2>
            <h4>Satisfaction</h4>
            <h4>Quality</h4>
            <h4>Relationship</h4>
          </div>
          <div className={styles.box}>
            <h2>Strengths</h2>
            <h4>Motivation</h4>
            <h4>Ambition</h4>
            <h4>Zeal</h4>
          </div>
        </div>
      </Zoom>

      <div id={styles.final} className={styles.segment}>
        <h1>Looking forward to hearing from you!</h1>
        <br />
      </div>
      <p>Made with <span role="img" aria-label="heart">&#10084;&#65039;</span> by <a href="https://github.com/hasanza/">Hasan Raza</a></p>
    </div>
  );
}

export default Home;
