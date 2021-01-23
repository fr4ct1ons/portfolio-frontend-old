import React from "react";
import Page from "../components/Page";
import GalleryEntry from "../components/GalleryEntry"
import Layout from "../components/layout";

export default function Games() {
  return (
    <Layout>
      <Page title = "GAMES" subtitle = "Games I worked on"></Page>
      <GalleryEntry title="Single Fighter"
      img="https://raw.githubusercontent.com/lucena-fr4ct1ons/lucena-fr4ct1ons.github.io/master/games/games-assets/Single%20Fighter%20title.png"
      url="games/singleFighter"></GalleryEntry>
      <GalleryEntry title="Poço Frio"
      img="https://raw.githubusercontent.com/lucena-fr4ct1ons/lucena-fr4ct1ons.github.io/master/games/games-assets/Single%20Fighter%20title.png"
      url="games/pocoFrio"></GalleryEntry>
    </Layout>
  )
}