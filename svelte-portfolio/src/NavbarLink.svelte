<li><a href="{pageLink}" class="{linkType}" >{name}</a></li>

<script>
    export let pageLink = "#"
    export let linkType = ""
    export let name = "Link"
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