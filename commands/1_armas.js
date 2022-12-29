
const { MessageEmbed: RichEmbed } = require('discord.js');
const code = "version 1.0.1" 
module.exports = {
    EspadaC :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Espada Corta')
        .setDescription('Arma meta para guerra, Muy usada para aguantar puntos y ayudar en el pusheo')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Lanzamiento de escudo(8s) \n -Carga con escudo(20s) \n -Acorazado(24s) \n -Relampago(45)'},
           {name:'Combo PVP', value: '**Lanzamiento de escudo** para relentizar para despues tirar **Carga con escudo** que stunea al jugador y da un golpe fuerte, y al momento en q se empieza a levantar usar **Relampago** para tirarte cerca de la victima causandole mucho daño y derribandola por segunda vez'},
           {name:'Uso guerra', value: 'Su principal objetivo es romper formaciones con su ulti **Relampago** y tanquear parte del daño que se recibe en el push (usando su escudo)'},
           {name:'Atributos', value: '100% Armadura'},
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996953923795570729/unknown.png?width=606&height=341")
        .attachFiles("https://cdn.discordapp.com/attachments/1002615878526959686/1002658347109064704/espcortacombo.mov")

        .setFooter(code)
    
        message.channel.send(embed);
    },
    
    Mosquete :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Mosquete')
        .setDescription('Con el uso de la runa se transforma en un arma de corta distancia, con mucha utilidad ya que es capaz de para caballerias, romper formaciones y deletear heroes ')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar(PvP)', value: '-Disparo de dispercion _(5s)_ \n -Combate cuerpo a cuerpo _(10s)_ \n -Polvora de primera _(12s)_ \n -Granada de polvora negra _(40s)_'},
            {name:'Habilidades a usar(TW)', value: '-Disparo de dispercion _(5s)_ \n -Combate cuerpo a cuerpo _(10s)_ \n -Escaramuza _(32s)_ \n -Granada de polvora negra _(40s)_'},
           {name:'Combo PVP', value: 'Como seria su combo'},
            {name:'Uso guerra', value: 'tarea'},
            {name:'Atributos(Disparos)', value: '100% Agilidad'},
            {name:'Atributos(granadas)', value: '100% Fuerza'},
            /*{name:'Pros: ', value: 'Tienen carga y buen brace'},
            {name:'Contras: ', value: 'Poco resistentes y fuera de meta'}*/
    
        )
        .attachFiles("https://cdn.discordapp.com/attachments/1002615878526959686/1002625783438778368/MosketeCombomedia.mov")

        .setImage("https://media.discordapp.net/attachments/996836014830137414/996836125857566720/unknown.png?width=720&height=384")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },

    HachaP :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Hacha de Petos')
        .setDescription('Caracterizada por ser de las más utiles a la hora de matar heroes por sus multiples stuns que hacen que el heroe no se peuda levantar del piso')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Segada _(8s)_ \n -Empujón _(15s)_ \n -Bec de corbin _(22s)_ \n -Justicia cruda _(45s)_'},
           {name:'Combo PVP', value: 'Se empieza con **Justicia cruda**, cuando termina toda la ulti se usa **segada** para volver a tirarlo, aprovechar el momento para dalr un golpe por la espalda, se vuelve a stunear a la victima con **empujon** y se cierra el combo con **bec de corbin**'},
            {name:'Uso guerra', value: 'Proteger unidades/artillerias, te deja matar asesinos (o armaduras livianos) con facilidad ya que **Justicia cruda** logra ganarle a la ulti de Doble Daga (arma más usada para matar atillereros y romper artilleria) matandolo o dejandolo con muy poca vida'},
            {name:'Atributos', value: '100% Armadura'},
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996836389800923147/unknown-1.png?width=720&height=346")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },
    EspadaL :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Espada Larga')
        .setDescription('Se destaca por us gran aguante y sus multiples bufos haciendola perfecta y casi impresindible para los pusheos y aguante en puntos, No es capaz de ganar un pvp... ni de perderlo')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Golpe de escudo _(10s)_ \n -Piedad celestial _(20s)_ \n -Juramento caballeresco _(36s)_ \n -Choque de escudos _(45s)_'},
           {name:'Combo "PVP" ', value: 'Como seria su combo'},
            {name:'Uso guerra', value: 'Su labor es usar   **Juramento caballeresco** antes del push para dar un aumento en la velocidad de movimineto, romper las ratoneras  con **Choque de escudo** y pos push curar unidades con **Piedad celestial** Para prepararse para otro pusheo o aguante '},
            {name:'Atributos', value: '100% Armadura'},
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996952924276142120/unknown.png?width=720&height=405")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },
    Nodachi :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Nodachi')
        .setDescription('No es la más recomendad para guerras pero no es la peor, Tiene un robo de vida continuo y pequeños "stuns" que sirven para entretener a heroes y ganar mucho tiempo. Todas sus habilidades son útiles (menos Marca de samurai)')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Pacto de sangre _(30s)_ \n -Garra de tigre _(13s)_ \n -Sanguinario _(9s)_ \n -Avalancha _(50s)_'},
           {name:'Combo PVP', value: 'Desmonte (Pega mucho!) - **Garra de tigre** - **Sanguinario** - **Pacto de sangre** - Un básico  - **Sanguinario** - (ganar espalda) - **Garra de tigre**'},
            {name:'Uso guerra', value: 'Barrer tropas enemigas y se puede usar para romper ratoneras'},
            /*{name:'Pros: ', value: 'Tienen carga y buen brace'},
            {name:'Contras: ', value: 'Poco resistentes y fuera de meta'}*/
    
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996953503014588477/unknown.png?width=720&height=405")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },
    Mazo :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Martillo de guerra')
        .setDescription('Si te especializas en raptar gente es tu arma, amada (por los que la usan) y odiadas (por las victimas) por su habilidad para robar y raptar gente, es capaz de romper formaciones y causar mucho daño a heroes')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-El grandioso Mjölnir _(9s)_ \n -La condena de Ukko _(8s)_ \n -Quebrantahuesos _(12s)_ \n -Combate bronco _(45s)_'},
           {name:'Combo PVP', value: 'Desmontar del caballo, usar **Combate bronco** (ulti) Practicar el combo de: Básico - esquive - Básico'},
            {name:'Uso guerra', value: 'raptar gente y matar tropas enemigas'},
            {name:'Atributos', value: '100% Armadura'},
    
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996953588037324811/unknown.png?width=720&height=405")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },

    Guja :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Guja')
        .setDescription('Buen arma para pusheos ya que puede aumentar el daño de sus aliados y romper formaciones')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Dios de la guerra _(24s)_ /Carga _(17s)_ \n -Fragor de batalla _(20s)_ \n -Saludo al señor de la guerra _(12s)_ \n -Vuelo fatal _(50s)_'},
           {name:'Combo PVP', value: 'Lo mejor es iniciar los PvP montado para molestar a los enemigos y cuando algún enemigo este lastimado o descuidado: **Saludo al señor** de la guerra  - **Vuelo fatal**.Se puede combinar **Dios de la guerra** para hacer mas daño. **Carga** es mejor para PvP para poder alcanzar a los enemigos o escapar de ellos."Fragor de batalla" es muy buena para defenderse de un daño fatal.'},
            {name:'Uso guerra', value: 'Es util para pusheos por sus buff.También sirve para rematar héroes con su ulti. Y en general es útil para molestar a caballo por su skill y su gran rango.'},
            {name:'Atributos', value: '100% Fuerza'},
            
    
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996953819982336100/unknown.png?width=720&height=405")
        .attachFiles("https://cdn.discordapp.com/attachments/1002615878526959686/1002654375749091398/gujacombo.mov")

     
        .setFooter(code)
    
        message.channel.send(embed);
    },

    Lanza :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Lanza')
        .setDescription('Arma muy poco usada no por ser mala si no por no ser la mejor, Es versatil cuerpo a cuerpo, muy divertida de usar. Deleteas heroes con un combo, o rematalos a distancia. ')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Marcha de Lug _(8s)_ \n -Tornado _(18s)_ \n -Regalo de Prócride _(16s)_ \n -Rugido del Dragon  _(50s)_'},
           {name:'Combo PVP', value: 'Tu caballo es tu mejor amigo, ya que tenes 2 habilidades con él. Una Stunea (poisicionada en la **Q**) y la otra es una Carga (Posicioanda en la **E**). Para empezar cualquier combate debes ir con tu caballo, tirarte con tu Stun(**Q**), inmediatamente despues de caer, haces un esquive hacia atrás y lanzas **Rugido de dragon**. Con eso ya casi eliminas a tu oponente. Usa **Marcha de lug** para quitarte stuns o derribos, y **Regalo de Procride** cuando tus enemigos huyan.'},
            {name:'Uso guerra', value: 'Trata de ir acompañado de tus unidades en lo posible, tu trabajo es One shotear heroes y salir con vida para hacer otro combo. Si puedes destruir artillerias hazlo con **Tornado**.'},
             {name:'Atributos', value: '100% Agilidad'},
            /*{name:'Pros: ', value: 'Tienen carga y buen brace'},
            {name:'Contras: ', value: 'Poco resistentes y fuera de meta'}*/
    
        )
        
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996954010626044067/unknown.png?width=1214&height=683")
        //.attachFiles("https://images-ext-1.discordapp.net/external/r96m4a4BA3TDa67iFmxpdJS9PynCx7i8B_WZQUk8L8o/https/media.tenor.com/Rcbre3WZklcAAAPo/agnes-por-favor.mp4")
        .setFooter(code)
    
        message.channel.send(embed);
        
    },

    DobleG :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Doble Daga')
        .setDescription('¿querés deletear heroes sin ser visto por nadie? Pues su tarea principal es deletear heroes y ser invisible el 70% del tiempo ')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Nube de alquimista _(24s)_ \n -Mariposa _(14s)_ \n -Infiltracion _(39s)_ \n -Marca Mortal _(45s)_'},
           {name:'Combo PVP', value: 'usar **Infiltracion** (o al bajarse del caballo ) se acerca a un heroe para aplicarle **Marca Mortal** seguido de **nube de alquimista** seleccionando mariposa'},
            {name:'Uso guerra', value: 'Buscar heroes masomenos solitarios y sacarlos de la batalla, tomar supply sin que nadie los vea o simplemente ser de espias y sevir se vision'},
            {name:'Atributos', value: '100% Fuerza'},

    
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996954842163597443/unknown.png?width=720&height=409")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },

     ArcoC :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arco Corto')
        .setDescription('Una molestia escurridisa, Arma de coolDowns muy cortos haciendote 100% molesto en todo momento, BAJO NINGUNA CIRCUNSTANCIA  se debe dejar de mover ya que es capaz de escapar de casi caulquier situacion')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Flecha de acero _(6s)_ / -Voleadorea _(16s)_ \n -Voltereta evasiva_(7s)_ \n -Disparo aturdidor _(12s)_ \n -Avispones Furiosos _(48s)_'},
           {name:'Combo PVP', value: 'Usar **Flecha de acero** para generar un mini freno y debilitandolo levemente, Stunear usando **Disparo aturdidor** generenado que se agache hacia adelante dando un angulo perfecto para usar **avispones furiosos** apuntando a la cabeza y cerrando con otra **Flecha de acero**'},
            {name:'Uso guerra', value: 'PRINCIPAL tarea es impedir que los enemigos coloquen artilleria (voleadoras, Disparo aturdidor y Avispones furiosos impiden esto) y en el caso de q que esté puesta romperla,Deletear  heroes con poca vida y entrar en pvps y salir sin morir'},
            {name:'Atributos', value: '100% Agilidad'},
    
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996955013106634772/unknown.png?width=720&height=445")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },
    Arco :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Arco Largo')
        .setDescription('Blanco o negro, sos muy bueno o sos inutil. Causa gran daño y puede molestar a gran distancia')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Habilidad 1(time CD) \n -Habilidad 2(time CD) \n -Habilidad 3(time CD) \n -Habilidad 4(time CD)'},
           {name:'Combo PVP', value: 'Como seria su combo'},
            {name:'Uso guerra', value: 'tarea'},
            {name:'Atributos', value: '100% Agilidad'},
    
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996959831879585802/unknown.png?width=720&height=450")
     
        .setFooter(code)
    
        message.channel.send(embed);
        message.channel.send("https://images-ext-1.discordapp.net/external/GZ3pLt_YdzFs7xQtwqU-54eAl_xha_lOn7uTL8gegsg/https/media.tenor.com/_hzf0RfV_w0AAAPo/pikachu-in-serious-mood-pikachu.mp4");
        
    },
    Pica :  function (message){
        const embed = new RichEmbed()
        .setColor('#3B7BF4')
        .setTitle('Pica ')
        .setDescription('Breve descripcion')
       //.addFields("Habilidades a usar","Lanzamiento de escudo \n Carga con escudo \n Acorazado \n Relampago")
        //.setThumbnail('https://cdn.discordapp.com/attachments/981401622133506138/981628632965472266/unknown.png')
        .addFields(
            {name:'Habilidades a usar', value: '-Dragon errante _(3s)_ \n -Dragon Celestial _(3s)_ \n -Monsón furioso 3 _(3s)_ \n -Rasga tormentas _(30s)_'},
           {name:'Combo PVP', value: 'Como seria su combo'},
            {name:'Uso guerra', value: 'tarea'},
            {name:'Atributos', value: '100% Agilidad'},
    
        )
        .setImage("https://media.discordapp.net/attachments/996836014830137414/996953227360747520/unknown.png?width=720&height=405")
     
        .setFooter(code)
    
        message.channel.send(embed);
    },
   
    
}