const { MessageEmbed: RichEmbed } = require('discord.js');
const code = "version 1.0.1" 
module.exports = {

//{name:'Desbloqueo: ', value: 'Desafio unidad - Gilded Age'}


alabard :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Alabarderos')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '175'},
        {name:'Descripcion: ', value: 'Alabarderos con daño mediocre. Hay azules mejores'},
        {name:'Destaca en: ', value: 'daño mediocre, con buen brace. Pueden ser evolucionados en temporada "Ventisca".'},
        {name:'Pros: ', value: 'Tienen carga y buen brace'},
        {name:'Contras: ', value: 'Poco resistentes y fuera de meta'}

    )
    .setImage("https://conqhub.com/images/units/halberdiers/halb_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

alpinos :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Alabarderos alpinos')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628633187778630/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '175'},
        {name:'Descripcion: ', value: 'Son la evolución de los Alavarderos. Daño muy fuerte'},
        {name:'Destaca en: ', value: 'La carga (2) y daño perforacion (3) hacen MUCHO daño'},
        {name:'Pros: ', value: 'Buena carga, buen brace y muy buen daño. El 3 deletea tropas y heroes'},
        {name:'Contras: ', value: 'poco resistentes y la carga requiere que se este en formacion brace (1)'}

    )
    .setImage("https://conqhub.com/images/units/landsknechts/landsknechts_vet_top_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

alqui :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Alquimistas')
    .setDescription('UNIDAD DIFICIL DE USAR')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628633418444851/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '130'},
        {name:'Descripcion: ', value: 'Unica tropa en el Conquerors que cura tropas aliadas. Desbloqueadas en temporada "Paragons".'},
        {name:'Destaca en: ', value: 'Ratoneras donde pueda curar muchas tropas estando recubiertas'},
        {name:'Pros: ', value: 'Muy veloces y la cura es destacable'},
        {name:'Contras: ', value: 'Poco resistentes y pocas unidades de tropas'}

    )
    .setImage("https://cdn.discordapp.com/attachments/981401622133506138/982386466934095952/vet_alqui.PNG")
 
    .setFooter(code)

    message.channel.send(embed);
},
berze :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('Berserkers de odin')
    .setDescription('INDISPENSABLE')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401796725592115/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '255'},
        {name:'Descripcion: ', value: 'Tropa de Berzeker obtenida en temporada "Nordicos"'},
        {name:'Destaca en: ', value: 'Tomar murallas o atacar a las tropas del fondo'},
        {name:'Pros: ', value: 'Rapidas, buen daño, algo resistentes y se curan al usar su habilidad (3) cuando se llena la furia'},
        {name:'Contras: ', value: 'Son solo 8 unidades en la tropa, por lo que cada muerte se siente mucho y las nuevas seasons dejaron atras el daño del zerk habiendo mejores violetas. Mucho liderazgo'}

    )
    .setImage("https://conqhub.com/images/units/berserkers/berserkers_vet_top_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
paladin :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('Caballeros de la expedicion')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628669187461130/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '245'},
        {name:'Descripcion: ', value: 'Evolucion de Hombres de Arma. Se desbloquean en temporada de la "Expedición"'},
        {name:'Destaca en: ', value: 'buen daño X, V, X, V y destaca en murallas'},
        {name:'Pros: ', value: 'Pueden stunear heroes y tropas. Estadísticas de alta defensa. Alto daño. Muro de escudos. Se autocuran.'},
        {name:'Contras: ', value: 'Lento cuando está en modo de ataque. Y un poco fuera de meta.'}

    )
    .setImage("https://conqhub.com/images/units/symmachean-paladins/symm_pal_vet_top_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
centialdea :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('Centinelas aldeanos')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628679480287282/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '30'},
        {name:'Descripcion: ', value: 'Tropa gris para rellenar cuando sobran 30 en alguna estrategia'},
        {name:'Destaca en: ', value: 'Cantidad de tropas y baratas'},
        {name:'Pros: ', value: 'Generan bulto en los choques, y al ser picas le dan debuff a las caballerias que atacan'},
        {name:'Contras: ', value: 'Extremadamente debiles poco resistentes'}

    )
    .setImage("https://conqhub.com/images/units/village-watchmen/vil_watch_combat_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

//FALTAAAAAAA
clay :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('Claymores')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401692803309608/Claymore.PNG')
    .addFields(
        {name:'Liderazgo: ', value: '245'},
        {name:'Descripcion: ', value: 'Desbloqueada en temporada "Highlanders"'},       
        {name:'Destaca en: ', value: 'Muy buenos en choque y ataque de escudo'},
        {name:'Pros: ', value: 'F'},
        {name:'Contras: ', value: 'F'}

    )
    .setImage("https://conqhub.com/images/units/claymores/claymore_vet_bot.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
condos :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Condotieros')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628633863045202/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '170'},
        {name:'Descripcion: ', value: 'Desbloqueada en temporada "Gilded Age"'},      
        {name:'Destaca en: ', value: 'Muy buenos en choque y ataque de escudo'},
        {name:'Pros: ', value: 'Muy veloces y la habilidad (2) choque de escudo hace mucho daño. Muy bueno contra tropas de rango'},
        {name:'Contras: ', value: 'Debiles y sin cooldown de habilidades no hacen mucho.'}
    )
    .setImage("https://conqhub.com/images/units/condottieri-guards/condo_gua_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
escuderos :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Escuderos')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628634085351494/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '170'},
        {name:'Descripcion: ', value: 'Infanteria de espada y escudo azul'},
        {name:'Destaca en: ', value: 'Nada'},
        {name:'Pros: ', value: 'Nada'},
        {name:'Contras: ', value: 'Muy debiles en comparación al resto'}

    )
    .setImage("https://conqhub.com/images/units/squires/squires_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
espratan :  function (message){
    const embed = new RichEmbed()
    .setColor('#458B00')
    .setTitle('Espadachines con ratan')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628634479595571/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '130'},
        {name:'Descripcion: ', value: 'Infanteria de ratán con espada y escudo verde'},
        {name:'Destaca en: ', value: 'Nada'},
        {name:'Pros: ', value: 'Nada'},
        {name:'Contras: ', value: 'Muy debiles en comparación al resto'}

    )
    .setImage("https://conqhub.com/images/units/rattan-roundshields/ratt_rou_vet_top_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
espmili :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('Espadachines milicianos')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628635037442078/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '85'},
        {name:'Descripcion: ', value: 'Infanteria con espada y escudo gris'},
        {name:'Destaca en: ', value: 'Nada'},
        {name:'Pros: ', value: 'Nada'},
        {name:'Contras: ', value: 'Muy debiles en comparación al resto'}

    )
    .setImage("https://conqhub.com/images/units/sword-militia/sword_mil_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
espaydh :  function (message){
    const embed = new RichEmbed()
    .setColor('#458B00')
    .setTitle('Espadachines yelmo de hierro')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628634739650650/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '115'},
        {name:'Descripcion: ', value: 'Infanteria con espada y escudo verde'},
        {name:'Destaca en: ', value: 'Nada'},
        {name:'Pros: ', value: 'Nada'},
        {name:'Contras: ', value: 'Muy debiles en comparación al resto'}

    )
    .setImage("https://conqhub.com/images/units/ironcap-swordsmen/ironcap_sword_bot_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
fuerarmimp :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('Fuerzas armadas del imperio')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401691771523082/asap.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Infanteria de espada y escudo desbloqueada en temporada "Ciudad Solitaria del Imperio"'},
        {name:'Destaca en: ', value: 'Choque y habilidad de contraataque'},
        {name:'Pros: ', value: 'rapidos con buen daño explosivo y con contrataque que es fuerte contra muchas infanterias'},
        {name:'Contras: ', value: 'La carga no sirve y luego de usar sus habilidades quedan muy vulnerables.'}

    )
    .setImage("https://conqhub.com/images/units/azaps/azaps_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
gaitero :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Gaiteros')
    .setDescription('UNIDAD DIFICIL DE USAR')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628650661249076/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '130'},
        {name:'Descripcion: ', value: 'Buffea a los aliados. Desbloqueada en temporada "Highlanders".'},
        {name:'Destaca en: ', value: 'Da buff de daño o de resistencia a las tropas cercanas. Perfectos para ratoneras donde puedan estar resguardados.'},
        {name:'Pros: ', value: 'Muy rapidos y muy buenos en equipo.'},
        {name:'Contras: ', value: 'Muy debiles y no hacen daño.'}

    )
    .setImage("https://conqhub.com/images/units/bagpipers/bagpipers_veterancy.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
palacio :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('Guardas de palacio')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401712076140594/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '235'},
        {name:'Descripcion: ', value: 'Infanteria de espada y escudo violeta muy resistente y economico'},
        {name:'Destaca en: ', value: 'Pide poco liderazgo y subidos por abajo tienen inmunidad por 5 segundos'},
        {name:'Pros: ', value: 'Buen aguante y buen daño cuando se usa la habilidad (2) para sentarlos por 5 segundos y luego otra vez (2) para hacer el daño.'},
        {name:'Contras: ', value: 'Un poco lentos y sin daño considerable'}

    )
    .setImage("https://cdn.discordapp.com/attachments/981401622133506138/982393802587246643/vet_guardpalac.PNG")
 
    .setFooter(code)

    message.channel.send(embed);
},
guardpref :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Guardas de prefectura')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628650904510534/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '180'},
        {name:'Descripcion: ', value: 'Tropa espada y escudo azul'},
        {name:'Destaca en: ', value: 'Daño de carga'},
        {name:'Pros: ', value: 'Muy fuerte el daño de carga pudiendo deletear heroes'},
        {name:'Contras: ', value: 'Muy debiles y fuera de meta ya que hay otras tropas que hacen mejor trabajo por mismo liderazgo'}

    )
    .setImage("https://conqhub.com/images/units/prefecture-guards/pref_guar_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

//FALTA
jenizara :  function (message){
    const embed = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('Guardia jenizara')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401712692690985/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '320'},
        {name:'Descripcion: ', value: 'Por lugares muy lejanos le dice machacadora de carne. Tienen dos formas de usarse, si usas la veterania superior podrás matar todo lo que te proponga mientras tenga una habilidad ya que van a carecer de un gra aguante, pero si los usas por la veterania inferior lograras un mayor aguante y podrás aprovecharte de su "seguir al coamndante"(habilidad 2)'},
        {name:'Destaca en: ', value: 'Alto daño. Buena salud. Armadura alta. Tiene 2 poderosas habilidades. Siguen al comandante.'},
        {name:'Pros: ', value: 'Deletean tropas y heroes en segundos con sus habilidades'},
        {name:'Contras: ', value: 'muy lentos y si son interceptados mal parados mueren muy rapido'}

    )
    .setImage("https://conqhub.com/images/units/silahdars/silah_vet_thumb.png")

    const embed1 = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('Guardia jenizara (Machacador de carne)')
    
    .setImage("https://media.discordapp.net/attachments/981401622133506138/1013215603688996884/unknown.png?width=960&height=329")
 
    .setFooter(code)

    message.channel.send(embed);
    message.channel.send(embed1);
},
guardleal :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('Guardia leal')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401780510396446/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Evolucion de Sargentos Lanceros desbloqueada en temporada "Expedición"'},
        {name:'Destaca en: ', value: 'Buenos en ratoneras que se necesite cubrir una linea medio/larga'},
        {name:'Pros: ', value: 'Buen daño en Brace. Chance de curarse cuando bloquean, buenas formaciones y habilidades.'},
        {name:'Contras: ', value: 'Lentos, muy estaticos y faciles de matar. Reciben mucho daño por la espalda.'}

    )
    .setImage("https://conqhub.com/images/units/symmachean-stalwarts/loy-gua-vet-thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
valki :  function (message){
    const embed = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('Guardia sigrun valkirias')
    .setDescription('UNIDAD DIFICIL DE USAR')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401779369545778/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '310'},
        {name:'Descripcion: ', value: 'Espada y lanza con escudos desbloqueada en temporada "Nordicos". Tiene dos formas, una como aniquiladora y otra como unidad de escudos funcion sería ser defensiva. la primera imagen muestra como aniquiladora y la otra como defensiva '},
        {name:'Destaca en: ', value: 'Buffear tropas aliadas y muy versatiles.'},
        {name:'Pros: ', value: 'Muchas habilidades defensivas y ofensivas por lo que se requiere buen micromanagment para usar bien.'},
        {name:'Contras: ', value: 'Al ser primera lìnea suelen morir muy rapido sin hacer diferencia en la batalla y es mucho liderazgo gastado.'}

    )
   
    .setImage("https://conqhub.com/images/units/shieldmaidens/shieldmaiden_bot_vet_cover.png")
    const embed1 = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('Guardia sigrun valkirias (Unidad de escudos)')
    
    .setImage("https://conqhub.com/images/units/shieldmaidens/shieldmaiden_top_vet_cover.png")

    .setFooter(code)

    message.channel.send(embed);
    message.channel.send(embed1);
},
estandarte :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('Guardianes de estandarte')
    .setDescription('UNIDAD DIFICIL DE USAR')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632755740702/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '225'},
        {name:'Descripcion: ', value: 'Unidades de estandarte que buffean y cambian el arma del heroe. Desbloqueados en "Paragons".'},
        {name:'Destaca en: ', value: 'Choques de muchas tropas y en muralla.'},
        {name:'Pros: ', value: 'Buen daño, buena utilidad y pueden modificar el arma del Heroe a un estandarte.'},
        {name:'Contras: ', value: 'Requieren mucho micromanagement y no son muy resistentes.'}

    )
    .setImage("https://cdn.discordapp.com/attachments/981401622133506138/982397186052616242/vet_estandar.PNG")
 
    .setFooter(code)

    message.channel.send(embed);
},
viejos :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('guarnicion pelogris')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401796964651058/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Unidad de lanza y escudo para primera linea desbloqueada en temporada "Dinastìa".'},
        {name:'Destaca en: ', value: 'Ratoneras en espacios pequeños y duran mucho bien usados.'},
        {name:'Pros: ', value: 'Mucha vida, invulnerables al CC con 2 de sus habilidades, se recuperan y pegan muy fuerte'},
        {name:'Contras: ', value: 'Su formación es muy chica por lo que no cubre mucho a las tropas de atras. Si no llegan a formarse por tumulto de tropas pierden muchos stats y mueren rapido'}

    )
    .setImage("https://conqhub.com/images/units/greyhair-garrison/greyhair_bot_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
hombarma :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('hombres de armas')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628651139395644/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Espada y escudo violeta que pueden ser evolucionados a "Caballeros de la Expedición (Paladines)".'},
        {name:'Destaca en: ', value: 'Nada.'},
        {name:'Pros: ', value: 'Pueden ser evolucionados.'},
        {name:'Contras: ', value: 'Muy debiles comparado con cualquier tropa de 240 liderazgo.'}

    )
    .setImage("https://conqhub.com/images/units/men-at-arms/men_at_arms_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
fenrir :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('huargos fenris')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628651361697812/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '180'},
        {name:'Descripcion: ', value: 'Tropa de Huargos desbloqueada en temporada "Nordicos".'},
        {name:'Destaca en: ', value: 'Matar tropas de rango y explosión de daño.'},
        {name:'Pros: ', value: 'Muy rapidos y resistentes a la flecha, hacen mucho daño con la habilidad (2) lo que puede deletear hasta heroes.'},
        {name:'Contras: ', value: 'Muy vulnerables al cuerpo a cuerpo.'}

    )
    .setImage("https://conqhub.com/images/units/sons-of-fenrir/sons_of_fenrir_top_vet_thumbnail.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
jabseno :  function (message){
    const embed = new RichEmbed()
    .setColor('#458B00')
    .setTitle('jabalineros de señorio')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628651856597054/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '110'},
        {name:'Descripcion: ', value: 'Unidad de jabalinas verdes.'},
        {name:'Destaca en: ', value: 'Nada.'},
        {name:'Pros: ', value: 'Nada.'},
        {name:'Contras: ', value: 'Muy debiles y no tienen uso.'}

    )
    .setImage("https://conqhub.com/images/units/demesne-javelineers/dem_jav_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
jabdragon :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('jabalineros del dragon negro')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628651617533952/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '115'},
        {name:'Descripcion: ', value: 'Unidad de Mercenarios a 400.000 Silver.'},
        {name:'Destaca en: ', value: 'Tropa azul barata.'},
        {name:'Pros: ', value: 'Muy baratos.'},
        {name:'Contras: ', value: 'Debiles y no valen la pena.'}

    )
    .setImage("https://conqhub.com/images/units/black-dragon-javelineers/bla_drag_jav_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
jabimpe :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('jabalineros imperiales')
    .setDescription('UNIDAD DIFICIL DE USAR')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401710406795314/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'F'},
        {name:'Destaca en: ', value: 'Muchisimo daño de alto alcance a heroes.'},
        {name:'Pros: ', value: 'Buena armadura. Buena salud. Muro de escudos. Buen daño con javalinas'},
        {name:'Contras: ', value: 'Mediocre en el cuerpo a cuerpo. Poca munición.'}

    )
    .setImage("https://conqhub.com/images/units/imperial-javelineers/imp_jav_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
jabmili :  function (message){
    const embed = new RichEmbed()
    .setColor('#458B00')
    .setTitle('jabalineros milicianos')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628652137611274/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '110'},
        {name:'Descripcion: ', value: 'Jabalinas verdes.'},
        {name:'Destaca en: ', value: 'Nada.'},
        {name:'Pros: ', value: 'Nada.'},
        {name:'Contras: ', value: 'Muy debiles y no valen la pena.'}

    )
    .setImage("https://conqhub.com/images/units/javelin-militia/jav_mil_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
lancguarimp :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('lanceros de la guardia imperial')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401780309065769/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '245'},
        {name:'Descripcion: ', value: 'Unidad con escudos grandes (como puertas).'},
        {name:'Destaca en: ', value: 'Su gran escudo y resistencia. Pueden stunear heroes cuando golpean'},
        {name:'Pros: ', value: 'Cubren mucho a las tropas detras.'},
        {name:'Contras: ', value: 'Muy estaticas con poco daño y faciles de matar por la espalda.'}

    )
    .setImage("https://conqhub.com/images/units/imperial-spear-guards/imp_spea_guar_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
lancseno :  function (message){
    const embed = new RichEmbed()
    .setColor('#458B00')
    .setTitle('lanceros de señorio')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628650443112468/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '125'},
        {name:'Descripcion: ', value: 'Lanceros con escudo verdes.'},
        {name:'Destaca en: ', value: 'Principio de la temporada cuando solo hay tropas azules.'},
        {name:'Pros: ', value: 'Formacion en linea con escudos.'},
        {name:'Contras: ', value: 'Muy debiles ya que es una tropa verde.'}

    )
    .setImage("https://conqhub.com/images/units/demesne-spearmen/dem_spe_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
lancdragon :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('lanceros del dragon negro')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628652355731477/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '110'},
        {name:'Descripcion: ', value: 'Unidad Mercenaria por 700.000 Silver.'},
        {name:'Destaca en: ', value: 'Principio de temporada cuando solo hay azules.'},
        {name:'Pros: ', value: 'Muy baratas, tienen formacion lineal y se pueden curar.'},
        {name:'Contras: ', value: 'Muy caras en cuanto a Silver para tan poco uso.'}

    )
    .setImage("https://conqhub.com/images/units/black-dragon-spearmen/bla_drag_spear_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
lancmili :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('lanceros milicianos')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628652670292028/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '100'},
        {name:'Descripcion: ', value: 'Lanzas con escudos grandes (como puertas) grises.'},
        {name:'Destaca en: ', value: 'Nada.'},
        {name:'Pros: ', value: 'Tienen un escudo grande.'},
        {name:'Contras: ', value: 'Debiles, poco resistentes y no valen la pena.'}

    )
    .setImage("https://conqhub.com/images/units/spear-militia/spea_mil_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
lancydh :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('lanceros yelmo de hierro')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628667773976637/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '175'},
        {name:'Descripcion: ', value: 'Lanceros con escudos grandes (como puertas) azules.'},
        {name:'Destaca en: ', value: 'Cubrir a las tropas detras de ella.'},
        {name:'Pros: ', value: 'Su gran escudo es perfecto para cubrir tropas debajo o detras.'},
        {name:'Contras: ', value: 'Muy estaticas y muy debiles por la espalda.'}

    )
    .setImage("https://conqhub.com/images/units/ironcap-spearmen/iro_spear_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
lenadores :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('leñadores')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628667958558840/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '40'},
        {name:'Descripcion: ', value: 'Tropa de poco liderazgo.'},
        {name:'Destaca en: ', value: 'Cuenta la leyenda que en los recursos de arboles sacan mas recursos que los siervos (a chequear).'},
        {name:'Pros: ', value: 'Disponen de una carga, y son muy baratos.'},
        {name:'Contras: ', value: 'Muy debiles, solo se deberian usar para rellenar una estrategia que sobran 40 de liderazgo.'}

    )
    .setImage("https://conqhub.com/images/units/woodcutters/woo_cut_combat_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
marte :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('martellalori')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628668197605396/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '30'},
        {name:'Descripcion: ', value: 'Unidad Mercenaria que se consigue con 700.000 Silver.'},
        {name:'Destaca en: ', value: 'Los motores de asedio reciben un 10% menos de daño al empujar.'},
        {name:'Pros: ', value: 'Barato en liderazgo.'},
        {name:'Contras: ', value: 'Armadura baja. Salud extremadamente baja. Daño bajo.'}

    )
    .setImage("https://conqhub.com/images/units/martellatori/martella_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
hacha :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('matones del hacha')
    .setDescription('UNIDAD DIFICIL DE USAR')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401733869756456/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Lanza hachas desbloqueada en temporada "Tirania".'},
        {name:'Destaca en: ', value: 'Desgastar a los enemigos y pasar a la linea del fondo de forma rapida. Pueden debuffear a los enemigos.'},
        {name:'Pros: ', value: 'Gran velocidad y buena resistencia. Con sus habilidades son muy buenos para hacer daño desde distancia media y pueden usar una carga que atraviesan todas las tropas pudiendo ir directo a las filas del fondo donde se encuentran las distancias.'},
        {name:'Contras: ', value: 'Requieren mucho micromanejo y conocer la tropa.'}

    )
    .setImage("https://conqhub.com/images/units/axe-raiders/axe_raiders_bot_vet_thumb.png.")
 
    .setFooter(code)

    message.channel.send(embed);
},
medieros :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('medieros')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628668558327888/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '40'},
        {name:'Descripcion: ', value: 'Tropa de liderazgo bajo.'},
        {name:'Destaca en: ', value: 'Generar tumulto al momento del choque o proteger alguna tropa importante.'},
        {name:'Pros: ', value: 'muy barato en costo de liderazgo.'},
        {name:'Contras: ', value: 'Armadura baja. Salud extremadamente baja. Daño bajo.'}

    )
    .setImage("https://cdn.discordapp.com/attachments/981401622133506138/982404593612914748/ver_medieros.PNG")
 
    .setFooter(code)

    message.channel.send(embed);
},
modao :  function (message){
    const embed = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('Modaos')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401734494703687/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '315'},
        {name:'Descripcion: ', value: 'Tropa anticaballerìa por excelencia. Desbloqueada en temporada "Dinastia".'},
        {name:'Destaca en: ', value: 'Muy buena en choques de caballeria y ratoneras. Siempre se debe usar en formaciòn y con sus habilidades.'},
        {name:'Pros: ', value: 'Tienen mucho aguante y daño cuando estan en Formacion (1) y al usar el (2) hacen un daño perforante fuerte. Ni bien se usa el (2) es importante volver rapidamente al (1) para no perder el buff defensivo al estar en "formacion / brace". El (3) es una carga que tambien hace buen daño. '},
        {name:'Contras: ', value: 'Quedan muy expuestos cuando no estan en formacion con la habilidad (1). Por lo que luego de cada habilidad (2) o (3) se deberia volver inmediatamente al (1).'}

    )
    .setImage("https://conqhub.com/images/units/modao-battalion/modao_battalion_bot_vet_expand.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
monjes :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Monjes de garrote')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628668910661693/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '190'},
        {name:'Descripcion: ', value: 'Monjes que se desbloquean en temporada "Dinastia".'},
        {name:'Destaca en: ', value: 'Ruptura de escudos y bloqueo de flechas.'},
        {name:'Pros: ', value: 'Rapidos y son buenos contra primera linea con escudos y contra distancia.'},
        {name:'Contras: ', value: 'Poco resistentes.'}

    )
    .setImage("https://conqhub.com/images/units/cudgel-monks/cudgel_monks_bot_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
piqratan :  function (message){
    const embed = new RichEmbed()
    .setColor('#458B00')
    .setTitle('piqueros con ratan')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628667530715196/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '115'},
        {name:'Descripcion: ', value: 'Unidad de piqueros de ratan verde.'},
        {name:'Destaca en: ', value: 'Nada.'},
        {name:'Pros: ', value: 'Nada.'},
        {name:'Contras: ', value: 'Debiles.'}

    )
    .setImage("https://conqhub.com/images/units/rattan-pikemen/ratt_pik_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
piqpref :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('Piqueros de prefectura')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628669992792064/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '185'},
        {name:'Descripcion: ', value: 'Unidad de piqueros azules.'},
        {name:'Destaca en: ', value: 'Gran daño de carga.'},
        {name:'Pros: ', value: 'La carga puede matar heroes.'},
        {name:'Contras: ', value: 'Fuera de Meta ya que con el mismo liderazgo se consiguen mejores tropas. Como alabarderos alpinos.'}

    )
    .setImage("https://conqhub.com/images/units/prefecture-pikemen/pref_pike_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
piqsenorio :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('piqueros de señorio')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628679480287282/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '70'},
        {name:'Descripcion: ', value: 'Unidad de piqueros grises.'},
        {name:'Destaca en: ', value: 'Nada.'},
        {name:'Pros: ', value: 'Baratos.'},
        {name:'Contras: ', value: 'Debiles.'}

    )
    .setImage("https://conqhub.com/images/units/demesne-pikemen/dem_pike_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
piqdragon :  function (message){
    const embed = new RichEmbed()
    .setColor('#3B7BF4')
    .setTitle('piqueros del dragon negro')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628669653041202/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '120'},
        {name:'Descripcion: ', value: 'Unidad Mercenaria de piqueros desbloqueada por 700.000 de Silver.'},
        {name:'Destaca en: ', value: 'Baratos para ser tropa azul.'},
        {name:'Pros: ', value: 'Pueden matar un heroe con su habilidad.'},
        {name:'Contras: ', value: 'No vale la pena por el liderazgo que pide.'}

    )
    .setImage("https://conqhub.com/images/units/black-dragon-pikemen/bla_drag_pike_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
forte :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('piqueros fortebraccio')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401711505702973/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '235'},
        {name:'Descripcion: ', value: 'Unidad de piqueros desbloqueada en temporada: "Gilded Age".'},
        {name:'Destaca en: ', value: 'Sus picas largas son perfectas para ratonera.'},
        {name:'Pros: ', value: 'Demasiado daño con sus picas y pueden stunear tropas con las doctrinas correctas.'},
        {name:'Contras: ', value: 'Muy estaticas y muy focuseadas por los heroes enemigos.'}
    )
    .setImage("https://conqhub.com/images/units/fortebraccio-pikemen/forte_pike_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
picimp :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('piqueros imperiales')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401780090982421/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Con su avance imperial frenan toda la caballeria y tiran tropas al piso.'},
        {name:'Destaca en: ', value: 'Muy buenas en choque de tropas gracias a su Avance Imperial (2).'},
        {name:'Pros: ', value: 'Mucha utilidad con el avance, marcando la diferencia entre ganar o perder un push.'},
        {name:'Contras: ', value: 'Luego del avance quedan muy expuestas. Y son lentos.'}

    )
    .setImage("https://conqhub.com/images/units/imperial-pike-guards/imp_pk_vet_top_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
piqmil :  function (message){
    const embed = new RichEmbed()
    .setColor('#458B00')
    .setTitle('piqueros milicianos')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628667530715196/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '110'},
        {name:'Descripcion: ', value: 'Unidad de piqueros verdes.'},
        {name:'Destaca en: ', value: 'Increiblemente fuerte para el liderazgo que pide.'},
        {name:'Pros: ', value: 'Mucho daño y stun estando en formación. Muy baratos.'},
        {name:'Contras: ', value: 'Poco resistentes.'}

    )
    .setImage("https://conqhub.com/images/units/pike-militia/pk_mil_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
sargalabar :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('sargentos alabarderos')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401691033309214/Alab.png')
    .addFields(
        {name:'Liderazgo: ', value: '230'},
        {name:'Descripcion: ', value: 'Alabarderos violetas.'},
        {name:'Destaca en: ', value: 'Mucho daño y se suelen usar atras de una primera lìnea.'},
        {name:'Pros: ', value: 'Ràpidos, con buen daño cuerpo a cuerpo, buena formaciòn y buen daño de carga.'},
        {name:'Contras: ', value: 'Poco resistentes, y la inteligencia artificial del golpe cuerpo a cuerpo no es muy buena dejando muchas tropas atras sin pegar.'}

    )
    .setImage("https://conqhub.com/images/units/halberdier-sergeants/halb_serg_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
sargjab :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('sargentos jabalineros')
    .setDescription('UNIDAD DIFICIL DE USAR')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401733081231390/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '230'},
        {name:'Descripcion: ', value: 'Unidad de Jabalinas violetas.'},
        {name:'Destaca en: ', value: 'Daño de buen alcance. Mucho daño a objetivos estaticos.'},
        {name:'Pros: ', value: 'Baratos. Buena armadura. Más munición que Jabalineros Imperiales.'},
        {name:'Contras: ', value: 'No son buenos contra tropas moviles y cuerpo a cuerpo caen muy rapido.'}

    )
    .setImage("https://conqhub.com/images/units/javelin-sergeants/jav_serg_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
sarglanc :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('sargentos lanceros')
    .setDescription('DEBIL')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/982381734983241748/sarg_lanc.PNG')
    .addFields(
        {name:'Liderazgo: ', value: '250'},
        {name:'Descripcion: ', value: 'Lanceros con escudos violetas que pueden ser evolucionados a "Guardia Leal".'},
        {name:'Destaca en: ', value: 'Pueden ser evolucionados.'},
        {name:'Pros: ', value: 'Tienen una habilidad "Seguir al comandante" que sirve para iniciantes.'},
        {name:'Contras: ', value: 'Muy debiles y caras en cuanto a liderazgo.'}

    )
    .setImage("https://conqhub.com/images/units/spear-sergeants/spe_sarg_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
segadores :  function (message){
    const embed = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('segadores de hierro')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://media.discordapp.net/attachments/981733189708030022/981735422621274172/Segador.png')
    .addFields(
        {name:'Liderazgo: ', value: '315'},
        {name:'Descripcion: ', value: 'Unidad dorada perfecta para el cuerpo a cuerpo.'},
        {name:'Destaca en: ', value: ' Combate cuerpo a cuerpo. Tiene 2 armas (Espada y maza de una mano). Se usa mucho en murallas.'},
        {name:'Pros: ', value: 'Alto daño. Armadura muy alta. Salud muy alta. Puede cargar. Contra escudos se usa la maza y contra el resto de unidades la espada. Con la habilidad (2) hacen mucho daño y se pueden curar.'},
        {name:'Contras: ', value: 'Muy lentos y poco eficaces cuando hay caballeria dando vueltas.'}

    )
    .setImage("https://cdn.discordapp.com/attachments/1011443801933480026/1012559278869053480/snapshot_2022_08_26_00_08_19_11195.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
siervos :  function (message){
    const embed = new RichEmbed()
    .setColor('#D7DDEA')
    .setTitle('siervos')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628679673237574/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '40'},
        {name:'Descripcion: ', value: 'Tropa de siervos perfecta para recolectar'},
        {name:'Destaca en: ', value: 'Recolectar recursos fuera de feudos ya que es la tropa con mas rendimiento en sus veteranìas.'},
        {name:'Pros: ', value: 'Se pueden crear 5 siervos en el barracon para salir a recolectar con 5 de ellos y asi llegar al màximo de recolecciòn.'},
        {name:'Contras: ', value: 'Debiles para la batalla. Solo son usados para recolectar en el mundo abierto.'}

    )
    .setImage("https://conqhub.com/images/units/serfs/serfs_labor_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},
tseregs :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('tseregs')
    .setDescription('FUERA DE META')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628679266402304/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Tropa de maza y escudo desbloqueada en Temporada "Temporada 2"'},
        {name:'Destaca en: ', value: 'Su carga atraviesa escudos.'},
        {name:'Pros: ', value: 'Pueden generar hemorragia o derribar a los enemigos dependiendo su veteranìa.'},
        {name:'Contras: ', value: 'Muy debiles y caros en comparaciòn a otras tropas.'}

    )
    .setImage("https://conqhub.com/images/units/tseregs/tseregs_vet_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

huskarls :  function (message){
    const embed = new RichEmbed()
    .setColor('#4F039A')
    .setTitle('huskarls')
    .setDescription('DIFICIL DE USAR')
    .setThumbnail('https://conqhub.com/images/units/huskarls/huskarl_main.png')
    .addFields(
        {name:'Liderazgo: ', value: '240'},
        {name:'Descripcion: ', value: 'Tropa de hacha y escudo desbloqueada en Temporada "Helheim".'},
        {name:'Destaca en: ', value: 'Si carga su canto por completo, tiene mucho daño y resistencia.'},
        {name:'Pros: ', value: 'Buena vida, buen daño, muy resistentes y veloces.'},
        {name:'Contras: ', value: 'Requieren mucha preparaciòn para usar en su explendor.'}

    )
    .setImage("https://conqhub.com/images/units/huskarls/huskarls_veterancy_thumb.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

varega :  function (message){
    const embed = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('guardia varega')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://conqhub.com/images/units/varangian-guards/varangian_guards_main.png')
    .addFields(
        {name:'Liderazgo: ', value: '315'},
        {name:'Descripcion: ', value: 'Tropa dorada de hacha y escudo desbloqueada en Temporada "Helheim".'},
        {name:'Destaca en: ', value: 'Mucho daño y resistencia.'},
        {name:'Pros: ', value: 'Al cargar su furia desatan una serie de golpes muy fuertes. Se les DEBE poner la doctrina de "Acorazado".'},
        {name:'Contras: ', value: 'Sin la doctrina de Acorazado no aguantan un choque fuerte.'}

    )
    .setImage("https://cdn.discordapp.com/attachments/981401622133506138/1012560679103905902/unknown.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

mirmidon :  function (message){
    const embed = new RichEmbed()
    .setColor('##4F039A')
    .setTitle('Mirmillones')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/1023339541194604615/unknown.png')
    .addFields(
        {name:'Liderazgo: ', value: '235'},
        {name:'Descripcion: ', value: 'Tropa de escudos de puerta desbloqueados en Temporada "Coliseo".'},
        {name:'Destaca en: ', value: 'Bloqueo y proteccion de formaciòn.'},
        {name:'Pros: ', value: 'Muy buena movilidad, y defensas muy altas. La carga hace bastante daño. Muy buenos para proteger tropas.'},
        {name:'Contras: ', value: 'Pendiente...'}

    )
    .setImage("https://cdn.discordapp.com/attachments/981401622133506138/1023339344183967874/unknown.png")
 
    .setFooter(code)

    message.channel.send(embed);
},

reciarios :  function (message){
    const embed = new RichEmbed()
    .setColor('#EFF00D')
    .setTitle('F')
    .setDescription('UNIDAD RECOMENDADA')
    .setThumbnail('')
    .addFields(
        {name:'Liderazgo: ', value: '999'},
        {name:'Descripcion: ', value: 'Unidad de Jabalina dorada desbloqueados en Temporada "Coliseo".'},
        {name:'Destaca en: ', value: 'F'},
        {name:'Pros: ', value: 'F.'},
        {name:'Contras: ', value: 'F'}

    )
    .setImage("")
 
    .setFooter(code)

    message.channel.send(embed);
},
}