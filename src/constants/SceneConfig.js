export const TEXT_EVENTS = {
  FIRST_TEXT: 'FIRST_TEXT',
  MOVE_SECOND_BOAT: 'MOVE_SECOND_BOAT',
  SCENE_DAY: 'SCENE_DAY',
  SCENE_NIGHT: 'SCENE_NIGHT',
}

export const TEXT_TYPE = {
  TITLE: 'TITLE',
  NORMAL: 'NORMAL',
}

export const SCENE1 = {
  textArray: [
    { text: "Viaje de la vida", type: TEXT_TYPE.TITLE, duration: 7000, events: [] },
    { text: "Querido diario: ", duration: 7000, events: [] },
    { text: "Sabes ...", duration: 7000, events: [] },
    { text: "Siempre he pensado que todos somos capitanes de nuestro propio barco", duration: 7000, events: [] },
    { text: "Un barco llamado vida", duration: 7000, events: [] },
    { text: "Un barco que debemos navegar en un vasto oceano", duration: 7000, events: [] },
    { text: "Un oceano lleno de posibilidades.", duration: 7000, events: [] },
    { text: "La vida es como un viaje en el mar", duration: 7000, events: [] },
    { text: "Hay dias de calma", duration: 7000, events: [] },
    { text: "Dias de tormenta", duration: 7000, events: [] },
    { text: "Dias donde no pasa nada", duration: 7000, events: [] },
    { text: "y días en los que puede que todo suceda", duration: 7000, events: [] },
    { text: "lo importante es ser un buen capitan", duration: 7000, events: [] },
    { text: "Tratar de llevar el barco sin perder el rumbo y evitar la deriva", duration: 7000, events: [] },
    { text: "y quien sabes quizas en algún lugar del camino encontraremos a alguien que nos acompañe", duration: 7000, events: [] },
    { text: "a alguien que nos acompañe", duration: 7000, events: [] },



    { text: "Querido diario: ", duration: 7000, events: [] },
    { text: "En este viaje conocí a una persona muy especial", duration: 7000, events: [] },
    { text: "una persona que brillaba con luz propia", duration: 7000, events: [] },
    { text: "una persona que a pesar de las adversidades ha encontrado la fuerza para brillar", duration: 7000, events: [] },
    { text: "una persona que me hace desear conocerla, ya que como tu siempre dices...", duration: 7000, events: [] },
    { text: "«Lo esencial es invisible a los ojos", duration: 7000, events: [] },


    { text: "Año 2021", type: TEXT_TYPE.TITLE, duration: 7000, events: [] },
    { text: "Querido diario: ", duration: 7000, events: [] },
    { text: "Con ella encontré la paz que necesitaba en mi vida", duration: 7000, events: [] },
    { text: "Siempre que llega solo viene hacia mi y sonrie", duration: 7000, events: [] },
    { text: "Me encanta escuchar su voz, me relaja", duration: 7000, events: [] },
    { text: "tiene una sonrisa que ilumina mis días", duration: 7000, events: [] },
    { text: "y una mirada que me desarma.", duration: 7000, events: [] },


    { text: "Carta a mi amor", type: TEXT_TYPE.TITLE, duration: 7000, events: [] },
    { text: "Amor mío", duration: 5000, events: [TEXT_EVENTS.FIRST_TEXT] },
    { text: "Nuestro día ha llegado", duration: 25000, events: [TEXT_EVENTS.MOVE_SECOND_BOAT] },
    { text: "Nuestro primer año juntos 🎉, Un año lleno de recuerdos", duration: 7000, events: [] },
    { text: "Para mi ha sido un año lleno de los más hermosos recuerdos, los mejores momentos de mi vida", duration: 7000, events: [] },
    { text: "Nunca pensé en encontrar a una persona tan increible como tú", duration: 7000, events: [TEXT_EVENTS.SCENE_NIGHT] },
    { text: "Una persona llena de amor", duration: 7000, events: [] },
    { text: "Tan llena de virtudes y cualidades", duration: 7000, events: [] },
    { text: "Por todo esto quiero darte las gracias por estar en mi vida", duration: 7000, events: [] },
    { text: "Gracias por compartir tu vida y tu tiempo conmigo.", duration: 7000, events: [] },

    { text: "No se si fue por casualidad, suerte o cuestiones del destino que nuestros caminos se cruzaron", duration: 7000, events: [] },
    { text: "pero desde que te conocí mis días no son más grises.", duration: 7000, events: [] },

    { text: "«No te necesito y tu tampoco me necesitas...", duration: 7000, events: [] },
    { text: "Pero, si me domesticas tendremos necesidad el uno del otro.", duration: 7000, events: [] },
    { text: "Seras para mi unica en el mundo. Sere para ti unico en el mundo.", duration: 7000, events: [] },
    { text: "Te amo mi amor 😍", duration: 7000, events: [] },

  ]
};

