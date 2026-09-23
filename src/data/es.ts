import type { Faq } from "./faq";

/**
 * Spanish landing page copy (/es). Written in neutral Latin American Spanish
 * addressed as "tú", so it reads naturally in Mexico, Colombia, Argentina and
 * Spain. "Movie matcher" stays in English because that is the phrase Mexican
 * searchers type.
 *
 * The app itself is English-only for now; the FAQ says so plainly rather than
 * letting Spanish speakers discover it after installing.
 */
export const esSteps = [
  {
    title: "Descarga ReelMatch",
    description: "Es gratis en el App Store y en Google Play.",
  },
  {
    title: "Conecta con tu gente",
    description: "Invita a tu pareja, a tus amigos o a tu familia.",
  },
  {
    title: "Desliza tráilers",
    description:
      "Di que sí a lo que te gustaría ver y descarta lo demás, cada quien en su teléfono.",
  },
  {
    title: "Elige de sus coincidencias",
    description:
      "Cuando dos o más dicen que sí al mismo título, aparece en su lista. Solo queda darle play.",
  },
];

export const esAudiences = [
  {
    title: "Para ver películas en pareja",
    description:
      "Gustos distintos, una sola noche. Ven solo las películas y series que a los dos les gustan, sin discutir.",
  },
  {
    title: "Con amigos",
    description:
      "Elige una película para un grupo de tres o más sin votaciones eternas en el chat.",
  },
  {
    title: "En familia",
    description:
      "Encuentren algo que todos quieran ver, sin que nadie tenga que ceder.",
  },
];

export const esFeatures = [
  "Tráilers primero: decides con 30 segundos de tráiler, no con un póster.",
  "Coincidencias en grupo para tres o más personas.",
  "iPhone y Android funcionan juntos, sin configuraciones extra.",
  "Títulos de Netflix, Prime Video, Disney+, Max, Apple TV+ y más.",
  "ReelMatch Pro: filtros por plataforma y género, y abre el título directo en tu smart TV.",
];

export const esFaqs: Faq[] = [
  {
    question: "¿ReelMatch es gratis?",
    answer:
      "Sí. Descargar y usar ReelMatch es gratis en iPhone y Android. Deslizar tráilers, armar tu lista y encontrar coincidencias no cuesta nada. ReelMatch Pro es opcional y agrega filtros por plataforma y género, además de abrir títulos directo en tu smart TV.",
  },
  {
    question: "¿Qué es un movie matcher?",
    answer:
      "Es una app que compara lo que cada persona dijo que quiere ver y muestra solo lo que tienen en común. No adivina tus gustos: cada coincidencia es un título que todos ya aprobaron, así que no hay nada que negociar.",
  },
  {
    question: "¿Sirve como app para ver películas en pareja?",
    answer:
      "Sí, es uno de los usos más comunes. Cada quien desliza tráilers en su teléfono cuando tiene un rato y, a la hora de ver algo, eligen de una lista que los dos ya aprobaron.",
  },
  {
    question: "¿La app está en español?",
    answer:
      "Por ahora la app está en inglés. Es muy visual, porque ves tráilers y deslizas, así que se usa sin problema aunque no domines el idioma.",
  },
  {
    question: "¿Con qué plataformas funciona?",
    answer:
      "ReelMatch incluye títulos de Netflix, Prime Video, Disney+, Max, Apple TV+ y otras plataformas. ReelMatch no transmite contenido: te ayuda a decidir qué ver y tú lo reproduces en la plataforma que ya tienes.",
  },
  {
    question: "¿Funciona entre iPhone y Android?",
    answer:
      "Sí. Una persona con iPhone y otra con Android pueden usar ReelMatch juntas sin ninguna configuración extra.",
  },
];
