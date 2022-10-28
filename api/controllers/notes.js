const notesRouter = require('express').Router();
const { response } = require('../app');
const Note = require('../models/note')
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({}).populate('user', { username: 1, name: 1});
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

notesRouter.post('/', async (request, response) => {
    const body = request.body;
    const token = getTokenFrom(request);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' });
    }
    const user = await User.findById(decodedToken.id);
    const note = new Note({
        text: body.text,
        important: body.important === undefined ? false : body.important,
        date: new Date(),
        user: user._id
    })

    const savedNote = await note.save()
    user.notes = user.notes.concat(savedNote._id)
    await user.save()

    response.json(savedNote)
})

notesRouter.delete('/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        }).catch(err => next(err))
})

module.exports = notesRouter;