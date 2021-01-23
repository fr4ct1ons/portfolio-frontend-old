import React from "react";
import Page from "../../components/Page";
import pageStyles from "../../styles/pageStyles.module.css"
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { StyledLink } from "../../components/StyledLink";

export default function PocoFrio() {
  return (
    <Layout>
    <div className={pageStyles.PageContent}>
      <Page title = "SINGLE FIGHTER" subtitle = "A single character fighting game"></Page>
      <p>Young kids are mysteriously disappearing in the small town of Extremoz, on the east of the Rio Grande do Norte State, in Brazil. The townsfolk pray for the saint to bring the children back and as a dead cangaceira, you must obtain redemption and pay for your sins by investigating what is going on and bring the children back to safety.</p>
      <p>Play the game now on <StyledLink to="https://gamejolt.com/games/pocofrio/454479">GameJolt</StyledLink>!</p>
      <p>This game was made during Natal Game Jam 2019, a game jam hosted by the town hall, in which my team achieved third place! Check my <StyledLink to="https://twitter.com/fr4ct1ons/status/1204766201731256320">Twitter post</StyledLink> about the subject.</p>
      <p>My responsibilities included developing the player controller, weapon scripts, setting up animations and materials and part of menu navigation and AI programming.</p>
      <img src="https://pro2-bar-s3-cdn-cf.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/b36fc2de-cc7d-49aa-b589-64c2c76c9457.png?h=57b117e5219352288885fc7c614f3260"/>
    </div>
    </Layout>
  )
}