import classes from './about.module.css';

function About() {
  return (
    <section className={classes.about} id='about'>
      <h1>About</h1>
      <div className={classes.container}>
        <div>
          <p>
            I graduated from Erciyes University with a degree in Tourism Guiding
            and have been leading tours in English and Brazilian Portuguese.
            Gaming has always been a great hobby of mine and I aspired to work
            with the developers whose works I admired. I didn't have any
            programming knowledge so I decided to use my English skills.
          </p>
        </div>
        <div>
          <p>
            After deciding to actively participate in the gaming industry, I
            joined forces with a group with whom we localized two great games,
            ES:Skyrim and Mass Effect 3. These fan translations of two well
            known titles gave me the experience I needed to start working on a
            more professional level.
          </p>
        </div>
        <div>
          <p>
            Since my participation in those fan translations, I have worked on
            multiple titles on platforms like PC, mobile and Xbox. In order to
            reach these developers, I visited important gaming conventions such
            as Gamescom and GamingIstanbul in a professional capacity to
            introduce myself and the company I was working with.
          </p>
        </div>
        <div>
          <p>
            Recently, I have taken great interest in programming languages such
            as C# and Javascript. To further my involvement with programming, I
            decided to study Computer Programming in Dokuz Eylül University
            located in Izmir, Turkey. I'm currently on the lookout for new
            opportunities to learn more about programming.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
