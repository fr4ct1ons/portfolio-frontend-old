<script>
    let src = "assets/Logo final.svg"

    import {createEventDispatcher} from "svelte"
    import NavbarLink from "./NavbarLink.svelte"

    const dispatcher = createEventDispatcher();

    function ChangePage(event)
    {
        //alert(event.detail.linkIndex)
        dispatcher("ChangePage", {index: event.detail.linkIndex})
    }
</script>

<div class="Navbar">
    <ul class="Links">
        <a href = "fr4ct1ons.myportfolio.com"><img src={src} alt="FR4CT1ONS" class="Logo"></a>

        <NavbarLink name="ART GALLERY" on:ChangePage="{ChangePage}" index=0 linkType=LinkGallery pageLink = "https://fr4ct1ons.myportfolio.com/work" />
        <NavbarLink name="WHO AM I" on:ChangePage="{ChangePage}" index=1 linkType=LinkActive pageLink = "#"></NavbarLink>
        <NavbarLink name="GAMES" on:ChangePage="{ChangePage}" index=2 linkType=LinkGallery pageLink = "https://fr4ct1ons.myportfolio.com/full-gallery"></NavbarLink>
        <NavbarLink name="SOFTWARE" on:ChangePage="{ChangePage}" index=3 linkType=LinkGallery pageLink = "https://fr4ct1ons.myportfolio.com/software"></NavbarLink>

    </ul>
</div>

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