<template>
    <li><a v-bind:href=pageLink v-bind:class=linkType>{{name}}</a></li>
</template>

<script>
export default {
    props: ["name", "linkType", "pageLink"],
    data: function()
    {
        return {
            
        }
    }
}
</script>

<style>
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