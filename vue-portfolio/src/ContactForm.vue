<template>
  <div align="center" class="ContactForm">
        <form @submit.prevent="onSubmit">
        <label for="email">Email</label><br/>
        <input type="email" placeholder="name@provider.com" v-model="email" onChange={this.onChange} />
        <br/>
        <label for="subject">Subject</label><br/>
        <input type="text" placeholder="A subject" v-model="subject" onChange={this.onChange} />
        <br/>
        <label for="message">Text</label><br/>
        <textarea placeholder="Your message here" v-model="message" onChange={this.onChange} />
        <br/>
        <input type="submit" value="Send"/>
        </form>
    </div>
</template>

<script>
import { isSubjectValid, isEmailValid, isMessageValid } from "./validation.js";

export default {

    data: function()
    {
        return {
        email: "",
        subject: "",
        message: ""
        }
    },
    methods: 
    {
        onSubmit()
        {
            const errorEmail = isEmailValid(this.email);
            const errorSubject = isSubjectValid(this.subject);
            const errorMessage = isMessageValid(this.message);

            if(!errorEmail)
                alert("Please, insert a valid email.")
            else if(!errorSubject)
                alert("Please, insert a valid subject.")
            else if(!errorMessage)
                alert("Please, make sure the message field is not empty.")
            else
            {
                alert("All good!");
            }
        }
    }
}
</script>

<style>
.ContactForm
{
    width: 60%;
    margin: auto;
}

.ContactForm label
{
    color: white;
    float: left;
}

.ContactForm input
{
    padding: 10px 0;
    font-size: 115%;
    text-align: center;
    border: none;
    width: 100%;
    border-bottom: 2px solid red;
    background-color: rgb(48, 48, 48);
    color:rgb(235, 235, 235);
    margin-bottom: 2.5%;
}

.ContactForm label
{
    font-weight: 500;
    margin-bottom: 1%;
}

.ContactForm input[type=submit]
{
    width: fit-content;
    padding: 2%;
    font-size: 150%;
}

.ContactForm textarea
{
    padding: 10px 0;
    font-size: 140%;
    text-align: center;
    border: none;
    width: 100%;
    height: 175px;
    border-bottom: 2px solid red;
    background-color: rgb(48, 48, 48);
    color:rgb(255, 255, 255);
    margin-bottom: 2.5%;
    resize: none;
}
</style>