<li><a on:click={ChangePage} class="{linkType}" >{name}</a></li>

<script>
    import {createEventDispatcher} from "svelte"

    function ChangePage()
    {
        //alert(index);
        dispatcher("ChangePage", {linkIndex: index});
    }

    export let pageLink = "#"
    export let linkType = ""
    export let name = "Link"
    export let index = 1;
    const dispatcher = createEventDispatcher();
</script>

<style>
li a 
{
    float: right;
}

a
{
    display: block;
    margin: 8px;
    font-size: 200%;
    text-decoration: none;
}

.LinkActive
{
    color : rgb(255, 0, 0);
}

.LinkGallery
{
    color : rgb(220,85,220);
}

.LinkPage
{
    color : rgb(225,220,80);
}
</style>