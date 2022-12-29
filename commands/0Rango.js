const { MessageEmbed: RichEmbed } = require('discord.js');
const code = "version 1.0.1" 

module.exports = {
    arbsen :function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arbalestero de señorio')
        .setDescription('DEBIL')
        
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628572676534393/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '180'},
            {name:'Descripcion: ', value: 'Unidad de ballesteros decente pero no rentable.'},
            {name:'Destaca en: ', value: 'Daño perforante.'},
            {name:'Pros: ', value: 'Penetracion.'},
            {name:'Contras: ', value: 'Poca cadencia.'}

        )
        .setImage("https://conqhub.com/images/units/demesne-arbalists/dem_arb_vet_thumb.png")
        
        .setFooter("*help")

        message.channel.send(embed);
    },

    arcsen :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arcabuceros de Señorio')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628572974334033/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '200'},
            {name:'Descripcion: ', value: 'Unicamente rinden al inicio de la temporada y si no tenes los mosqueteros jenizaros.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Buen daño.'},
            {name:'Contras: ', value: 'Imprecisos y poca cadencia.'}

        )
        //.setURL('https://c.tenor.com/sFct6jVywUgAAAAC/weakness-disgusts-me-senju.gif')
        .setImage("https://conqhub.com/images/units/demesne-arquebusiers/dem_arqu_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arcter :  function (message){
        const embed = new RichEmbed()
        .setColor('#EFF00D')
        .setTitle('Arcabuceros de Tercio')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401781277978644/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '310'},
            {name:'Descripcion: ', value: 'Son unos arcabuceros muy resistentes los cuales pueden pelear tanto en cuerpo a cuerpo como en distancia.'},
            {name:'Destaca en: ', value: 'Gran daño a distancia y cuerpo a cuerpo.'},
            {name:'Pros: ', value: 'Buena cadencia, precision y daño. Destaca mucho mas con las correctas doctrinas.'},
            {name:'Contras: ', value: 'Despues de usar su habilidad pasan automaticamente a cuerpo a cuerpo.'}

        )
        .setImage("https://conqhub.com/images/units/tercio-arquebusiers/tercio_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arcimp :  function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Arcabuceros Imperiales')
        .setDescription('UNIDAD RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401691251421254/Arcabu_Imper.png')
        .addFields(
            {name:'Liderazgo: ', value: '255'},
            {name:'Descripcion: ', value: 'Arcabuceros orientales muy utiles en batallas para generar mucho daño al enemigo.'},
            {name:'Destaca en: ', value: 'Tiro por turnos.'},
            {name:'Pros: ', value: 'Excelente daño y cadencia.'},
            {name:'Contras: ', value: 'Debiles y poca precision.'}

        )
        .setImage("https://conqhub.com/images/units/imperial-arquebusiers/imp_arqu_bot_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arcydh :  function (message){
        const embed = new RichEmbed()
        .setColor('#458B00')
        .setTitle('Arcabuceros Yelmo de Hierro')
        .setDescription('UNIDAD RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628587767631892/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '145'},
            {name:'Descripcion: ', value: 'Unidad util para recien iniciantes dentro del juego debido a su proporcion costo/beneficio.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Buen daño.'},
            {name:'Contras: ', value: 'Imprecisos y poca cadencia.'}

        )
        .setImage("https://conqhub.com/images/units/ironcap-arquebusiers/iro_arqu_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqfue :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arqueros de Fuego')
        .setDescription('FUERA DE META')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628577046986762/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '180'},
            {name:'Descripcion: ', value: 'Unidad de distancia la cual tiene una habilidad que hacen que disparen flechas de fuego.'},
            {name:'Destaca en: ', value: 'Disparan fuego.'},
            {name:'Pros: ', value: 'Son buenos contra unidades no ignifugas.'},
            {name:'Contras: ', value: 'Muy debiles. Los arqueros Namhan son mucho mejores al mismo liderazgo.'}

        )
        .setImage("https://conqhub.com/images/units/incendiary-archers/ind_arc_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqleva :  function (message){
        const embed = new RichEmbed()
        .setColor('#D7DDEA')
        .setTitle('Arqueros de Leva')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628576111677511/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '80'},
            {name:'Descripcion: ', value: 'Son unos arqueros que se consiguen al inicio pero terminan siendo muy inutiles al punto de no rentar tenerlos.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Baratos.'},
            {name:'Contras: ', value: 'Muy imprecisas, con poco daño y muy debiles.'}

        )
        .setImage("https://conqhub.com/images/units/levy-bowmen/lev_bow_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arcpref :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arqueros de Prefectura')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628572416483408/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '185'},
            {name:'Descripcion: ', value: 'Es otro de los arqueros que tienen cierta probabilidad de poder lanzar fuego pero no renta en cuestion costo/beneficio.'},
            {name:'Destaca en: ', value: 'Probabilidad baja de lanzar flechas de fuego.'},
            {name:'Pros: ', value: 'Probabilidad baja de lanzar flechas de fuego.'},
            {name:'Contras: ', value: 'Debiles y poco daño.'}

        )
        .setImage("https://conqhub.com/images/units/prefecture-archers/pref_arc_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqsen :  function (message){
        const embed = new RichEmbed()
        .setColor('#458B00')
        .setTitle('Arqueros de Señorio')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628587767631892/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '120'},
            {name:'Descripcion: ', value: 'Poco daño y muy debiles.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Nada.'},
            {name:'Contras: ', value: 'Debiles.'}

        )
        .setImage("https://conqhub.com/images/units/demesne-archers/dem_arc_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqvan :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arqueros de Vanguardia')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628577046986762/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '160'},
            {name:'Descripcion: ', value: 'Arqueros no recomendados debido a su debil relacion en costo/beneficio.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Agiles.'},
            {name:'Contras: ', value: 'Muy debiles sin un daño significante.'}

        )
        .setImage("https://conqhub.com/images/units/vanguard-archers/van_arc_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqdagon :  function (message){
        const embed = new RichEmbed()
        .setColor('#458B00')
        .setTitle('Arqueros del Dragon Negro')
        .setDescription('DEBIL')      
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628588451311616/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '100'},
            {name:'Descripcion: ', value: 'Dentro de las unidades mercenarias resulta ser la mas barata pero igualmente no es rentable debido a su pobre relacion costo/rendimiento.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Barata.'},
            {name:'Contras: ', value: 'Debiles, poco daño y poco rango.'}

        )
        .setImage("https://conqhub.com/images/units/black-dragon-archers/bla_drag_arc_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqimp :  function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Arqueros Imperiales')
        .setDescription('UNIDAD DIFICIL DE USAR')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401691486306354/Arq_Imperi.png')
        .addFields(
            {name:'Liderazgo: ', value: '255'},
            {name:'Descripcion: ', value: 'Es uno de los mejores arqueros detras de los namkham esto a que su relacion consto/beneficio es un poco inferior, pero pueden llegar a ser rentables.'},
            {name:'Destaca en: ', value: 'Deletea heroes con flecha bodkin y penetra armadura.'},
            {name:'Pros: ', value: 'Muy precisa y poderosa.'},
            {name:'Contras: ', value: 'Costosos en cuestion liderazgo y debiles.'}

        )
        .setImage("https://conqhub.com/images/units/imperial-archers/imp_arc_vet_top_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqmil :  function (message){
        const embed = new RichEmbed()
        .setColor('#D7DDEA')
        .setTitle('Arqueros Milicianos')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628576111677511/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '75'},
            {name:'Descripcion: ', value: 'Arqueros de lvl mas bajo y mas deficientes dentro de los arqueros.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Baratos.'},
            {name:'Contras: ', value: 'Débil, poco daño y poco precisa.'}

        )
        .setImage("https://conqhub.com/images/units/archer-militia/arc_mil_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    niamcan :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arqueros Namkhan')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401735190941696/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '180'},
            {name:'Descripcion: ', value: 'De los mejores arqueros dentro del juego debido a su habilidad.'},
            {name:'Destaca en: ', value: 'Sangrado.'},
            {name:'Pros: ', value: 'Buen daño, buena cadencia y el sangrado le permite generar daño constante.'},
            {name:'Contras: ', value: 'son debiles.'}

        )
        .setImage("https://conqhub.com/images/units/namkhan-archers/nam_arch_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    vasallos :  function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Arqueros Vasallos')
        .setDescription('FUERA DE META')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628587486609468/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '245'},
            {name:'Descripcion: ', value: 'Esta unidad se especializa en cazar otras unidades de distancia debido a su gran rango.'},
            {name:'Destaca en: ', value: 'Son los arqueros con mas rango en el juego.'},
            {name:'Pros: ', value: 'Especialistas en cazar rango.'},
            {name:'Contras: ', value: 'Muy debil contra infanteria.'}

        )
        .setImage("https://conqhub.com/images/units/vassal-longbowmen/vas_lon_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    vibora :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arqueros Vibora')
        .setDescription('DEBIL')      
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628572416483408/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '165'},
            {name:'Descripcion: ', value: 'Unidad barata que daña con veneno pero tiene muy poco rendimiento.'},
            {name:'Destaca en: ', value: 'en nada.'},
            {name:'Pros: ', value: 'Tiene veneno.'},
            {name:'Contras: ', value: 'Debiles, poco daño y poca precision.'}

        )
        .setImage("https://conqhub.com/images/units/rattan-vipers/ratt_vip_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    arqydh :  function (message){
        const embed = new RichEmbed()
        .setColor('#458B00')
        .setTitle('Arqueros Yelmo de Hierro')
        .setDescription('DEBIL')
        //FALTA
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628576862441482/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '135'},
            {name:'Descripcion: ', value: 'Un poco mejores que los arqueros milicianos pero siguen siendo poco rentables.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Baratos.'},
            {name:'Contras: ', value: 'Poco daño, poca cadencia, débil y muy imprecisa.'}

        )
        .setImage("https://conqhub.com/images/units/ironcap-archers/iro_arc_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    falcos :  function (message){
        const embed = new RichEmbed()
        .setColor('#EFF00D')
        .setTitle('Artilleros Falconetti')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401711140802600/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '335'},
            {name:'Descripcion: ', value: 'Unidad para jugar en equipo (en bloque), ejerciendo daño considerable al tratarse de una artilleria movil. Dependiendo de la utilidad que se le da, se utiliza una veterania u otra.'},
            {name:'Destaca en: ', value: 'Utilizada para desbaratar pusheos o contra pusheos y para romper torres pero debe estar bien cubierta debido a que no tienen ataque melee.'},
            {name:'Pros: ', value: 'Gran daño en area, gran rango y gran cadencia.'},
            {name:'Contras: ', value: 'Depende mucho de que alguien la cubra ya que tiene nulo daño melee, poca velocidad y son pocas unidades.'}

        )
        .setImage("https://conqhub.com/images/units/falconetti-gunners/falco_gun_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    paves :  function (message){
        const embed = new RichEmbed()
        .setColor('#EFF00D')
        .setTitle('Ballesteros con Paves')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401779600252938/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '325'},
            {name:'Descripcion: ', value: 'Balleteros los cuales cuentan con un escudo para posible proteccion, son una de las mejores unidades a distancia dentro del juego.'},
            {name:'Destaca en: ', value: 'Sus habilidades ayudan a deletear heroes y anti caballeria.'},
            {name:'Pros: ', value: 'Buenas formaciones compactas, muy buen daño y resistentes.'},
            {name:'Contras: ', value: 'Cadencia deficiente. Requiere buenas doctrinas.'}

        )
        .setImage("https://conqhub.com/images/units/pavise-crossbowmen/pavise_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    ballsen :  function (message){
        const embed = new RichEmbed()
        .setColor('#458B00')
        .setTitle('Ballesteros de Señorio')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628587998334996/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '140'},
            {name:'Descripcion: ', value: 'Ballesteros mas baratos y malos del juego'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Daño decente.'},
            {name:'Contras: ', value: 'Poca cadencia y muy debiles.'}

        )
        .setImage("https://conqhub.com/images/units/demesne-crossbowmen/dem_cros_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    barciano :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Fuego Salvaje Barciano')
        .setDescription('UNIDAD DIFICIL DE USAR')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981691005201940510/barciano.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '175'},
            {name:'Descripcion: ', value: 'Unidad de distancia muy buena para ataque en area, pero no recomendable debido a que no tiene daño melee y no logran un gran rendimiento.'},
            {name:'Destaca en: ', value: 'Dejar a las tropas enemigas con quemado y romper formaciones.'},
            {name:'Pros: ', value: 'Gran daño en area.'},
            {name:'Contras: ', value: 'Poca municion. debiles y sin ataque melee.'}

        )
        .setImage("https://conqhub.com/images/units/zykalian-militia/barc-wild-vet-thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    kriesgrat :  function (message){
        const embed = new RichEmbed()
        .setColor('#4F039A')
        .setTitle('Fusileros Kriegsrat')
        .setDescription('UNIDAD RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401711803519047/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '265'},
            {name:'Descripcion: ', value: 'Son grandes arcabuceros los cuales son rentables por su costo beneficio.'},
            {name:'Destaca en: ', value: 'Unidad a distancia con mejor cadencia.'},
            {name:'Pros: ', value: 'Muchisima cadencia, muy precisos y con buen daño.'},
            {name:'Contras: ', value: 'Poca municion.'}

        )
        .setImage("https://conqhub.com/images/units/kriegsrat-fusiliers/krieg_fus_vet_thum.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    fuegos :  function (message){
        const embed = new RichEmbed()
        .setColor('#EFF00D')
        .setTitle('Guardia Prohibida')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401712474591262/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '350'},
            {name:'Descripcion: ', value: 'Unidad para jugar en equipo (bloque) y con gran daño a en área, buenisima para el control de masa.'},
            {name:'Destaca en: ', value: 'Su fuego frena a los heroes y tropas.'},
            {name:'Pros: ', value: 'Gran daño en area, rapidos y excelentes para el daño en area.'},
            {name:'Contras: ', value: 'Rango muy corto y sin daño a melee.'}

        )
        .setImage("https://conqhub.com/images/units/siphonarioi/barc-narf-gua-vet-thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    mosqjeniz :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Mosqueteros Jenizaros')
        .setDescription('UNIDAD RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981743575308042250/MoskJeniz.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '195'},
            {name:'Descripcion: ', value: 'Unidad de mosquete la cual es muy potente a distancia pero sin daño a melee.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Muy preciso y con mucho daño.'},
            {name:'Contras: ', value: 'Poca cadencia y nulo ataque melee.'}

        )
        .setImage("https://conqhub.com/images/units/janissaries/janis_top_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    chukonu :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Tiradores Con_Chu-Ko-Nu')
        .setDescription('UNIDAD RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981743765196787712/chokunu.PNG')
        .addFields(
            {name:'Liderazgo: ', value: '180'},
            {name:'Descripcion: ', value: 'Fuerte para el inicio de la temporada pero debil con el pasar de la misma.'},
            {name:'Destaca en: ', value: 'De los rangos con mejor cadencia del juego.'},
            {name:'Pros: ', value: 'Gran cadencia, buen daño y lanzan fuego.'},
            {name:'Contras: ', value: 'Debiles y poco daño a melee.'}

        )
        .setImage("https://conqhub.com/images/units/rattan-marksmen/ratt_mar_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    ciervoblanco :  function (message){
        const embed = new RichEmbed()
        .setColor('#458B00')
        .setTitle('Tiradores de Ciervo Blanco')
        .setDescription('DEBIL')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628588229001266/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '100'},
            {name:'Descripcion: ', value: 'Unidad mercenaria pobre en relacion costo/beneficio.'},
            {name:'Destaca en: ', value: 'En nada.'},
            {name:'Pros: ', value: 'Bonus que da el mercenario.'},
            {name:'Contras: ', value: 'Muy imprecisa y debil.'}

        )
        .setImage("https://conqhub.com/images/units/sea-stag-deathdealers/sea_stag_death_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    shenji :  function (message){
        const embed = new RichEmbed()
        .setColor('#EFF00D')
        .setTitle('Granaderos Shenji')
        .setDescription('UNIDAD ALTAMENTE RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401781026308096/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '315'},
            {name:'Descripcion: ', value: 'Son unos arcabuceros muy fuertes los cuales lanzan granadas que rompen formacion y hacen mucho daño.'},
            {name:'Destaca en: ', value: 'Gran daño a distancia, oneshotea heroes si estan aislados, rompen formacion.'},
            {name:'Pros: ', value: 'Buena cadencia, precision y daño con bombas. Destaca mucho mas con las correctas doctrinas.'},
            {name:'Contras: ', value: 'Requieren buena micro y no resisten mucho daño.'}

        )
        .setImage("https://conqhub.com/images/units/shenji-grenadiers/shenji_top_vet_thumb.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    perros :  function (message){
        const embed = new RichEmbed()
        .setColor('#EFF00D')
        .setTitle('Perros de Caza')
        .setDescription('UNIDAD RECOMENDADA')
        .setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981401779814146078/unknown.png')
        .addFields(
            {name:'Liderazgo: ', value: '320'},
            {name:'Descripcion: ', value: 'Son arqueros con buen daño que tienen perros de caza y generan hemorragia.'},
            {name:'Destaca en: ', value: 'Gran daño a distancia, mucho daño por hemorragia.'},
            {name:'Pros: ', value: 'Mucho daño constante.'},
            {name:'Contras: ', value: 'Poco resistentes.'}

        )
        .setImage("https://conqhub.com/images/units/houndsmen/houndsmen_bot_vet.png")
     
        .setFooter("*help")

        message.channel.send(embed);
    },

    
}