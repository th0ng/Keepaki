const notesRouter = require('express').Router();
const Note = require('../models/note')

notesRouter.get('/', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
})

notesRouter.get('/:id', (req, res, next) => {
    Note.findById(req.params.id)
        .then(note => {
            if (note) {
                res.json(note)
            } else {
                res.status(404).end()
            }
        }).catch(err => next(err))
})

notesRouter.post('/', (req, res, next) => {
    const body = req.body;

    const note = new Note({
        text: body.text,
        date: new Date(),
        group: body.group 
    })

    note.save()
        .then(savedNote => {
            res.json(savedNote)
        }).catch(err => next(err))
})

notesRouter.delete('/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        }).catch(err => next(err))
})

module.exports = notesRouter;