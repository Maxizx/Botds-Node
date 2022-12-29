const { Client, MessageEmbed: RichEmbed } = require('discord.js');

const Discord = require('discord.js')
const client = new Client();


const cb = require("./commands/0Caballeria")
const ds = require("./commands/0Rango")
const me = require("./commands/0Melee")
const va = require("./commands/0Varios")
const guia = require("./commands/0guia") 
const ar = require("./commands/1_armas")

const prefix = '*';

const fs = require('fs');
const { armas } = require('./commands/0guia');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
        const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);

} 



client.once('ready', () => {
    console.log('Bibliotemplo Abierto!');

    client.user.setPresence({
        status: "online",
        game: {
          name: "Usa la Sabiduria ",
          type: "STREAMING"
        }
      }); 

});

client.on('message' ,message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
   
    const args = message.content.slice(prefix.length);   
    const command = args.toLowerCase();                 


   var shouldBreak = true; 
   switch(command){

        //EMPIEZA 0GUIA
        case "unidades": 
        let arco = '🏹';
        let cab = '🐴';
        let melee = '🗡';
        
        message.channel.send("Que Tipo de unidad necesitas?").then(msg => {
            msg.react('🗡');
            msg.react('🐴');
            msg.react('🏹');
        
            // Creamos el filtro
            const filter = (reaction, user) => {
              return [arco, cab,melee].includes(reaction.emoji.name) 
                        && user.id == message.author.id;
            };
        
            msg.awaitReactions(filter, { max: 1, time: 20000 })
                .then(collection => {
                // Obtenemos todos los datos que nos retorna discord
                const reaction = collection.first();
        
                // Creamos un condicional para ejecutar
                // una acción u otra según la reacción
                if(reaction.emoji.name === arco) {
        
                    // Eliminamos las reacciones
                    msg.reactions.removeAll();
                    // Editamos el mensaje
                    const embed = new RichEmbed()
                    .setColor('GREYPLE')
                    .setTitle('Distancia Grises y verdes')
                    .setDescription('**Que Distancia estas buscando** :bow_and_arrow: \n\n *arcabuceros yelmo de hierro \n *arqueros de fuego \n *arqueros de leva \n *arqueros de señorio \n  *arqueros del dragon negro \n *arqueros milicianos \n  *arqueros yelmo de hierro \n *tiradores de ciervo blanco'
                    )
                    
                    const embed0 = new RichEmbed()
                    .setColor('#3B7BF4')
                    .setTitle('Azul')
                    .setDescription('*arbalesteros de señorio \n *arcabuceros de señorio \n *arqueros de fuego \n *arqueros de prefectura \n *arqueros de vanguardia \n *arqueros namkhan \n *arqueros vibora \n *ballesteros de señorio \n *fuego salvaje barciano  \n *mosqueteros jenizaros \n *perros de caza \n *tiradores con chu-ko-nu'
                    )
                                             
                  

                    const embed1 = new RichEmbed()
                    .setColor('#C200D5')
                    .setTitle('Violeta')
                    .setDescription('  *arcabuceros imperiales  \n *arqueros imperiales \n *arqueros vasallos \n *fusileros kriegsrat \n'
                    )
                    
                         
                

                    const embed2 = new RichEmbed()
                    .setColor('GOLD')
                    .setTitle('Dorada')
                    .setDescription('*arcabuceros de tercio \n *artilleros falconetti \n *ballesteros con paves \n *guardia prohibida \n *granaderos shenji \n *perros de caza '
                    )
                    
                         
                    .setFooter("*help")
                    
                    message.channel.send(embed);
                    message.channel.send(embed0);
                    message.channel.send(embed1);
                    message.channel.send(embed2);
        
                } else if(reaction.emoji.name === cab) {
        
                    // Eliminamos las reacciones
                    msg.reactions.removeAll();
                    // Editamos el mensaje
                    const embed = new RichEmbed()
                    .setColor('GREEN')
                    .setTitle('Caballeria Verdes')
                    .setDescription('Que Caballito estas buscando:horse: \n\n *arqueros montados yelmo de hierro \n *caballeria ligera yelmo de hierro \n *coustilleux \n')

                    const embed1 = new RichEmbed()
                    .setColor('#3B7BF4')
                    .setTitle('Azules')
                    .setDescription(' *caballeria selemchid \n *custodios \n *khorchins ')

                    const embed2 = new RichEmbed()
                    .setColor('#C200D5')
                    .setTitle('Violetas')
                    .setDescription(' *caballeria cipayos \n *caballeria khevtuul \n *caballeria pesada de prefectura \n *lanceros con hacha daga \n *yeomen \n *yeomen de la tundra ')

                    const embed3 = new RichEmbed()
                    .setColor('GOLD')
                    .setTitle('Doradas')
                    .setDescription(' *ballesteros montados \n *caballeria lancera de fuego \n *caballeria lancera del norte \n *caballeros monasticos \n *chevaliers \n *husares alados \n *keshigs \n *lanceros de catafracto')


                      
                 
                 
                    .setFooter("*help")
                
                        
                    message.channel.send(embed);
                    message.channel.send(embed1);
                    message.channel.send(embed2);
                    message.channel.send(embed3);


                } else if(reaction.emoji.name === melee){
                    msg.reactions.removeAll();
                    const embed = new RichEmbed()
                    .setColor('GREYPLE')
                    .setTitle('infanteria Gris y Verde')
                    .setDescription('**Que Infanteria estas buscando**:dagger: \n\n *centinelas aldeanos \n *espadachines con ratan \n *espadachines milicianos \n *espadachines yelmo de hierro \n *jabalineros de señorio \n  *jabalineros milicianos \n *lanceros de señorio \n *lanceros milicianos \n *lanceros yelmo de hierro \n *leñadores \n *martellalori \n *medieros \n *piqueros con ratan \n *piqueros de señorio \n *piqueros milicianos \n *siervos '
                    )

                    const embed1 = new RichEmbed()
                    .setColor('#3B7BF4')
                    .setTitle('Azules')
                    .setDescription('*alabarderos \n *alabarderos alpinos \n *alquimistas \n *condotieros \n *escuderos \n *gaiteros \n *guardas de prefectura \n *huargos fenris \n *jabalineros del dragon negro \n *lanceros del dragon negro \n *lanceros yelmo de hierro \n *monjes de garrote \n *piqueros de prefectura \n *piqueros del dragon negro \n '
                    )

                    const embed2 = new RichEmbed()
                    .setColor('#C200D5')
                    .setTitle('violetas')
                    .setDescription(' *berserkers de odin \n *caballeros de la expedicion \n *claymores \n *fuerzas armadas del imperio \n *guardas de palacio \n *guardia leal \n *guardianes de estandarte \n *guarnicion pelogris \n *hombres de armas \n *huskarls \n *jabalineros imperiales \n *lanceros de la guardia imperial \n *matones del hacha \n *mirmillones  \n *piqueros fortebraccio \n *piqueros imperiales \n *sargentos alabarderos \n *sargentos lanceros \n *tseregs'
                    )


                    const embed3 = new RichEmbed()
                    .setColor('GOLD')
                    .setTitle('Doradas')
                    .setDescription(' *guardia jenizara \n *guardia sigrun valkirias \n *guardia varega \n *modaos \n *reciarios  \n *segadores de hierro '
                    )
                    
                     
                    .setFooter("*help")
                
                    message.channel.send(embed);
                    message.channel.send(embed1);
                    message.channel.send(embed2);
                    message.channel.send(embed3);

                } else {
                    
                }


                
            })
          });
            //guia.unidades(message)
            break;
        case "infanterias": 
            guia.infan(message)
            break;

        case "distancias": 
            guia.distan(message)
            break;
        case "caballerias": 
            guia.caballe(message)
            break;
        case "piqueros":
            //Me.Picas(message)
            break;  
            
        //EMPIEZA CABALERRIA
        case "arqueros montados yelmo de hierro": 
            cb.CabYelHierro(message)
                break;
        case "ballesteros montados": 
            cb.BallMontados(message)
                break; 
        case "caballeria cipayos" : 
            cb.cipayos(message)
                break;  
        case "caballeria khevtuul" : 
            cb.khevtuul(message)
                break;    
        case "caballeria lancera de fuego" : 
            cb.Lancera_Fuego(message)
                break;    
        case "caballeria lancera del norte": 
            cb.LanceraNorte(message)
               break; 
        case "caballeria pesada de prefectura": 
            cb.PesadaPref(message) 
            break;
        case "caballeria selemchid": 
            cb.Selemchid(message) 
            break;  
        case "caballeria ligera yelmo de hierro": 
            cb.LigeraHierro(message)   
            break;    
        case "caballeros monasticos" : 
            cb.Monasticos(message)    
            break;    
        case "coustilleux" , "costillita": 
             cb.Coustilleux(message)   
            break; 
        case "husares alados": 
            cb.Alados(message)    
            break; 
        case "keshigs": 
            cb.Keshings(message)  
            break; 
        case "khorchins": 
            cb.Khorchins(message)   
            break; 
        case "lanceros con hacha daga": 
             cb.HachaDaga(message)  
            break;
        case "lanceros de catafracto" : 
             cb.Catafracto(message) 
            break;  
        case "yeomen": 
             cb.Yeomen(message) 
            break;  
        case "yeomen de la tundra": 
             cb.Tundra(message)    
            break;
        case "custodios": 
            cb.Custodios(message)   
            break; 
        case "chevaliers": 
            cb.Chevaliers(message)   
            break; 

        //EMPIEZA 0DISTANCIA    
        case "arbalesteros de señorio": 
            ds.arbsen(message)  
            break;  
        case "arcabuceros de señorio": 
            ds.arcsen(message)
            break;  
        case "arcabuceros de tercio": 
            ds.arcter(message)
            break;  
        case "arcabuceros imperiales": 
            ds.arcimp(message)
            break;  
        case "arcabuceros yelmo de hierro": 
            ds.arcydh(message)  
            break;  
        case "arqueros de fuego": 
            ds.arqfue(message)   
            break;  
        case "arqueros de leva": 
            ds.arqleva(message)   
            break;  
        case "arqueros de prefectura": 
            ds.arcpref(message)    
            break;  
        case "arqueros de señorio": 
            ds.arqsen(message)  
            break;  
        case "arqueros de vanguardia": 
            ds.arqvan(message)  
            break;  
        case "arqueros del dragon negro": 
            ds.arqdagon(message)  
            break;  
        case "arqueros imperiales": 
            ds.arqimp(message)  
            break;  
        case "arqueros milicianos": 
            ds.arqmil(message)
            break;  
        case "arqueros namkhan": 
            ds.niamcan(message)  
            break;
        case "arqueros vasallos": 
            ds.vasallos(message)   
            break;  
        case "arqueros vibora": 
            ds.vibora(message)   
            break;  
        case "arqueros yelmo de hierro": 
            ds.arqydh(message)   
            break;  
        case "artilleros falconetti": 
            ds.falcos(message)  
            break;  
        case "ballesteros con paves": 
            ds.paves(message)  
            break;  
        case "ballesteros de señorio": 
            ds.ballsen(message)  
            break;  
        case "fuego salvaje barciano": 
            ds.barciano(message)   
            break; 
        case "fusileros kriegsrat": 
            ds.kriesgrat(message)   
            break; 
        case "granaderos shenji": 
            ds.shenji(message)   
            break;        
        case "guardia prohibida": 
            ds.fuegos(message)   
            break;  
        case "mosqueteros jenizaros": 
            ds.mosqjeniz(message)   
            break; 
        case "perros de caza": 
            ds.perros(message)   
            break;  
        case "tiradores con chu-ko-nu": 
            ds.chukonu(message)   
            break;  
        case "tiradores de ciervo blanco": 
            ds.ciervoblanco(message)
            break;

// EMPIEZA 0MELEE  
        case "alabarderos": 
            me.alabard(message)   
            break; 
        case "alabarderos alpinos": 
            me.alpinos(message)   
            break; 
        case "alquimistas": 
            me.alqui(message)   
            break; 
        case "berserkers de odin": 
            me.berze(message)   
            break; 
        case "caballeros de la expedicion": 
            me.paladin(message)   
            break; 
        case "centinelas aldeanos": 
            me.centialdea(message)   
            break; 
        case "claymores": 
            me.clay(message)   
            break; 
        case "condotieros": 
            me.condos(message)   
            break; 
        case "escuderos": 
            me.escuderos(message)   
            break; 
        case "espadachines con ratan": 
            me.espratan(message)   
            break; 
        case "espadachines milicianos": 
            me.espmili(message)   
            break; 
        case "espadachines yelmo de hierro": 
            me.espaydh(message)   
            break; 
        case "fuerzas armadas del imperio": 
            me.fuerarmimp(message)   
            break; 
        case "gaiteros": 
            me.gaitero(message)   
            break; 
        case "guardas de palacio": 
            me.palacio(message)   
            break; 
        case "guardas de prefectura": 
            me.guardpref(message)   
            break; 
        case "guardia jenizara": 
            me.jenizara(message)   
            break; 
        case "guardia leal": 
            me.guardleal(message)   
            break; 
        case "guardia sigrun valkirias": 
            me.valki(message)   
            break; 
        case "guardianes de estandarte": 
            me.estandarte(message)   
            break; 
        case "guarnicion pelogris": 
            me.viejos(message)   
            break; 
        case "hombres de armas": 
            me.hombarma(message)   
            break; 
        case "huargos fenris": 
            me.fenrir(message)   
            break; 
        case "jabalineros de señorio": 
            me.jabseno(message)   
            break; 
        case "jabalineros del dragon negro": 
            me.jabdragon(message)   
            break; 
        case "jabalineros imperiales": 
            me.jabimpe(message)   
            break; 
        case "jabalineros milicianos": 
            me.jabmili(message)   
            break; 
        case "lanceros de la guardia imperial": 
            me.lancguarimp(message)   
            break; 
        case "lanceros de señorio": 
            me.lancseno(message)   
            break; 
        case "lanceros del dragon negro": 
            me.lancdragon(message)   
            break; 
        case "lanceros milicianos": 
            me.lancmili(message)   
            break; 
        case "lanceros yelmo de hierro": 
            me.lancydh(message)   
            break; 
        case "leñadores": 
            me.lenadores(message)   
            break; 
        case "martellalori": 
            me.marte(message)   
            break; 
        case "matones del hacha": 
            me.hacha(message)   
            break; 
        case "medieros": 
            me.medieros(message)   
            break; 
        case "modaos": 
            me.modao(message)   
            break; 
        case "monjes de garrote": 
            me.monjes(message)   
            break; 
        case "piqueros con ratan": 
            me.piqratan(message)   
            break; 
        case "piqueros de prefectura": 
            me.piqpref(message)   
            break; 
        case "piqueros de señorio": 
            me.piqsenorio(message)   
            break; 
        case "piqueros del dragon negro": 
            me.piqdragon(message)   
            break; 
        case "piqueros fortebraccio": 
            me.forte(message)   
            break;
        case "piqueros imperiales": 
            me.picimp(message)   
            break;
        case "piqueros milicianos": 
            me.piqmil(message)   
            break; 
        case "sargentos alabarderos": 
            me.sargalabar(message)   
            break; 
        case "sargentos jabalineros": 
            me.sargjab(message)   
            break; 
        case "sargentos lanceros": 
            me.sarglanc(message)   
            break; 
        case "segadores de hierro": 
            me.segadores(message)   
            break; 
        case "siervos": 
            me.siervos(message)   
            break; 
        case "tseregs": 
            me.tseregs(message)  
            break; 
        case "huskarls": 
            me.huskarls(message)
            break; 
        case "guardia varega": 
            me.varega(message)
            break; 
        case "mirmillones": 
            me.mirmidon(message)
            break; 
        case "reciarios": 
            me.reciarios(message)
            break; 

    //                                                                          ARMAS                                           //
        case "espada corta": 
            ar.EspadaC(message)   
            break; 

        case "espada larga": 
        ar.EspadaL(message)   
            break; 

        case "guja": 
            ar.Guja(message)   
            break; 

        case "arco corto": 
            ar.ArcoC(message)   
            break; 

        case "arco largo": 
            ar.Arco(message)   
            break; 

        case "lanza": 
            ar.Lanza(message)   
            break;

        case "pica": 
            ar.Pica(message)   
            break; 

        case "doble daga": 
            ar.DobleG(message)   
            break; 
            
            case "hacha de petos": 
            ar.HachaP(message)   
            break; 

            case "nodachi": 
            ar.Nodachi(message)   
            break; 

            case "mazo": 
            ar.Mazo(message)   
            break; 

            case "lanza": 
            ar.Lanza(message)   
            break; 

            case "mosquete": 
            ar.Mosquete(message)   
            break;


        case "artilleria": 
            client.commands.get('1_artilleria').execute (message, args, Discord);   
            break;
        case "armas": 
            guia.armas(message)   
            break;

       /*PRUEBA DE EMBED POR TEMPORADA
        case "temp":
            guia.temp(message)
            break;
       */

        //EMPIEZA EL 0VARIOS
        case "help": 
  
        va.help(message)

            break;
        case "never": 
            va.info(message)      
            break;
        case "athel": 
            va.Athel(message)           
            break;  
        case "nico": 
            va.N1ko(message)   
            break; 
        case "n1ko": 
            va.N1ko(message)   
            break;

        


        default: message.channel.send("Comando inexistente *help");


   }
  
   
});

client.on('message', message => {
    let frases =  ["Distintas cerraduras se deben abrir con diferentes llaves","El que teme sufrir ya sufre el temor","Si no quieres que se sepa, no lo hagas","El que hace el bien de los demás hace el suyo","Evita tener secretos si no quieres ser esclavo de ellos","No presumas cuando inicies tu camino, presume cuando regreses.", "El silencio es una gran fuente de fortaleza", "Es mejor encender una vela que maldecir la oscuridad", " No puedes evitar que el pájaro de la tristeza sobrevuele tu cabeza, pero puedes evitar que construya un nido en ella", "De las nubes más negras cae el agua más limpia y pura"]
let random = Math.floor(Math.random()*(frases.length))
if (message.content === 'sabiduria') {
    message.channel.send(frases[random])
}

if (message.content === 'sanerdo') {
    message.channel.send("Es SanerGOD")
}

if (message.content === 'patito') {
    message.channel.send("Que querés?")
}

if (message.content === 'niko') {
    message.channel.send("Nadie lo conoce")
}

if (message.content === 'coneja') {
    message.channel.send("Feudal Bobo")
}

if (message.content === 'angry') {
    message.channel.send("Putea a Patito, perdón, al feudal")
}

if (message.content === 'athel') {
    message.channel.send("viejo sabroso")
}

if (message.content === 'zordon') {
    message.channel.send("Chupalo")
}

if (message.content === 'chupalo') {
    message.channel.send("Vos")
}

if (message.content === 'inca') {
    message.channel.send("Cheveere causa")
}

if (message.content === 'tivu') {
    message.channel.send("Ponete a reclutar wacho!!!")
}

/*if (message.content === 'Argos') {
    message.channel.send("Ni me lo nombres, Hay manco mejores")
}
*/
if (message.content === '1') {
    message.channel.send("No!")
}

if (message.content === '2') {
    message.channel.send("Si!")
}

if (message.content === '3') {
    message.channel.send("Bienvenido!!! la casa es chica pero el corazón es grande")
}

if (message.content === '2') {
    message.channel.send("Si!")
}
});
client.login('ODcxODIzNzkwNTEyOTU1NDMy.YQg7LQ.1xcWzGAPx9hnsyyS1MegUDvAgNs');