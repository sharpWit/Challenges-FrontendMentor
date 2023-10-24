import styles from "./QrCode.module.css";

const QrCode = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.visual}>
          <img src="/qr-code/image-qr-code.png" alt="" />
        </div>
        <div className={styles.textual}>
          <h1 className={styles.title}>
            Improve your front-end skills by building new projects
          </h1>
          <p className={styles.desc}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
