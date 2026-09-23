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
        heading: "Una app para ver películas en pareja",
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
        question: "¿Hay una app para ver películas en pareja?",
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
    related: ["peliculas-para-ver-en-pareja", "noche-de-peliculas-con-amigos"],
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
    related: ["peliculas-para-ver-en-pareja", "peliculas-para-ver-en-familia"],
  },
];

export const guideEsBySlug = (slug: string) =>
  guidesEs.find((guide) => guide.slug === slug);
