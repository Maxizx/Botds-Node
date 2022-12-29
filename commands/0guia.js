const { MessageActionRow, MessageButton, MessageEmbed: RichEmbed } = require('discord.js');
const code = "version 1.0.1" 
module.exports = {

armas : function (message){
    const embed = new RichEmbed()
    .setColor('WHITE')
    .setTitle('Armas')

    .addField("Agilidad","*arco corto \n *arco largo \n *lanza \n *mosquete \n *pica" , false)
    .addField("Armadura","*espada Corta \n *espada Largo \n *hacha de petos \n *mazo " , false)
    .addField("Fuerza","*doble daga \n *guja \n *mosquete \n *nodachi" , false)
    /*.addFields(
        {name: ":dagger:", value: 
        "*alabarderos \n*alabarderos alpinos \n *alquimistas \n *berserkers de odin \n *caballeros de la expedicion \n *centinelas aldeanos \n *claymores \n *condotieros \n *escuderos \n *espadachines con ratan \n *espadachines milicianos \n *espadachines yelmo de hierro \n *fuerzas armadas del imperio \n *gaiteros \n *guardas de palacio \n *guardas de prefectura \n *guardia jenizara \n *guardia leal \n *guardia sigrun valkirias \n *guardianes de estandarte \n *guarnicion pelogris \n *hombres de armas \n *huargos fenris \n *jabalineros de señorio \n *jabalineros del dragon negro \n *jabalineros imperiales \n *jabalineros milicianos \n *lanceros de la guardia imperial \n *lanceros de señorio \n *lanceros del dragon negro \n *lanceros milicianos \n *lanceros yelmo de hierro \n *leñadores \n *martellalori \n *matones del hacha \n *medieros \n *modaos \n *monjes de garrote \n *piqueros con ratan \n *piqueros de prefectura \n *piqueros de señorio \n *piqueros del dragon negro \n *piqueros fortebraccio \n *piqueros imperiales \n *piqueros milicianos \n *sargentos alabarderos \n *sargentos jabalineros \n *sargentos lanceros \n *segadores de hierro \n *siervos \n *tseregs"
        },
    )*/
     
    .setFooter(code)

    message.channel.send(embed);
},

infan : function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('infanteria')
        .setDescription('**Que Infanteria estas buscando**:dagger: \n\n *alabarderos \n*alabarderos alpinos \n *alquimistas \n *berserkers de odin \n *caballeros de la expedicion \n *centinelas aldeanos \n *claymores \n *condotieros \n *escuderos \n *espadachines con ratan \n *espadachines milicianos \n *espadachines yelmo de hierro \n *fuerzas armadas del imperio \n *gaiteros \n *guardas de palacio \n *guardas de prefectura \n *guardia jenizara \n *guardia leal \n *guardia sigrun valkirias \n *guardianes de estandarte \n *guarnicion pelogris \n *hombres de armas \n *huargos fenris \n *huskarls \n *jabalineros de señorio \n *jabalineros del dragon negro \n *jabalineros imperiales \n *jabalineros milicianos \n *lanceros de la guardia imperial \n *lanceros de señorio \n *lanceros del dragon negro \n *lanceros milicianos \n *lanceros yelmo de hierro \n *leñadores \n *martellalori \n *matones del hacha \n *medieros \n *modaos \n *monjes de garrote \n *piqueros con ratan \n *piqueros de prefectura \n *piqueros de señorio \n *piqueros del dragon negro \n *piqueros fortebraccio \n *piqueros imperiales \n *piqueros milicianos \n *sargentos alabarderos \n *sargentos jabalineros \n *sargentos lanceros \n *segadores de hierro \n *siervos \n *tseregs'
        )
        /*.addFields(
            {name: ":dagger:", value: 
            "*alabarderos \n*alabarderos alpinos \n *alquimistas \n *berserkers de odin \n *caballeros de la expedicion \n *centinelas aldeanos \n *claymores \n *condotieros \n *escuderos \n *espadachines con ratan \n *espadachines milicianos \n *espadachines yelmo de hierro \n *fuerzas armadas del imperio \n *gaiteros \n *guardas de palacio \n *guardas de prefectura \n *guardia jenizara \n *guardia leal \n *guardia sigrun valkirias \n *guardianes de estandarte \n *guarnicion pelogris \n *hombres de armas \n *huargos fenris \n *jabalineros de señorio \n *jabalineros del dragon negro \n *jabalineros imperiales \n *jabalineros milicianos \n *lanceros de la guardia imperial \n *lanceros de señorio \n *lanceros del dragon negro \n *lanceros milicianos \n *lanceros yelmo de hierro \n *leñadores \n *martellalori \n *matones del hacha \n *medieros \n *modaos \n *monjes de garrote \n *piqueros con ratan \n *piqueros de prefectura \n *piqueros de señorio \n *piqueros del dragon negro \n *piqueros fortebraccio \n *piqueros imperiales \n *piqueros milicianos \n *sargentos alabarderos \n *sargentos jabalineros \n *sargentos lanceros \n *segadores de hierro \n *siervos \n *tseregs"
            },
        )*/
         
        .setFooter(code)
    
        message.channel.send(embed);
        },

distan : function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Distancia')
        .setDescription('**Que Distancia estas buscando** :bow_and_arrow: \n\n *arbalesteros de señorio \n  *arcabuceros de señorio \n *arcabuceros de tercio \n *arcabuceros imperiales \n *arcabuceros yelmo de hierro \n *arqueros de fuego \n *arqueros de leva \n *arqueros de prefectura \n *arqueros de señorio \n *arqueros de vanguardia \n *arqueros del dragon negro \n *arqueros imperiales \n *arqueros milicianos \n *arqueros namkhan \n *arqueros vasallos \n *arqueros vibora \n *arqueros yelmo de hierro \n *artilleros falconetti \n *ballesteros con paves \n *ballesteros de señorio \n *fuego salvaje barciano \n *fusileros kriegsrat \n *guardia prohibida \n *granaderos shenji \n *mosqueteros jenizaros \n *perros de caza \n *tiradores con chu-ko-nu \n *tiradores de ciervo blanco'
        )
        /*.addFields(
            {name: ":bow_and_arrow:", value: 
            "*arbalesteros de señorio \n  *arcabuceros de señorio \n *arcabuceros de tercio \n *arcabuceros imperiales \n *arcabuceros yelmo de hierro \n *arqueros de fuego \n *arqueros de leva \n *arqueros de prefectura \n *arqueros de señorio \n *arqueros de vanguardia \n *arqueros del dragon negro \n *arqueros imperiales \n *arqueros milicianos \n *arqueros namkhan \n *arqueros vasallos \n *arqueros vibora \n *arqueros yelmo de hierro \n *artilleros falconetti \n *ballesteros con paves \n *ballesteros de señorio \n *fuego salvaje barciano \n *fusileros kriegsrat \n *guardia prohibida \n *granaderos shenji \n *mosqueteros jenizaros \n *perros de caza \n *tiradores con chu-ko-nu \n *tiradores de ciervo blanco"
            },
           
        )*/
             
        .setFooter(code)
        
        message.channel.send(embed);
    },


caballe : function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Caballeria')
        .setDescription('Que Caballito estas buscando:horse: \n\n *arqueros montados yelmo de hierro \n  *ballesteros montados \n *caballeria cipayos \n *caballeria khevtuul \n *caballeria lancera de fuego \n *caballeria lancera del norte \n *caballeria pesada de prefectura \n *caballeria selemchid \n *caballeria ligera yelmo de hierro \n *caballeros monasticos \n *chevaliers \n *coustilleux \n *custodios \n *husares alados \n *keshigs \n *khorchins \n *lanceros con hacha daga \n *lanceros de catafracto \n *yeomen \n *yeomen de la tundra ')
        /*.addFields(
            {name: ":horse:", value: 
            "*arqueros montados yelmo de hierro \n  *ballesteros montados \n *caballeria cipayos \n *caballeria khevtuul \n *caballeria lancera de fuego \n *caballeria lancera del norte \n *caballeria pesada de prefectura \n *caballeria selemchid \n *caballeria ligera yelmo de hierro \n *caballeros monasticos \n *chevaliers \n *coustilleux \n *custodios \n *husares alados \n *keshigs \n *khorchins \n *lanceros con hacha daga \n *lanceros de catafracto \n *yeomen \n *yeomen de la tundra"
            },
           
        )*/
                 
        .setFooter(code)
            
        message.channel.send(embed);
    },
    temp :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Temporada 2')
        .setDescription('')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'**Unidades Presentes**', value: '*arqueros namkhan \n *caballeria selemchid \n **khorchins \n \n \n *tseregs \n *caballeria khevtuul \n \n \n *keshigs'},
           {name:'Recomendaciones', value: 'Arqueros Namkhan: Se destacan por su desangrado (habilidad que se activa con el 2) que provoca un daño continuo dificultando que los heroes enemigos afectados se curen. Haciendo que sean una buena tropa para inicos de season (guerras azules) y zafables para las siguientes estapas \n\n Caballeria Selemchid: Con un muy corto tiempo de CD y un Magnifico daño de carga que logra arrasar con todo lo que se le atraviese en el camino, si no fuera por su poca vida y defensa sería de las mejores, muy útil para inicio de season (guerra de azules)\n\n keshigs: Veloces, gran daño a heroe, son las cosas que se necesita para destacarse como una de las mejores caballerias, al igual que los selemchid son muy debiles pero esto no significa que sean malos'},
            /*{name:'Uso guerra', value: 'PRINCIPAL tarea es impedir que los enemigos coloquen artilleria (voleadoras, Disparo aturdidor y Avispones furiosos impiden esto) y en el caso de q que esté puesta romperla,Deletear  heroes con poca vida y entrar en pvps y salir sin morir'},
            {name:'Atributos', value: '100% Agilidad'},*/
    
        )
        .setImage("https://media.discordapp.net/attachments/1011681718278832179/1011682294639116288/unknown.png?width=720&height=316")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },






}
