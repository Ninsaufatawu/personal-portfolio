export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/poster.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="about--description hero--section-description">
          Hey there, I'm Ninsau Abdul Fatawu, a full-stack developer passionate about crafting exceptional digital experiences.
          I specialize in front-end technologies like HTML, CSS, and JavaScript, along with frameworks like React.js. 
          On the back end, I'm skilled in Node.js and Express.js, building robust server-side solutions. <br />
          </p>
          <p className="about--description hero--section-description">
          Outside of coding, I thrive on UI/UX design, using tools like Adobe XD and Figma to create intuitive interfaces. 
          Whether it's refining user journeys or perfecting color palettes, I'm all about creating memorable experiences. <br />
          </p>
          <p className="about--description hero--section-description">
          In my spare time, I'm constantly exploring new technologies, experimenting with side projects, and contributing to open-source communities.
           I'm committed to continuous learning and pushing the boundaries of what's possible in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
}
