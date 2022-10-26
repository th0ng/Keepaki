const notesRouter = require('express').Router();
const { response } = require('../app');
const Note = require('../models/note')
const User = require('../models/user');

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({});
    console.log(notes);
    res.json(notes);
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

notesRouter.post('/', async (req, res, next) => {
    const body = req.body;

    const user = await User.findById(body.userId);

    const note = new Note({
        text: body.text,
        date: new Date(),
        user: user._id
    })

    const savedNote = await note.save();
    user.notes = user.notes.concat(savedNote._id);
    await user.save();

    res.json(savedNote);
})

notesRouter.delete('/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        }).catch(err => next(err))
})

module.exports = notesRouter;