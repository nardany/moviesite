import style from "./About.module.css";
import { Sponsor,Submit, } from "../../assets/Icons";
import about from "../../assets/about.jpg"
export default function About() {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.description}>
          <h3>About us</h3>
          <p>
            At DailyHub, we curate a diverse collection of uplifting content to
            fuel your creativity and spark new ideas every day. Whether you're a
            seasoned designer, a budding artist, or someone seeking daily
            motivation, we've got you covered.
          </p>
          <p>
            Explore our curated selection of inspiring stories, design trends,
            and thought- provoking content that aims to elevate your daily
            experiences. Join our community of creative minds and embark on a
            journey of continuous inspiration.
          </p>
          <p>
            DailyHub is more than just a website, it's a hub for those who seek
            to infuse their daily lives with creativity, innovation, and
            positive vibes. Let's inspire and be inspired together!
          </p>
        </div>
        <div className={style.sponsor}>
          <h3>A Sponsor</h3>
          <p>Open for new Sponsorships!</p>
          <button>
            <Sponsor /> A Sponsor
          </button>
        </div>
        <div className={style.submit}>
          <h3>Submit</h3>
          <p>
            Seeking top-notch tools for designers! Submit your recommendations
            via our form, each is manually approved for the highest standards.
            Join us in shaping design excellence!
          </p>
          <button>
            Submit 
            <Submit/>
          </button>
        </div>
      </div>
        <div className={style.clipped}>
                <img src={about} alt="" />
        </div>
    </div>
  );
}
