const Tracks = require('../models/track.js');
const express = require('express');
const router = express.Router();


// Write your routes/controller functions here
// controllers/pets.js

// controllers/pets.js

// controllers/pets.js

// CREATE - POST - /tracks
router.post('/', async (req, res) => {
  try {
    const createdTrack = await Track.create(req.body);
    res.status(201).json(createdTrack);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});








// Export the router at the bottom of the file
module.exports = router;