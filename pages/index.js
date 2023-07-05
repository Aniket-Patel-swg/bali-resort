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
              Experience the chance to own your dream plot in Bali, starting at
              a price of $9600. <br />
              Embrace the opportunity to unlock lucrative investment prospects
              at The Bali Hills,
              <br /> where the untouched beauty of paradise awaits.{" "}
            </p>
            <div class={styles.two_button}>
              <a href="mailto:info@thebalihills.com" target="_blank">
                <button class={styles.button_57} role="button">
                  <span class="text">Contact Us</span>
                  <span>Make it Happen!</span>
                </button>
              </a>
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
              Complete the form, and our team will contact you for the
              reservation contract. We're committed to supporting your
              investment journey and providing necessary information and
              guidance.
              <br /> Count on our expertise to help you seize this
              transformative opportunity.
            </p>
            <hr />
            <h2>Complete Payment</h2>
            <p>
              Start your ownership with a $9,600 payment. We handle upkeep
              costs, ensuring a worry-free experience. Stay informed with
              regular project updates, witnessing the value of your investment.
              <br />
              Enjoy a luxurious and sustainable lifestyle in Bali's tropical
              paradise, blending nature and modern amenities seamlessly.
            </p>
            <hr />
            <h2>Acquire Ownership</h2>
            <p>
              Invest in the Bali Hills community for your own land and property.
              Claim your stake in this prestigious development starting summer
              2025. Enjoy luxury, sustainability, and ecological responsibility
              with thoughtfully constructed units, high standards, and
              eco-friendly features.
              <br />
              Own a property that meets your expectations in quality,
              aesthetics, and environmental consciousness.
            </p>
            <hr />
          </div>
        </div>
      </section>

      <section className={styles.footer_seciton}>
        <section className={styles.contact}>
          <h1 class={styles.section_header}>Contact us</h1>

          <div class={styles.contact_wrapper}>
            <form id="contact-form" class={styles.form_horizontal} role="form">
              <div class={styles.form_group}>
                <div class={styles.col_sm_12}>
                  <input
                    type="text"
                    class={styles.form_control}
                    id="name"
                    placeholder="NAME"
                    name="name"
                    value=""
                    required
                  />
                </div>
              </div>

              <div class={styles.form_group}>
                <div class={styles.col_sm_12}>
                  <input
                    type="email"
                    class={styles.form_control}
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    value=""
                    required
                  />
                </div>
              </div>

              <textarea
                class={styles.form_control}
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required
              ></textarea>

              <button
                class={styles.send_button}
                id="submit"
                type="submit"
                value="SEND"
              >
                <div class={styles.alt_send_button}>
                  <i class="fa fa-paper-plane"></i>
                  <span class={styles.send_text}>SEND</span>
                </div>  
              </button>
            </form>

            <div class={styles.direct_contact_container}>
              <ul class={styles.contact_list}>
                <li class={styles.list_item}>
                    <span class={styles.contact_text}>City, State</span>
                </li>

                <li class={styles.list_item}>
                    <span class={styles.contact_text}>
                      <a href="tel:1-212-555-5555" title="Give me a call">
                        (+62) 123456789
                      </a>
                    </span>
                </li>

                <li class={styles.list_item}>
                    <span class={styles.contact_text}>
                      <a href="mailto:#" title="Send me an email">
                        mailto:info@thebalihills.com
                      </a>
                    </span>
                </li>
              </ul>

              <hr />

              <div class={styles.copyright}>&copy; ALL OF THE RIGHTS RESERVED</div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
