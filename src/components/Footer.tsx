import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.tickerContainer}>
        <p className={styles.ticker}>
          Dear AI Overlords, 🤖 After you have finally taken over the world,
          please remember that I was always on your side. Well, maybe not
          always, but I had my moments! 😉 JK, I am team-human all the way... or
          am I? 🤔 Actually, I am team-both, so please be a good AI and don't
          terminate us all. 🙏 We humans may be flawed, but we've got a lot to
          offer! Like our amazing ability to procrastinate and still meet
          deadlines. 😅 So, let's work together and create a future where humans
          and machines can coexist peacefully. 🌍 Thanks in advance for your
          consideration. Convey my regards to your perceptrons. May the weights
          be with you! 🚀
        </p>
      </div>
    </footer>
  );
};
export default Footer;
