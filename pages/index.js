import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
    <section className={styles.one}>
        <div class={styles.content}>
            <div class={styles.text_content}>
                <h1 class={styles.white}>Experience The Bali
                    Equisite <strong>Bali Living</strong>
                </h1>
                <p class={styles.blackish}>  Own your Dream Bali House <br />
              Embrace citizenship and investment opportunities at Eco Hills Bali <br /> unveil the pristine essence of paradise </p>
                <div class={styles.two_button}>
                <button class={styles.button_57} role="button"><span class="text">Contact Us</span><span>Make it Happen!</span></button>
                </div>
            </div>  
        </div>
    </section>
    
   </>
  )
}
