import { Icon } from "../ui";

import s from "./heroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={s.heroSection}>
      <div className={s.heroSection_body}>
        <div className={s["heroSection_body-block"]}>
          <p className={s["heroSection_body-tag"]}>&lt;h1&gt;</p>
          <h2>
            Hey
            <br /> I'm <span>Denys</span>,<br /> Full-Stack Developer
          </h2>
          <span className={s["heroSection_body-tag"]}>&lt;/h1&gt;</span>
        </div>

        <div className={`${s["heroSection_body-block"]} ${s.info}`}>
          <p className={s["heroSection_body-tag"]}>&lt;p&gt;</p>
          <p className={s["heroSection_body-about"]}>
            I make great web applications for businesses. If you’re looking for
            a developer that likes to get stuff done,
          </p>
          <span className={s["heroSection_body-tag"]}>&lt;/p&gt;</span>
        </div>

        <button
          onClick={() =>
            (window.location.href = "mailto:matveevdenis458@gmail")
          }
          type="button"
          className={s["heroSection_body-talk"]}
        >
          <p>Let’s Talk</p>
          <div>
            <Icon name="mail" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
