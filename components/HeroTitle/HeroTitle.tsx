import styles from "./HeroTitle.module.css";

export default function HeroTitle({ subtitle, children, accentColor } : any) {
  return (
    <div
      className={`flex flex-col w-full space-y-6 py-12 max-w-screen-2xl ${accentColor}`}
    >
      <span className={styles.subtitle}>{subtitle}</span>
      <h3 className={styles.title}>{children}</h3>
    </div>
  );
}
