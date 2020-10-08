<template>
    <li><a v-on:click="ChangePage(index)" v-bind:class=linkType>{{name}}</a></li>
</template>


<script>
//v-bind:href=pageLink
export default {
    props: ["name", "linkType", "pageLink", "index"],
    data: function()
    {
        return {
            
        }
    },
    methods: 
    {
        ChangePage(index )
        {
            //alert(index);
            this.$emit("ChangePage", index)
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