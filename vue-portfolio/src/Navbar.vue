<template>
    <div class="Navbar">
        <ul class="Links">
            <a href = "fr4ct1ons.myportfolio.com"><img alt="FR4CT1ONS" src="./assets/Logo final.svg" class="Logo"></a>
            <NavbarLink name="ART GALLERY" index=0 @ChangePage="ChangePage" linkType=LinkGallery pageLink = "https://fr4ct1ons.myportfolio.com/work" />
            <NavbarLink name="WHO AM I" index=1 @ChangePage="ChangePage" linkType=LinkActive pageLink = "#"></NavbarLink>
            <NavbarLink name="GAMES" index=2 @ChangePage="ChangePage" linkType=LinkGallery pageLink = "https://fr4ct1ons.myportfolio.com/full-gallery"></NavbarLink>
            <NavbarLink name="SOFTWARE" index=3 @ChangePage="ChangePage" linkType=LinkGallery pageLink = "https://fr4ct1ons.myportfolio.com/software"></NavbarLink>

        </ul>
    </div>
</template>

<script>
import NavbarLink from "./NavbarLink.vue"

export default {
    created() {
        this.$emit("pageChangeMethod");
    },
    props:["pageChangeMthod"],
    components :
    {
        NavbarLink
    },
    data: function()
    {
        return {
            
        }
    },
    methods: {
        ChangePage(index )
        {
            //alert(index)
            this.$emit("ChangePage", index)
        }
    }
}
</script>

<style>
.Navbar
{
    background-color: rgb(70, 70, 70);
    overflow: hidden;
    padding: 14px;
    display: block;
    margin-bottom: 25px;
}

.Links
{
    list-style-type: none;
    margin: 0;
    height: 60px;
    padding: 0;
    overflow: hidden
}

.Links li
{
    float: right;
}

.Links li a
{
    display: block;
    margin: 8px;
    font-size: 200%;
    text-decoration: none;
}

.Logo
{
    height: 100%;
    float: left;
}
</style>