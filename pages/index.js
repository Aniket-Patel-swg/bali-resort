import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.one}>
        <div class={styles.content}>
          <div class={styles.text_content}>
            <h1 class={styles.white}>
              Experience The Bali Equisite <strong>Bali Living</strong>
            </h1>
            <p class={styles.blackish}>
              {" "}
              Own your Dream Bali House <br />
              Embrace citizenship and investment opportunities at Eco Hills Bali{" "}
              <br /> unveil the pristine essence of paradise{" "}
            </p>
            <div class={styles.two_button}>
              <button class={styles.button_57} role="button">
                <span class="text">Contact Us</span>
                <span>Make it Happen!</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.how_it_works}>
        {" "}
        <div class={styles.flex_container}>
          <div class={styles.flex_item_left}>
            <h1>Unlock Path To Paradise </h1>

            <img src="https://images.pexels.com/photos/12010537/pexels-photo-12010537.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
          <div class={styles.flex_item_right}>
            <h2>3 Simple Steps</h2>
            <p>To get your dream plot in bali</p>
            <hr />
            <h2>Book A Call</h2>
            <p>
              He empezado con un curso por audio y un tutor a través del Zoom.{" "}
              <br /> Luego, fui a Italki.
            </p>
            <hr />
            <h2>Los Audiovisuales</h2>
            <p>Espero que unos enlaces puedan ayudarles.</p>
            <hr />
            <h2>Los Viajes</h2>
            <p>Quiero visitar México o Colombia (Salento).</p>
            <hr />
          </div>
        </div>
      </section> */}
    </>
  );
}
