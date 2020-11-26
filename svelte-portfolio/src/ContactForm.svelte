<script>
    function isEmailValid(value)
    {
        if(value.trim() === "")
        {
            return false;
        }

        return true;
    }

    function isSubjectValid(value)
    {
        if(value.trim() === "")
        {
            return false;
        }

        return true;
    }

    function isMessageValid(value)
    {
        if(value.trim() === "")
        {
            return false;
        }

        return true;
    }

    let email = "";
    let subject = "";
    let message = "";

    function onSubmit()
    {
        //console.log(email);

        const errorEmail = isEmailValid(email);
        const errorSubject = isSubjectValid(subject);
        const errorMessage = isMessageValid(message);

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
</script>

<main>
    <div align="center" class="ContactForm">
        <form on:submit|preventDefault={onSubmit}>
        <label for="email">Email</label><br/>
        <input type="email" placeholder="name@provider.com" bind:value={email} onChange={this.onChange} />
        <br/>
        <label for="subject">Subject</label><br/>
        <input type="text" placeholder="A subject" bind:value={subject} onChange={this.onChange} />
        <br/>
        <label for="message">Text</label><br/>
        <textarea placeholder="Your message here" bind:value={message} onChange={this.onChange} />
        <br/>
        <input type="submit" value="Send"/>
        </form>
    </div>
</main>

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