import React from "react";
import Page from "../components/Page";
import GalleryEntry from "../components/GalleryEntry"

export default function ArtGallery() {
  return (
    <div>
      <Page title = "ART" subtitle = "Art pieces I made"></Page>
      <GalleryEntry title="Workbench" 
      img="https://pro2-bar-s3-cdn-cf6.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/72bce5f9-2596-4820-b1b7-dd2a0bd7d964.jpg?h=9446e874cc19b1da82695f7fc0dc722c"
      url="https://fr4ct1ons.myportfolio.com/inktober-2019"></GalleryEntry>
      <GalleryEntry title="Unreal water shader"
      img="https://pro2-bar-s3-cdn-cf5.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/6f71a0c5-8cc3-4d7d-9b74-bf2a0bcc2a8d.png?h=f74f57784e5d1808d20b4f08dbc531de"
      url="https://fr4ct1ons.myportfolio.com/stylized-unreal-ocean-water-shader"></GalleryEntry>
    </div>
  )
}