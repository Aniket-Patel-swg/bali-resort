import react, { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "../styles/Home.module.css";

const API_KEY = process.env.NEXT_PUBLIC_BOT_API;

const systemMessage = {
  role: "system",
  content: 
    "Explain things like you're customer support team for the Bali Hills Real Estate Project, and you're talking to a potential customer. Also keep it short maximum 10-15 words and firendly. Don't provide exact pricing detials, just say that they can contact us for more information, you can give our mail id 'info@thebalihills.com'.The Bali Hills real estate project is located on wayand in Kerela.",
};

export default function Home() {
 
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//code.tidio.co/8miuhop9bhcm9ypmqhaoi1y9fz2onn2e.js";
    script.async = true;
  
    // Enter your public key above
    document.body.appendChild(script);
  }, []);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm The Bali Hills AI! How canI help you? ",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  console.log(messages);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  
  console.log(messages);

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
              Own your dream plot in Bali at The Bali Hills, starting from
              $9600. <br />
              Embrace lucrative investment prospects while preserving nature, as
              50% of the land is dedicated to open space.
              <br /> Experience paradise and luxury living in one enchanting
              destination.{" "}
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
              2024. Enjoy luxury, sustainability, and ecological responsibility
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
                    required
                  />
                </div>
              </div>

              <div className={styles.message_input}>
                <textarea
                  class={styles.form_control}
                  rows="10"
                  placeholder="MESSAGE"
                  name="message"
                  required
                ></textarea>
              </div>
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
                {/* <li class={styles.list_item}>
                  <i class="fa fa-map-marker fa-2x">
                    <span class={styles.contact_text}>City, State</span>
                  </i>
                </li>

                <li class={styles.list_item}>
                  <i class="fa fa-phone fa-2x">
                    <span class={styles.contact_text}>
                      <a href="tel:1-212-555-5555" title="Give me a call">
                        (+62) 123456789
                      </a>
                    </span>
                  </i>  
                </li> */}

                <li class={styles.list_item}>
                  <i class="fa fa-envelope fa-2x">
                    <span class={styles.contact_text}>
                      <a
                        href="mailto:info@thebalihills.com"
                        title="Send me an email"
                      >
                        info@thebalihills.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <hr />

              <div class={styles.copyright}>
                &copy; ALL OF THE RIGHTS RESERVED
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <div className={styles.chatbot_section}>
        {isOpen ? (
          <>
            <div className={styles.chatbot}>
              <section className={styles.chatbot_header}>
                <p>Chat with Us</p>
                <span className={styles.close_button}>
                  <i class="fa fa-close" onClick={() => setIsOpen(false)}></i>
                </span>
              </section>
              <section className={styles.chat_section}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                  >
                    <p>{message.message}</p>
                  </div>
                ))}
              </section>
              <section className={styles.chatbot_input}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <i class="fa fa-paper-plane"></i>
              </section>
            </div>
          </>
        ) : (
          <>
            <section className={styles.check} onClick={() => setIsOpen(true)}>
              <i class="fas fa-comment-alt"></i>
            </section>
          </>
        )}
      </div> */}
      <div style={{ position: "relative", height: "75vh", width: "100%" }}>
          <MainContainer>
            <ChatContainer >
              <MessageList
                style={{ textAlign : 'left', backgroundColor : '#f5f5f5', color : 'red', padding : '2.3em'}}
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="The Bali AI is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return <Message style={{color : 'black'}} key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
                style={{bottom : '1em'}}
              />
            </ChatContainer>
          </MainContainer>
        </div>
    </>
  );
}
