const { MessageEmbed: RichEmbed ,  Messagereactions: DiscordReactionManager, MessageReactionemoji: DiscordGuildEmoji ,DiscordReactionEmoji} = require('discord.js');
const { unidades } = require('./0guia');
const code = "version 1.0.1" 
const Discord = require('discord.js');

module.exports = {

    Picas :function (message){
        const embed = new RichEmbed()

        .setColor('#4F039A')
        .setTitle('Piqueros')
        .setDescription('Con su avance imperial frenan toda la caballeria y tiran tropas al piso.')
        .addFields(
            {name:'Honor: ', value: '240'},
            {name:'Desbloqueo: ', value: 'Honor'}

        )        
        .setImage('https://cdn.discordapp.com/attachments/872217348847857727/872218382747963392/unknown.png')
        .setFooter(code)

        message.channel.send(embed);
    
    },

    Athel :function (message){
        const embed = new RichEmbed()

            message.channel.send('viejo sabroso');
        },

    N1ko :function (message){
        const embed = new RichEmbed()
            message.channel.send('Chupalo');
    },

    info :function (message){
        const embed = new RichEmbed()

        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    },

    help : function ( message ){

       const help = new RichEmbed()
        .setColor('#FDFDFD')
        .setTitle('Help')
        .setDescription('COMANDOS')
        .addFields(
            {name:'*unidades', value:'listado de tropas categorizado por " *infanteria " " *distancia " y " *caballeria " \n'},
            {name:'*artilleria', value:'lista de artillerias y materiales para craftear \n'},
            {name:'*armas', value:'enciclopedia de armas y habilidades'}         

        )
        .setImage("https://www.meme-arsenal.com/memes/cbe3663fd279541ba0b37485881fc0dd.jpg")
     
        
        message.channel.send(help);
    },

help1 : function (message){

    let ayuda = '❔';
            message.channel.send("Necesitas ayuda?").then(msg => {
               
        msg.react('❔');
            
                // Creamos el filtro
                const filter = (reaction, user) => {
                  return [ayuda].includes(reaction.emoji.name) 
                            && user.id == message.author.id;
                };

                msg.awaitReactions(filter, { max: 1, time: 20000 })
                        .then(collection => {
                        // Obtenemos todos los datos que nos retorna discord
                        const reaction = collection.first();
                
                        // Creamos un condicional para ejecutar
                        // una acción u otra según la reacción
                        if(reaction.emoji.name === ayuda) {

                            const help = new RichEmbed()
                            .setColor('#FDFDFD')
                            .setTitle('Help')
                            .setDescription('COMANDOS')
                            .addFields(
                                {name:'*unidades', value:'listado de tropas categorizado por " *infanteria " " *distancia " y " *caballeria " \n'},
                                {name:'*artilleria', value:'lista de artillerias y materiales para craftear \n'},
                                {name:'*armas', value:'enciclopedia de armas y habilidades'}         
                    
                            )
                            .setImage("https://www.meme-arsenal.com/memes/cbe3663fd279541ba0b37485881fc0dd.jpg")
                         
                            
                            message.channel.send(help);
                            // Eliminamos las reacciones
                            msg.reactions.removeAll();
                            // Editamos el mensaje
             
                            message.channel.send(help);
                        }})
                    })
         
},









    boton :async function (client, message, args, discor){
        //% BUTTONS
  const btn1 = new Discord.MessageButton()
    .setCustomId("acp")
    .setLabel("Acepto")
    .setStyle("SUCCESS");
  const btn2 = new Discord.MessageButton()
    .setCustomId("deg")
    .setLabel("No Acepto")
    .setStyle("DANGER");
  //% BUTTONS

  //& FILA

  const fila = new Discord.MessageActionRow()
  .addComponents(btn1, btn2);

  //& FILA

  //# MENSAJES

  const msgE = {
    title: "Reglas",
    description: "Estas son las reglas de tu canal",
    color: 65535,
    author: {
      name: "servidor",
      icon_url: "https://i.imgur.com/H37kxPH.jpeg",
    },
  };

  //# MENSAJES

  const m = message.channel.send({ embeds: [msgE], components: [fila] });

  const ifilter = i => i.user.id === message.author.id;

  const collector = m.createMessageComponentCollector({filter: ifilter})

  collector.on("collect", async i => {
if(i.customId === "acp")
await i.deferReply({ ephemeral: true });
i.followUp({ content: "Hola" });

if (interaction.isButton()) {
interaction.deferReply({ ephemeral: true });
interaction.followUp({ content: "Hola" });

const member = interaction.member;

if (interaction.customId === "acp") {
let rol = "978731590563794954";
member.roles.add(rol);
return console.log("Acepto");
}
if (interaction.customId === "deg") {
member.kick();
return console.log("No Acepto");
}
}


  })
}


    
    
};




