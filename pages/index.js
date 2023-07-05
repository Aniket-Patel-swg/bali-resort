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
                <a href="https://wa.me/+62882006977701"></a>
                <span class="text">Contact Us</span>
                <span>Make it Happen!</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.how_it_works}>
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
              Fill out the form and we'll contact you to talk about the folowing steps for obtaining your reseravation contract.
              <br /> The life-changing potential of this investment opportunity is something we look forward to assisting you with 
              as you continue to investigate.
            </p>
            <hr />
            <h2>Complete Payment</h2>
            <p>Pay starting at €24,950 and take card of upkeep costs as the legal owner, Investor will feel secure in their 
              investment thanks to updates on teh project's development every three months.
              <br /> <br />
              This is exceptional chance to purchase property in that is rooted in Bali's tropical essence, where 
              luxury and sustainability coexist to create a truly exceptional living environment.
            </p>
            <hr />
            <h2>Acquire Ownership</h2>
            <p>
              Investors will get their very own piece of land and property within Eco Hills starting in the summer of 2025.
              <br /> <br />
              For individuals searching for a ready-to-live-in or rent-out property that is both ecologically responsible and
              constructed to the greatest standards, this development offers the ideal answer
            </p>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
