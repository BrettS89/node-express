const { Router } = require('express');
const { randomBytes } = require('crypto');

const db = require('../db');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json([]);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const artist = {};

  res.json(artist);
});

router.post('/', (req, res) => {
  try {
    const id = randomBytes(4).toString('hex');

    const artist = {
      id,
      name: 'Chris Brown',
    };
  
    db.artists.push(artist);
  
    res.status(201).json(artist);

  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
