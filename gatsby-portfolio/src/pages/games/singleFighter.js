import React from "react";
import Page from "../../components/Page";
import pageStyles from "../../styles/pageStyles.module.css"
import Layout from "../../components/layout";

export default function SingleFighter() {
  return (
    <Layout>
    <div className={pageStyles.PageContent}>
      <Page title = "SINGLE FIGHTER" subtitle = "A single character fighting game"></Page>
      <p>In most fighting games, you have multiple character choices, and that makes some characters more powerful than others, such as Eddy on Tekken and Bayonetta on Super Smash Bros. for Wii U/3DS. But what happens when you have only ONE CHARACTER option? Now THIS is a fight where it comes down to skill! (or not)</p>
      <p>Play the game now on Itch.io! https://fr4ct1ons.itch.io/single-fighter</p>
      <p>This game was made for the GMTK Game Jam 2019. The postmortem can be found here.</p>
      <p>Everything made by me.</p>
      <img src="https://pro2-bar-s3-cdn-cf.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/b36fc2de-cc7d-49aa-b589-64c2c76c9457.png?h=57b117e5219352288885fc7c614f3260"/>
    </div>
    </Layout>
  )
}