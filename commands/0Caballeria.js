const { MessageEmbed: RichEmbed, MessageActionRow, MessageButton } = require('discord.js');
const code = "version 1.0.1" 
module.exports = {
   cipayos : function (message){

        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Caballeria Cipayos')
        .setDescription('UNIDAD RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981736999474040882/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '260'},
            {name:'Descripcion: ', value: 'Es una caballeria de apoyo, la cual se utiliza para entrar primero y despejar el paso a otras caballerias.'},
            {name:'Destaca en: ', value: 'Su habilidad "Pisoton" (el 2) permite conterear avances de picas imperiales y romper lineas enemigas.'},
            {name:'Pros: ', value: 'Caballeria tanque y buen control de masas.'},
            {name:'Contras: ', value: 'Sin mucho daño.'}

        )
        .setImage("https://conqhub.com/images/units/sipahis/sipah_top_vet_thumb.png")
     
        .setFooter(code)

		;

        message.channel.send(embed);
    },

    khevtuul :  function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Caballeria Khevtuul')
        .setDescription('UNIDAD NO RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981737042943819786/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '245'},
            {name:'Descripcion: ', value: 'Caballeria utilizada a melee que posee una habilidad con arco ademas de su carga.'},
            {name:'Destaca en: ', value: 'Su habilidad con arco le hace daño a heroes.'},
            {name:'Pros: ', value: 'Rapidos y carga decente.'},
            {name:'Contras: ', value: 'Muy debiles.'}

        )
        .setImage("https://conqhub.com/images/units/khevtuul-cavalry/khev_cav_top_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

   Lancera_Fuego :  function (message){
        const embed = new RichEmbed()
        .setColor('#E3C71F')
        .setTitle('Caballeria Lancera de Fuego')
        .setDescription('FUERA DE META')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628488542978048/lanc_fuego.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '320'},
            {name:'Descripcion: ', value: 'Caballeria la cual tiene daño contundente mayormente y daño a distancia. Pueden ser evolucionados a "Caballeria Lancera del Norte".'},
            {name:'Destaca en: ', value: 'Tiran rafagas de proyectiles a distancia cada cierto tiempo y previo a la carga.'},
            {name:'Pros: ', value: 'Pueden deletear heroes con sus rafagas.'},
            {name:'Contras: ', value: 'Su carga no es tan fuerte y se frenan al chocar.'}

        )
        .setImage("https://conqhub.com/images/units/fire-lancers/fire_lan_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

   LanceraNorte :  function (message){
        const embed = new RichEmbed()
    
        .setColor('#E3C71F')
        .setTitle('Caballeria Lancera del Norte')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981734807757271100/Lan_Nort.PNG')
        
        .addFields(
            {name:'Liderazgo: ', value: '325'},
            {name:'Descripcion: ', value: 'Son una de las caballerias top 4 dentro del juego gracias a sus habilidades.'},
            {name:'Destaca en: ', value: 'Sus habilidades le permite prescindir normalmente de su carga, sobre todo la habilidad que se desbloquea al fullear la rama de abajo.'},
            {name:'Pros: ', value: 'Deletea unidades con sus habilidades, tiene daño a distancia en cortas rafagas y puede deletear heroes.'},
            {name:'Contras: ', value: 'Hay que saber lanzar sus habilidades debido al trackeo que tienen.'}

        )
        .setImage("https://cdn.discordapp.com/attachments/981401622133506138/1029535759134363748/unknown.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

   CabYelHierro :  function (message){
        const embed = new RichEmbed()
        
        .setColor('#3ABE12')
        .setTitle('Arqueros Montados Yelmo de Hierro')
        .setDescription('NO RECOMENDABLE')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628489323122748/ligera_ydh.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '105'},
            {name:'Descripcion: ', value: 'Son caballeria montada la cual puede funcionar para intercepciones pero normalmente resulta muy inutil.'},
            {name:'Destaca en: ', value: '404 - not found.'},
            {name:'Pros: ', value: 'Ataques Furtivos.'},
            {name:'Contras: ', value: 'Poca precision, muy debiles y poco daño.'}

        )
        .setImage("https://conqhub.com/images/units/ironcap-scout-cavalry/iro_sco_cav_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

   BallMontados :  function (message){
        const embed = new RichEmbed()

        .setColor('#E3C71F')
        .setTitle('Ballesteros Montados')
        .setDescription('DIFICIL DE UTILIZAR')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981734808315105330/Ballest_Montado.png')
        .addFields(
            {name:'Liderazgo: ', value: '320'},
            {name:'Descripcion: ', value: 'Chu-ko-nu montado los cuales se utilizan en tacticas de golpear y correr.'},
            {name:'Destaca en: ', value: 'Buenos para interceptar y tienen tanto ataque a distancia como melee.'},
            {name:'Pros: ', value: 'Rapidos, y con una carga decente.'},
            {name:'Contras: ', value: 'Imprecisos, debiles y no ignifugos.'}

        )
        .setImage("https://conqhub.com/images/units/rattan-rangers/ratt_ran_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

    LigeraHierro :  function (message){
    const embed = new RichEmbed()

    .setColor('#3ABE12')
    .setTitle('Caballeria Ligera Yelmo de Hierro')
    .setDescription('UNIDAD NO RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981737520993824769/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '115'},
        {name:'Descripcion: ', value: 'Caballeria nada rentable ya que no tiene carga, cosa vital para las caballerias.'},
        {name:'Destaca en: ', value: 'Nada.'},
        {name:'Pros: ', value: 'Decente daño melee.'},
        {name:'Contras: ', value: 'Debiles, poco daño y sin carga.'}

    )
    .setImage("https://conqhub.com/images/units/ironcap-bowriders/iro_bow_vet_thumb.png")
    .setFooter(code)

    message.channel.send(embed);
},

    PesadaPref :  function (message){
    const embed = new RichEmbed()

    .setColor('#4F039A')
    .setTitle('Caballeria Pesada de Prefactura')
    .setDescription('UNIDAD NO RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981737171453087784/unknown.png')
    .addFields(
    {name:'Liderazgo: ', value: '260'},
    {name:'Descripcion: ', value: 'Es una caballeria muy mala dentro del juego, nada rentable.'},
    {name:'Destaca en: ', value: 'No destaca en nada.'},
    {name:'Pros: ', value: 'La carga stunea heroes enemigos.'},
    {name:'Contras: ', value: 'Carga con poco daño, debiles y caros.'}

)
.setImage("https://conqhub.com/images/units/prefecture-heavy-cavalry/pre_hea_cav_vet_thumb.png")

.setFooter("*help")

message.channel.send(embed);
},

    Selemchid :  function (message){
    const embed = new RichEmbed()

    .setColor('#3B7BF4')
    .setTitle('Caballeria selemchid')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628489868386324/selemchid.PNG')
    .addFields(
        {name:'Liderazgo: ', value: '170'},
        {name:'Descripcion: ', value: 'Caballeria muy rentable gracias a su proporcion costo/beneficio, Solo usar con carga.'},
        {name:'Destaca en: ', value: 'Utiles para asaltos veloces gracias a su gran velocidad.'},
        {name:'Pros: ', value: 'Veloces con carga decente, cooldown de poca duracion.'},
        {name:'Contras: ', value: 'Muy debiles.'}

    )
    .setImage("https://conqhub.com/images/units/prefecture-heavy-cavalry/pre_hea_cav_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

    Monasticos :  function (message){
    const embed = new RichEmbed()
    
    .setColor('#E3C71F')
    .setTitle('Caballeros Monasticos')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981734808944259072/Chevalier.png')
    .addFields(
        {name:'Liderazgo: ', value: '330'},
        {name:'Descripcion: ', value: 'Es una de las caballerias mas faciles de sacar entre las doradas y con un rendimiento optimo.'},
        {name:'Destaca en: ', value: 'Es una unidad muy lenta pero muy tanque con un gran daño de la carga.'},
        {name:'Pros: ', value: 'Buen tanqueo y buen daño ademas de buenas formaciones para la carga.'},
        {name:'Contras: ', value: 'Es una caballeria muy lenta.'}

    )
    .setImage("https://conqhub.com/images/units/monastic-knights/mona_kni_bot_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

    Coustilleux :  function (message){
    const embed = new RichEmbed()

    .setColor('#3ABE12')
    .setTitle('Coustilleux')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981737547317252136/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '130'},
        {name:'Descripcion: ', value: 'Unidad de tier verde buena debido a su proporcion costo/beneficio, siendo la mejor de su tier.'},
        {name:'Destaca en: ', value: 'Buena carga al completar su veterania.'},
        {name:'Pros: ', value: 'Buena carga.'},
        {name:'Contras: ', value: 'Muy debiles.'}

    )
    .setImage("https://conqhub.com/images/units/coutiliers/couts_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

    Alados :  function (message){
    const embed = new RichEmbed()

    .setColor('#E3C71F')
        .setTitle('Husares Alados')
        .setDescription('ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981734809216893028/Husar.png')
        .addFields(
            {name:'Liderazgo: ', value: '320'},
            {name:'Descripcion: ', value: 'Los husares alados son parte del top 4 mejores caballerias del juego, siendo estás la de mejor carga.'},
            {name:'Destaca en: ', value: 'Sus largas astas les permiten ganar cualquier carga contra carga además por veterania su carga se vuelve imparable.'},
            {name:'Pros: ', value: 'Veloces con fuerte carga.'},
            {name:'Contras: ', value: 'Su formación no es la mejor.'}

        )
        .setImage("https://conqhub.com/images/units/winged-hussars/win_hus_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

    //REVISAR
    Keshings :  function (message){
        const embed = new RichEmbed()

    .setColor('#E3C71F')
    .setTitle('Keshings')
    .setDescription('UNIDAD DIFICIL DE UTILIZAR')
    .setThumbnail('https://media.discordapp.net/attachments/981733548182618132/981734809514672168/Keshi.png')
    .addFields(
        {name:'Liderazgo: ', value: '325'},
        {name:'Descripcion: ', value: 'Esta es una de las caballerias más diciles de utilizar ya que se debe saber bien cuando lanzar su carga.'},
        {name:'Destaca en: ', value: 'Su carga cuenta con una de ida y una de vuelta hacia donde está el héroe.'},
        {name:'Pros: ', value: 'Muy veloces y fuerte daño.'},
        {name:'Contras: ', value: 'Son caballos muy débiles, tanto así que pocas veces logran su segunda carga ya que mueren al girarse.'}

    )
    .setImage("https://conqhub.com/images/units/kheshigs/keshigs_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

    Khorchins :  function (message){
    const embed = new RichEmbed()

       .setColor('#3B7BF4')
        .setTitle('Khorchins')
        .setDescription('NO RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981737414865326100/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '170'},
            {name:'Descripcion: ', value: 'Son arqueros a caballo ágiles y rápidos.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Agiles.'},
            {name:'Contras: ', value: 'Imprecisos, débiles y con poco daño.'}

        )
        .setImage("https://conqhub.com/images/units/khorchins/khorchins_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

    HachaDaga :  function (message){
        const embed = new RichEmbed()

    .setColor('#4F039A')
    .setTitle('Lanceros con Hacha Daga')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981737171453087784/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '270'},
        {name:'Descripcion: ', value: 'Son una caballería de tier purpura no recomendada ya que no tiene bastante utilidad.'},
        {name:'Destaca en: ', value: 'si bien desbloquea cierta doble carga la misma no es buena.'},
        {name:'Pros: ', value: 'Su doble carga.'},
        {name:'Contras: ', value: 'Débiles, caros y no rentables.'}

    )
    .setImage("https://conqhub.com/images/units/dagger-axe-lancers/dag_axe_lan_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

    Catafracto :  function (message){
    const embed = new RichEmbed()

     .setColor('#E3C71F')
        .setTitle('Lanceros de Catafracto')
        .setDescription('UNIDAD DIFICIL DE USAR')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981734808575156254/Catafracto.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '320'},
            {name:'Descripcion: ', value: 'Es de las mejores caballerias doradas y se deslbloquean con honor.'},
            {name:'Destaca en: ', value: 'Tienen 2 cargas y muy utiles.'},
            {name:'Pros: ', value: 'Son bastante resistentes. Su carga (1) hace buen daño. Su seguir al comandante (2) tambien funciona como "carga" siguiendo al heroe.'},
            {name:'Contras: ', value: 'Dificil de usar sobretodo la habilidad (2) para que barran todo desde una buena posicion.'}

        )
        .setImage("https://cdn.discordapp.com/attachments/981401622133506138/1001510664965210142/vet_catafr.PNG")
     
        .setFooter(code)

        message.channel.send(embed);
    },

    Tundra :  function (message){
        const embed = new RichEmbed()

        .setColor('#4F039A')
        .setTitle('Yeomen de la Tundra')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981736561982967828/Yeom_Tun.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '240'},
            {name:'Descripcion: ', value: 'Dentro del top 4 caballerias del juego siendo está una de tier purpura gracias a su gran rentabilidad.'},
            {name:'Destaca en: ', value: 'Si se micrea bien sus habilidades se puede tener una caballería que esté cargando continuamente.'},
            {name:'Pros: ', value: 'Veloces, fuertes, buena formación y gran rentabilidad.'},
            {name:'Contras: ', value: 'Mal usados se vuelven frágiles.'}

        )
        .setImage("https://conqhub.com/images/units/armiger-lancers/arm_lance_vet_top_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

    Yeomen :  function (message){
        const embed = new RichEmbed()

        .setColor('#4F039A')
        .setTitle('Yeomen')
        .setDescription('UNIDAD NO RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981733548182618132/981737340391284786/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '250'},
            {name:'Descripcion: ', value: 'Es una caballería que renta más levear por su evolución(yeomen de tundra) que por su proporción costo/beneficio.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Carga normal.'},
            {name:'Contras: ', value: 'Debiles.'}

        )
        .setImage("https://conqhub.com/images/units/yeomen/yeom_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

    Chevaliers :  function (message){
        const embed = new RichEmbed()

        .setColor('#E3C71F')
        .setTitle('Chevaliers')
        .setDescription('DEBIL')
        .setThumbnail('https://media.discordapp.net/attachments/981733548182618132/981734808944259072/Chevalier.png')
        .addFields(
            {name:'Liderazgo: ', value: '340'},
            {name:'Descripcion: ', value: 'Caballeria desbloqueada en temporada "Paragons".'},
            {name:'Destaca en: ', value: 'Unidad acompañante.'},
            {name:'Pros: ', value: 'Mucha resitencia, Puede llevar otra unidad de compañia-.'},
            {name:'Contras: ', value: 'Poco Daño, y comparado con otra caballeria Dorada no son rentables para nada.'}

        )
        .setImage("https://conqhub.com/images/units/chevaliers/chevaliers_veterancy_bot_main.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

    Custodios :  function (message){
        const embed = new RichEmbed()

        .setColor('#3B7BF4')
        .setTitle('Custodios')
        .setDescription('UNIDAD DIFICIL DE USAR')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401693004660818/Custodio.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '180'},
            {name:'Descripcion: ', value: 'Caballeria desbloqueada en temporata "Tirania".'},
            {name:'Destaca en: ', value: 'Una caballerìa con jabalinas que son muy buenas en espacios abiertos.'},
            {name:'Pros: ', value: 'Muy rapidos, baratos y bien micreados pueden sobrevivir bastante ya que se usan a media distancia.'},
            {name:'Contras: ', value: 'Muy debiles al daño.'}

        )
        .setImage("https://conqhub.com/images/units/outriders/outriders_bot_vet_thumb.png")
     
        .setFooter(code)

        message.channel.send(embed);
    },

}