import type { Guide } from "./guides";

/**
 * Spanish guides (/es/guias/*). Neutral Latin American Spanish, "tú".
 *
 * Mexican search demand in this space is mostly list intent ("películas para
 * ver en pareja" 6.6k/mo, "películas para ver en familia" 18.1k/mo, "noche de
 * películas" 720/mo, Sep 2026), so each guide pairs a short list of well-known
 * titles with the "choose together" method rather than being method-only.
 *
 * Titles use their Latin American release name with the original title and
 * year in parentheses, which also helps readers in Spain where names differ.
 * Never claim a title is on a specific service: catalogs change by country.
 */
export const guidesEs: Guide[] = [
  {
    slug: "peliculas-para-ver-en-pareja",
    title: "Películas para ver en pareja (y cómo elegir una que les guste a los dos)",
    metaTitle: "Películas para ver en pareja: 15 ideas y cómo elegir",
    description:
      "15 películas para ver en pareja según el plan de la noche, desde comedias hasta suspenso, y un método de cinco minutos para elegir sin discutir.",
    published: "2026-09-23",
    updated: "2026-09-23",
    answer:
      "Para elegir una película en pareja, cada uno propone por separado tres títulos que sí vería, se quedan solo con los que coinciden y deciden por el tono de la noche, no por el género. Abajo tienes 15 ideas por estado de ánimo, y no todas son románticas.",
    intro: [
      "El problema casi nunca es que no haya nada que ver. Es que hay demasiado, y cada propuesta abre una pequeña negociación: \"esa ya la vi\", \"hoy no tengo ganas de algo tan pesado\", \"¿y si mejor otra cosa?\". Cuarenta minutos después siguen buscando.",
      "Esta guía tiene dos partes: un método rápido para decidir entre los dos y una lista de películas agrupadas por el tipo de noche que quieren tener.",
    ],
    sections: [
      {
        heading: "Cómo elegir en cinco minutos",
        ordered: true,
        list: [
          "Cada uno escribe, sin mostrarle al otro, tres películas o series que sí vería hoy.",
          "Comparen las listas. Si hay alguna en común, ya está: esa es la elegida.",
          "Si no coinciden, cada uno tacha una opción de la lista del otro, sin dar explicaciones.",
          "De lo que queda, elijan por el tono que quieren (reír, tensión, algo ligero), no por el género.",
          "Si siguen empatados, decide quien no eligió la última vez.",
        ],
      },
      {
        heading: "Para reír juntos",
        list: [
          "Loco y estúpido amor (Crazy, Stupid, Love, 2011): comedia con buen reparto y giros que sorprenden.",
          "Palm Springs (2020): dos personas atrapadas en el mismo día que se repite. Ligera y original.",
          "Pequeña Miss Sunshine (Little Miss Sunshine, 2006): un viaje familiar desastroso y entrañable.",
        ],
      },
      {
        heading: "Suspenso que engancha a los dos",
        list: [
          "Perdida (Gone Girl, 2014): un thriller sobre un matrimonio que da para conversar después.",
          "Entre navajas y secretos (Knives Out, 2019): misterio clásico con mucho humor. Ideal para adivinar juntos quién fue.",
          "Parásitos (Parasite, 2019): empieza como comedia y termina en otra cosa. Mejor verla sin saber nada.",
        ],
      },
      {
        heading: "Romance que no empalaga",
        list: [
          "Antes del amanecer (Before Sunrise, 1995): dos desconocidos, una noche en Viena y pura conversación.",
          "La La Land: Una historia de amor (La La Land, 2016): musical moderno con un final que da de qué hablar.",
          "Vidas pasadas (Past Lives, 2023): sobria, bonita y muy fácil de ver.",
        ],
      },
      {
        heading: "Aventura y ciencia ficción",
        list: [
          "Interestelar (Interstellar, 2014): épica espacial con mucha emoción. Para una noche sin prisa.",
          "Mad Max: Furia en el camino (Mad Max: Fury Road, 2015): dos horas de acción casi sin pausa.",
          "Duna (Dune, 2021): ciencia ficción a lo grande. Si les gusta, hay segunda parte.",
        ],
      },
      {
        heading: "Animación que también es para adultos",
        list: [
          "Intensa-Mente (Inside Out, 2015): divertida y más profunda de lo que parece.",
          "Spider-Man: Un nuevo universo (Spider-Man: Into the Spider-Verse, 2018): visualmente única, aunque no les gusten los superhéroes.",
          "El viaje de Chihiro (Spirited Away, 2001): el clásico de Studio Ghibli que conviene ver al menos una vez.",
        ],
      },
      {
        heading: "Series para ver en pareja",
        paragraphs: [
          "Si prefieren algo para varias noches, una serie evita tener que decidir cada vez. Algunas que suelen funcionar con gustos distintos: The Office (2005), una comedia de episodios cortos; Ted Lasso (2020), optimista y divertida; Stranger Things (2016), aventura con nostalgia ochentera; y Dark (2017), para quienes disfrutan armar rompecabezas.",
          "Dónde está disponible cada título cambia según el país y la plataforma, así que conviene revisarlo antes de decidir.",
        ],
      },
      {
        heading: "Cuando tienen gustos opuestos",
        paragraphs: [
          "Casi siempre hay coincidencias en los bordes. A quien le encanta el terror y a quien no lo soporta suelen gustarles los thrillers. Quien quiere acción y quien quiere drama suelen coincidir en una buena película de atracos o de misterio.",
          "Otra opción que funciona: turnarse. Una noche elige uno, la siguiente el otro, con la única regla de que la elección no puede ser algo que el otro ya dijo que odia.",
        ],
      },
      {
        heading: "Una app para elegir qué película ver en pareja",
        paragraphs: [
          "ReelMatch automatiza el método de las dos listas. Cada uno desliza tráilers en su propio teléfono cuando tiene un rato: dice que sí a lo que vería y descarta lo demás. Cuando los dos dicen que sí al mismo título, aparece en su lista de coincidencias.",
          "Como decidieron antes, a la hora de ver algo solo eligen de una lista que los dos ya aprobaron. ReelMatch es gratis en iPhone y Android. Por ahora la app está en inglés, pero es muy visual.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué película ver en pareja que no sea romántica?",
        answer:
          "Un buen misterio o una comedia suelen funcionar mejor que un romance cuando los gustos son distintos. Entre navajas y secretos (2019), Parásitos (2019) o Palm Springs (2020) son opciones que le gustan a casi todos y dan tema de conversación después.",
      },
      {
        question: "¿Cómo elegimos si tenemos gustos muy distintos?",
        answer:
          "Cada uno propone tres títulos por separado y se quedan con los que coinciden. Si no hay coincidencias, cada uno tacha una opción del otro y deciden por el tono de la noche en lugar del género. Los thrillers y las películas de misterio suelen ser terreno común.",
      },
      {
        question: "¿Hay una app para elegir qué película ver en pareja?",
        answer:
          "Sí. ReelMatch es una app gratuita para iPhone y Android en la que cada uno desliza tráilers en su teléfono y la app muestra solo los títulos que a los dos les gustan. Por ahora la interfaz está en inglés.",
      },
      {
        question: "¿Dónde puedo ver estas películas?",
        answer:
          "Depende de tu país y de las plataformas que tengas, y los catálogos cambian cada mes. ReelMatch muestra en qué plataforma está disponible cada título para que lo reproduzcas en la que ya pagas.",
      },
    ],
    related: ["noche-de-peliculas-con-amigos", "peliculas-para-ver-en-familia"],
  },

  {
    slug: "peliculas-para-ver-en-familia",
    title: "Películas para ver en familia: ideas por edad y cómo elegir sin discusiones",
    metaTitle: "Películas para ver en familia: ideas por edad",
    description:
      "Películas para ver en familia organizadas por edad, de los más pequeños a los adolescentes, y cómo elegir una que les guste a todos sin discutir.",
    published: "2026-09-23",
    updated: "2026-09-23",
    answer:
      "Para elegir una película en familia, parte de la edad del más pequeño, deja que cada persona proponga una opción y quédense con la que nadie rechaza. Abajo hay 16 ideas organizadas por edad, más clásicos que funcionan con todos.",
    intro: [
      "Elegir película en familia tiene una dificultad extra: no solo cambian los gustos, también cambian las edades. Lo que entretiene a un niño de seis años aburre a uno de catorce, y lo que le gusta al de catorce puede no ser apropiado para el de seis.",
      "La buena noticia es que hay películas que funcionan para todos. Aquí tienes cómo elegir y una lista para empezar.",
    ],
    sections: [
      {
        heading: "Cómo elegir sin que nadie se enoje",
        ordered: true,
        list: [
          "Empiecen por la edad del más pequeño: eso define qué opciones son posibles.",
          "Cada persona propone una película. Los niños también.",
          "Cada uno puede vetar una opción, sin tener que explicar por qué.",
          "Si queda más de una, elijan la más corta. Una película de 90 minutos suele terminar mejor que una de tres horas.",
          "Anoten quién eligió, para que la próxima vez le toque a otra persona.",
        ],
      },
      {
        heading: "Para los más pequeños",
        list: [
          "Toy Story (1995): el clásico de Pixar que sigue funcionando con todas las edades.",
          "Coco (2017): música, color y una historia que emociona a grandes y chicos.",
          "Mi vecino Totoro (My Neighbor Totoro, 1988): tranquila y mágica, ideal para niños pequeños.",
          "Buscando a Nemo (Finding Nemo, 2003): aventura, humor y un final que deja contentos a todos.",
        ],
      },
      {
        heading: "De 8 a 12 años",
        list: [
          "Paddington 2 (2017): divertida, tierna y con un humor que también disfrutan los adultos.",
          "Encanto (2021): musical con canciones que se quedan pegadas.",
          "Cómo entrenar a tu dragón (How to Train Your Dragon, 2010): aventura con dragones y mucho corazón.",
          "Harry Potter y la piedra filosofal (Harry Potter and the Sorcerer's Stone, 2001): el comienzo perfecto para una saga en familia.",
        ],
      },
      {
        heading: "Con adolescentes",
        list: [
          "Volver al futuro (Back to the Future, 1985): comedia de ciencia ficción que no pasa de moda.",
          "Parque Jurásico (Jurassic Park, 1993): aventura con suspenso. Algunas escenas pueden asustar a los más chicos.",
          "Los Juegos del Hambre (The Hunger Games, 2012): acción y tensión para adolescentes y adultos.",
          "Spider-Man: Un nuevo universo (Spider-Man: Into the Spider-Verse, 2018): animación con un estilo que encanta a los adolescentes.",
        ],
      },
      {
        heading: "Clásicos que funcionan con todos",
        list: [
          "Up: Una aventura de altura (Up, 2009): los primeros diez minutos emocionan a cualquiera.",
          "Los Increíbles (The Incredibles, 2004): superhéroes, humor y una familia muy reconocible.",
          "Wall-E (2008): casi sin diálogos al principio, así que funciona incluso con los más pequeños.",
          "Intensa-Mente (Inside Out, 2015): divertida para los niños y reveladora para los adultos.",
        ],
      },
      {
        heading: "Revisa la clasificación de edad",
        paragraphs: [
          "Cada país tiene su propio sistema de clasificación y no siempre coinciden. Antes de elegir algo para niños, revisa la clasificación de tu país y, si tienes dudas, mira el tráiler primero: en un par de minutos sabrás si el tono es el adecuado.",
        ],
      },
      {
        heading: "Elegir en familia con ReelMatch",
        paragraphs: [
          "En ReelMatch cada persona desliza tráilers en su propio teléfono y la app muestra los títulos a los que todos dijeron que sí. Funciona con grupos de tres o más, así que sirve para familias en las que ya varios tienen teléfono.",
          "Ver el tráiler antes de decidir ayuda mucho con los niños: se nota rápido si algo les va a dar miedo o si les va a aburrir. ReelMatch es gratis en iPhone y Android. Por ahora la app está en inglés.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué película ver en familia con niños pequeños?",
        answer:
          "Las películas de animación con historias sencillas y poco suspenso son la opción más segura: Toy Story (1995), Buscando a Nemo (2003) o Mi vecino Totoro (1988) funcionan bien desde muy pequeños y también entretienen a los adultos.",
      },
      {
        question: "¿Cómo sé si una película es apropiada para mis hijos?",
        answer:
          "Revisa la clasificación de edad de tu país, que suele aparecer en la plataforma donde la vas a ver, y mira el tráiler antes. Un tráiler de dos minutos muestra bastante bien el tono y si hay escenas que puedan asustar.",
      },
      {
        question: "¿Cómo evitamos discutir para elegir película en familia?",
        answer:
          "Que cada persona proponga una opción, que cada uno pueda vetar una sin dar explicaciones y que elijan entre lo que queda. Llevar la cuenta de quién eligió la última vez evita que siempre decida la misma persona.",
      },
      {
        question: "¿ReelMatch sirve para elegir película en familia?",
        answer:
          "Sí, si varias personas de la familia tienen teléfono. Cada una desliza tráilers en su propio teléfono y la app muestra los títulos a los que todos dijeron que sí. Es gratis en iPhone y Android, y por ahora la interfaz está en inglés.",
      },
    ],
    related: ["peliculas-para-adolescentes", "peliculas-para-ver-en-pareja", "noche-de-peliculas-con-amigos"],
  },

  {
    slug: "noche-de-peliculas-con-amigos",
    title: "Noche de películas con amigos: ideas y cómo elegir en grupo",
    metaTitle: "Noche de películas con amigos: ideas y cómo elegir",
    description:
      "Cómo organizar una noche de películas con amigos: un método para elegir en grupo sin debates eternos y 15 películas para ver con amigos por género.",
    published: "2026-09-23",
    updated: "2026-09-23",
    answer:
      "Para elegir película en grupo, no abran la decisión a todos a la vez: cada persona propone opciones en privado, arman una lista corta que nadie rechaza y eligen de ahí por votación. Abajo hay 15 películas para ver con amigos, de comedia a terror.",
    intro: [
      "Elegir entre dos personas ya cuesta. Entre cuatro o cinco, la discusión puede durar más que la película. No es un problema de gustos: es que cuantas más personas opinan en voz alta, más fácil es que alguien diga que no.",
      "Esta guía explica cómo decidir rápido en grupo y trae ideas para distintos tipos de noche.",
    ],
    sections: [
      {
        heading: "Cómo elegir en grupo sin debates eternos",
        ordered: true,
        list: [
          "Antes de juntarse, cada persona manda por mensaje privado tres títulos que sí vería.",
          "Una persona junta todo y quita los repetidos: los que aparecen más de una vez ya son favoritos.",
          "Cada uno tiene un solo veto, que usa en privado.",
          "Con lo que queda, voten. Si hay empate, elijan al azar.",
          "Definan la duración máxima antes de empezar: entre semana, mejor menos de dos horas.",
        ],
      },
      {
        heading: "Comedias para reír en grupo",
        list: [
          "Supercool (Superbad, 2007): la comedia de amigos por excelencia.",
          "¿Qué pasó ayer? (The Hangover, 2009): una despedida que sale muy mal. Funciona mejor en grupo.",
          "Damas en guerra (Bridesmaids, 2011): comedia con escenas que se recuerdan durante años.",
          "Relatos salvajes (2014): seis historias argentinas de humor negro. Ideal para comentar entre una y otra.",
        ],
      },
      {
        heading: "Terror para ver con amigos",
        list: [
          "¡Huye! (Get Out, 2017): terror con crítica social que da mucho de qué hablar después.",
          "El conjuro (The Conjuring, 2013): sustos clásicos, perfectos para ver en grupo con las luces apagadas.",
          "Un lugar en silencio (A Quiet Place, 2018): tensión constante. Hasta el grupo se queda callado.",
        ],
      },
      {
        heading: "Acción sin pausa",
        list: [
          "John Wick (2014): acción directa y sin complicaciones. Si gusta, hay varias secuelas.",
          "Misión Imposible: Repercusión (Mission: Impossible – Fallout, 2018): escenas de acción espectaculares.",
          "Mad Max: Furia en el camino (Mad Max: Fury Road, 2015): dos horas de persecución que no aburren a nadie.",
        ],
      },
      {
        heading: "Misterio para adivinar juntos",
        list: [
          "Entre navajas y secretos (Knives Out, 2019): perfecta para apostar quién fue.",
          "Nueve reinas (2000): estafadores en Buenos Aires y un final que sorprende.",
          "Contratiempo (2016): thriller español lleno de giros. Mejor no leer nada antes.",
          "Perdida (Gone Girl, 2014): cada quien termina con su propia teoría.",
          "Parásitos (Parasite, 2019): funciona igual de bien en grupo que en pareja.",
        ],
      },
      {
        heading: "Cómo organizar la noche",
        list: [
          "Elijan la película antes de juntarse, no cuando ya están todos en el sillón.",
          "Revisen en qué plataforma está disponible y que alguien tenga la cuenta.",
          "Pongan una hora de inicio y respétenla. Los que lleguen tarde se ponen al día.",
          "Preparen las botanas antes de dar play para no pausar a cada rato.",
        ],
      },
      {
        heading: "Elegir en grupo con ReelMatch",
        paragraphs: [
          "ReelMatch hace el método de la lista corta de forma automática. Durante la semana, cada persona desliza tráilers en su teléfono y la app guarda solo los títulos a los que todo el grupo dijo que sí. El día de la noche de películas ya tienen la lista lista.",
          "Funciona con grupos de tres o más, y personas con iPhone y con Android pueden usarla juntas. Es gratis. Por ahora la app está en inglés, pero es muy visual.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué película ver con amigos?",
        answer:
          "Depende del plan, pero las comedias y las películas de misterio suelen funcionar mejor en grupo porque todos participan: se ríen juntos o intentan adivinar el final. Supercool (2007), Entre navajas y secretos (2019) o Relatos salvajes (2014) son apuestas seguras.",
      },
      {
        question: "¿Cómo elegir una película entre muchas personas?",
        answer:
          "Recojan propuestas en privado antes de juntarse, armen una lista corta sin repetidos, den un veto a cada persona y voten entre lo que quede. Así nadie tiene que decir que no en voz alta y la decisión toma minutos.",
      },
      {
        question: "¿Cómo organizar una noche de películas?",
        answer:
          "Elijan la película con anticipación, confirmen en qué plataforma está disponible, acuerden una hora de inicio y preparen las botanas antes de empezar. Si el grupo es grande, lo más difícil es elegir, así que conviene resolverlo antes.",
      },
      {
        question: "¿Hay una app para elegir película en grupo?",
        answer:
          "Sí. En ReelMatch cada persona desliza tráilers en su teléfono y la app muestra los títulos a los que todo el grupo dijo que sí. Es gratis en iPhone y Android, y por ahora la interfaz está en inglés.",
      },
    ],
    related: ["peliculas-de-terror-para-ver-con-amigos", "peliculas-para-ver-en-pareja", "peliculas-para-ver-en-familia"],
  },
  {
    slug: "peliculas-de-terror-para-ver-con-amigos",
    title: "Películas de terror para ver con amigos (y otras para Halloween en familia)",
    metaTitle: "Películas de terror para ver con amigos y en Halloween",
    description:
      "23 películas de terror para ver con amigos, de la comedia de miedo al terror de verdad, más clásicos en español y opciones de Halloween en familia.",
    published: "2026-09-29",
    updated: "2026-09-29",
    answer:
      "Las mejores películas de terror para ver con amigos son las que se disfrutan reaccionando juntos: comedias de miedo como Scream o Feliz día de tu muerte, películas de tensión como Un lugar en silencio y terror inteligente como ¡Huye!. Pónganse de acuerdo en cuánto miedo quieren antes de elegir. Abajo tienes 23 ideas ordenadas de menos a más miedo.",
    intro: [
      "El terror es el mejor género para ver en grupo. Los sustos dan más risa, la tensión se siente más y al final todos tienen algo que comentar.",
      "Lo único que hay que acertar es el nivel de miedo. No es lo mismo un grupo con un fan del terror y tres amigos nerviosos que uno donde todos ya lo han visto todo. Por eso la lista va de menos a más miedo.",
    ],
    sections: [
      {
        heading: "Primero, ¿cuánto miedo quieren?",
        ordered: true,
        list: [
          "Pregunten al grupo si quieren algo divertido, tenso o que dé miedo de verdad.",
          "Cada persona propone títulos en privado y se descarta lo que pase del nivel acordado.",
          "Cada quien tiene un veto, sin dar explicaciones.",
          "Vean los tráilers de las dos o tres finalistas. Eso lo decide más rápido que cualquier debate.",
        ],
      },
      {
        heading: "Para reír y gritar: comedias de terror",
        list: [
          "Scream: Grita antes de morir (Scream, 1996): un slasher que conoce todas las reglas del terror y juega con ellas.",
          "Feliz día de tu muerte (Happy Death Day, 2017): un bucle temporal con asesino, más divertido que aterrador.",
          "La cabaña del terror (The Cabin in the Woods, 2012): empieza como el típico terror en el bosque y se convierte en otra cosa.",
          "Boda sangrienta (Ready or Not, 2019): un juego de escondidas mortal con mucho humor negro.",
          "Shaun of the Dead (2004): un apocalipsis zombi convertido en comedia británica.",
        ],
      },
      {
        heading: "Tensión para todo el grupo",
        list: [
          "Un lugar en silencio (A Quiet Place, 2018): toda la sala se queda callada junto con los personajes.",
          "El conjuro (The Conjuring, 2013): casa embrujada clásica, muy bien hecha.",
          "It (Eso) (It, 2017): una historia de amigos con un payaso que da mucho miedo.",
          "Nosotros (Us, 2019): unas vacaciones familiares que salen muy, muy mal.",
        ],
      },
      {
        heading: "Terror para comentar después",
        list: [
          "¡Huye! (Get Out, 2017): terror con crítica social que da para mucha conversación.",
          "Noches de terror (Barbarian, 2022): una casa rentada con giros que nadie ve venir.",
          "El legado del diablo (Hereditary, 2018): lenta, perturbadora e inolvidable. Solo para un grupo que quiera pasarla mal de verdad.",
        ],
      },
      {
        heading: "Terror en español",
        list: [
          "El orfanato (2007): una historia de fantasmas española que asusta y conmueve.",
          "[REC] (2007): grabada como un reportaje en un edificio en cuarentena. Muy intensa.",
          "El espinazo del diablo (2001): Guillermo del Toro y un orfanato con un fantasma durante la Guerra Civil española.",
        ],
      },
      {
        heading: "Clásicos que no pueden faltar",
        list: [
          "Halloween (1978): el slasher original, todavía tenso.",
          "El resplandor (The Shining, 1980): un hotel vacío y un miedo que crece poco a poco.",
          "El exorcista (The Exorcist, 1973): para muchos, la película más aterradora de todas.",
        ],
      },
      {
        heading: "Halloween y Día de Muertos en familia",
        list: [
          "Abracadabra (Hocus Pocus, 1993): un clásico de Halloween para todas las edades.",
          "Beetlejuice (1988): espeluznante, absurda y muy divertida.",
          "El extraño mundo de Jack (The Nightmare Before Christmas, 1993): sirve para Halloween y para diciembre.",
          "Coraline y la puerta secreta (Coraline, 2009): da un poco de miedo, pero es apta para niños más grandes.",
          "Coco (2017): no es de terror, pero es la película perfecta para ver en familia en Día de Muertos.",
        ],
      },
      {
        heading: "Elegir en grupo con ReelMatch",
        paragraphs: [
          "En ReelMatch cada persona desliza tráilers en su teléfono y la app guarda solo los títulos a los que todo el grupo dijo que sí. Así encuentran la película de terror que todos se animan a ver. Es gratis en iPhone y Android, y por ahora la app está en inglés.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué película de terror ver con amigos?",
        answer:
          "Scream (1996) y Feliz día de tu muerte (2017) son las apuestas más seguras porque dan miedo y risa. Para algo más tenso, Un lugar en silencio (2018) o El conjuro (2013) funcionan muy bien en grupo.",
      },
      {
        question: "¿Qué película de terror ver si a alguien no le gusta el terror?",
        answer:
          "Elijan una comedia de terror como Feliz día de tu muerte (2017) o Shaun of the Dead (2004), o una película de tensión sin sangre como Un lugar en silencio (2018). Acuerden el nivel de miedo antes de empezar.",
      },
      {
        question: "¿Qué películas de Halloween ver en familia?",
        answer:
          "Abracadabra (1993), Beetlejuice (1988), El extraño mundo de Jack (1993) y Coraline y la puerta secreta (2009) funcionan para varias edades. Para Día de Muertos, Coco (2017) es la favorita.",
      },
      {
        question: "¿Cuáles son buenas películas de terror en español?",
        answer:
          "El orfanato (2007), [REC] (2007) y El espinazo del diablo (2001) son de las más recomendadas. Asustan de verdad y son perfectas para una noche de terror con amigos.",
      },
      {
        question: "¿Hay una app para elegir película en grupo?",
        answer:
          "Sí. En ReelMatch cada persona desliza tráilers en su teléfono y la app muestra los títulos a los que todo el grupo dijo que sí. Es gratis en iPhone y Android, y por ahora la interfaz está en inglés.",
      },
    ],
    related: ["noche-de-peliculas-con-amigos", "peliculas-para-adolescentes"],
  },
  {
    slug: "peliculas-para-adolescentes",
    title: "Películas para adolescentes que también disfrutan los papás",
    metaTitle: "Películas para adolescentes: 20 ideas para ver en familia",
    description:
      "20 películas para adolescentes que toda la familia puede ver junta, de clásicos de los 80 a favoritas recientes, y cómo elegir una que sí les guste.",
    published: "2026-09-29",
    updated: "2026-09-29",
    answer:
      "Las mejores películas para ver con adolescentes son las que ellos mismos elegirían: comedias con ingenio, historias sobre crecer y ciencia ficción inteligente, no \"películas familiares\". Deja que propongan o veten primero, revisen juntos la clasificación y usen el tráiler para decidir. Abajo tienes 20 ideas.",
    intro: [
      "Lograr que un adolescente vea una película con la familia ya es un logro. Lo difícil es encontrar algo que no le parezca infantil, que no sea demasiado fuerte para los papás y que no empiece una discusión antes de darle play.",
      "El truco es dejar que ellos lleven la iniciativa. Los adolescentes se interesan mucho más en una película que ayudaron a elegir. La lista mezcla clásicos que los papás disfrutarán volver a ver con películas recientes que quizá ya les dan curiosidad.",
    ],
    sections: [
      {
        heading: "Cómo elegir con tu hijo adolescente",
        ordered: true,
        list: [
          "Pide que proponga tres títulos y agrega uno tuyo.",
          "Cada quien tiene un veto, sin explicaciones.",
          "Revisen juntos la clasificación y el tráiler. Es una forma rápida y sin presión de ponerse de acuerdo en el tono.",
          "Si siguen sin decidir, elijan la más corta. Siempre pueden ver otra la próxima semana.",
        ],
      },
      {
        heading: "Clásicos que siguen funcionando",
        list: [
          "La princesa prometida (The Princess Bride, 1987): aventura, romance y comedia que gusta a todas las generaciones.",
          "Volver al futuro (Back to the Future, 1985): viajes en el tiempo, buenos chistes y una banda sonora que reconocerán.",
          "Todo en un día (Ferris Bueller's Day Off, 1986): la fantasía definitiva de faltar a clases.",
          "El club de los cinco (The Breakfast Club, 1985): cinco adolescentes muy distintos castigados un sábado. Mejor para los más grandes.",
        ],
      },
      {
        heading: "Comedias que sí les gustan",
        list: [
          "Chicas pesadas (Mean Girls, 2004): una comedia sobre los grupos de la prepa que muchos adolescentes se saben de memoria.",
          "10 cosas que odio de ti (10 Things I Hate About You, 1999): Shakespeare en versión preparatoria, y sigue funcionando.",
          "Escuela de rock (School of Rock, 2003): pura diversión, sobre todo si tu hijo toca algún instrumento.",
          "Jumanji: En la selva (Jumanji: Welcome to the Jungle, 2017): aventura y comedia que funciona para varias edades.",
        ],
      },
      {
        heading: "Historias sobre crecer",
        list: [
          "Las ventajas de ser invisible (The Perks of Being a Wallflower, 2012): amistad, pertenencia y encontrar a tu gente.",
          "IntensaMente 2 (Inside Out 2, 2024): la ansiedad y las emociones de la adolescencia, explicadas con humor.",
          "Extraordinario (Wonder, 2017): un niño con una diferencia facial empieza la escuela. Emotiva sin ser cursi.",
          "Juno (2007): divertida y honesta, con mucho de qué hablar después.",
          "Lady Bird (2017): una historia de madre e hija que papás e hijos ven desde lados distintos. Para adolescentes mayores.",
        ],
      },
      {
        heading: "Ciencia ficción y aventura",
        list: [
          "Misión rescate (The Martian, 2015): un astronauta varado en Marte resuelve problemas con ciencia y humor.",
          "Talentos ocultos (Hidden Figures, 2016): la historia real de las mujeres cuyas matemáticas llevaron astronautas al espacio.",
          "Duna (Dune, 2021): ciencia ficción épica para los que disfrutan de mundos grandes.",
          "Spider-Man: A través del Spider-Verso (Spider-Man: Across the Spider-Verse, 2023): animación espectacular que los adolescentes califican muy alto.",
        ],
      },
      {
        heading: "Un poco de miedo, sin exagerar",
        list: [
          "Un lugar en silencio (A Quiet Place, 2018): tensa más que sangrienta, ideal para verla juntos.",
          "Los juegos del hambre (The Hunger Games, 2012): intensa pero no gráfica, y la puerta de entrada a una saga.",
          "Coraline y la puerta secreta (Coraline, 2009): espeluznante y preciosa. Buena primera película de miedo para los más chicos.",
        ],
      },
      {
        heading: "Revisa la clasificación y luego el tráiler",
        paragraphs: [
          "La clasificación cambia según el país, así que revísala en la plataforma donde la vayan a ver. La clasificación dice más o menos qué contiene una película, pero un tráiler de dos minutos dice mucho más sobre el tono. Verlo juntos hace que la decisión se sienta compartida y no impuesta.",
        ],
      },
      {
        heading: "Elegir juntos con ReelMatch",
        paragraphs: [
          "En ReelMatch cada persona desliza tráilers en su teléfono y la app muestra los títulos a los que todos dijeron que sí. A los adolescentes suele gustarles porque tienen voz y voto sin tener que discutir. Es gratis en iPhone y Android, y por ahora la app está en inglés.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué películas ver con adolescentes?",
        answer:
          "Las comedias con ingenio, las historias sobre crecer y la ciencia ficción suelen funcionar mejor: Volver al futuro (1985), La princesa prometida (1987), Misión rescate (2015) y Spider-Man: A través del Spider-Verso (2023) son apuestas seguras que los papás también disfrutan.",
      },
      {
        question: "¿Cuáles son las mejores películas para adolescentes?",
        answer:
          "Entre las más recomendadas están El club de los cinco (1985), Chicas pesadas (2004), Las ventajas de ser invisible (2012), IntensaMente 2 (2024) y Los juegos del hambre (2012).",
      },
      {
        question: "¿Cómo convencer a mi hijo adolescente de ver una película en familia?",
        answer:
          "Déjalo elegir. Pídele tres propuestas, agrega una tuya, den un veto a cada quien y decidan con los tráilers. Es mucho más probable que se sume si la película fue en parte su idea.",
      },
      {
        question: "¿Hay una app para elegir película en familia?",
        answer:
          "Sí. En ReelMatch cada persona desliza tráilers en su teléfono y la app muestra los títulos a los que todos dijeron que sí. Es gratis en iPhone y Android, y por ahora la interfaz está en inglés.",
      },
    ],
    related: ["peliculas-para-ver-en-familia", "peliculas-de-terror-para-ver-con-amigos"],
  },
];

export const guideEsBySlug = (slug: string) =>
  guidesEs.find((guide) => guide.slug === slug);
