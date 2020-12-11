import React from "react";
import Page from "../components/Page";
import GalleryEntry from "../components/GalleryEntry"
import Layout from "../components/layout";

export default function ArtGallery() {
  return (
    <Layout>
        <Page title = "SOFTWARE" subtitle = "Software I developed"></Page>
        <GalleryEntry title="Unity Cel-Shaded Render Pipeline"
        img="https://pro2-bar-s3-cdn-cf3.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/485ffae0-7448-4fd9-915a-61f7192ede9f.png?h=2be02d12d0958faae66818c150bba371"
        url="https://fr4ct1ons.myportfolio.com/cel-shaded-render-pipeline"></GalleryEntry>
    </Layout>
  )
}