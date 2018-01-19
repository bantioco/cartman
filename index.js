const discord   = require('discord.js')
const thebot    = new discord.Client()

const token     = 'the-both-token';


let random_cofee_gif = ()=>{

    let items = [
        "https://media1.tenor.com/images/9cfba060cd01109c47ca5eaff1f2cd46/tenor.gif",
        "https://media1.tenor.com/images/c9c72c9c4d3d361d493c769318ab05fc/tenor.gif",
        "https://media1.tenor.com/images/76fbe2bec2424fa6099e6eeb13bbcf29/tenor.gif",
        "https://media1.tenor.com/images/7e18ee1ff30e1227248c96dbf084d656/tenor.gif"
    ]

    let item = items[Math.floor(Math.random()*items.length)];

    return item;
}


//thebot.disconnect()

thebot.on('ready', () => {
    console.log('I am ready!');

    if(!thebot.user.avatarURL){
        console.log( thebot.user.avatarURL  )
        // Set avatar
        thebot.user.setAvatar('./cartman.png').catch(console.error);
    }

    bot_on_message()
});


let bot_on_message = ()=>{

    thebot.on('message', message => {

        let contentMessage = message.content
        let contentMessageLowercase = contentMessage.toLowerCase()
            contentMessageLowercase = removeAccent(contentMessageLowercase)

        let getReg = contentMessageLowercase

        let ContentYo       = "yo",
            ContentYop      = "yop",
            ContentSalut    = "salut",
            ContentHu       = "hu",
            ContentAfk      = "afk",
            ContentCafe     = "cafe"

        if ( getReg.indexOf(ContentYo) !== -1 || getReg.indexOf(ContentYop) !== -1 || getReg.indexOf(ContentSalut) !== -1 ) {
            setTimeout(function(){ message.channel.send("WAZAAAAAA !"); },1000)
        }
        if ( getReg.indexOf(ContentHu) !== -1 ) {
            setTimeout(function(){ message.channel.send("RRRRrrrr !!!"); },200)
        }
        if ( getReg.indexOf(ContentAfk) !== -1 ) {
            setTimeout(function(){ message.reply("Lacheur... "); },200)
        }
        if ( getReg.indexOf(ContentCafe) !== -1 ) {
            setTimeout(function(){ message.channel.send( random_cofee_gif() ); },1500)
        }

    });
}






let removeAccent = function(str){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

    //var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }

    return str;
}


thebot.login(token)


