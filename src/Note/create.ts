require('../database')

const Note = require('../routes/Note')

const createNotes = async () => {
    const firstnote = new Note({
        title: 'alta nota',
        description: 'Jugar futbol'
    })
        await firstnote.save();

    const secondnote = new Note({
        title: 'alta joda',
        description: 'comprar cerveza'
    })
        await secondnote.save();

    const thirdnote = new Note({
        title: 'base de datos',
        description: 'agregar DB'
    })
        await thirdnote.save();
}

createNotes();