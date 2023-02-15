const { Animal } = require('../models')

const create = async (req, res) => {
  try {
    const animal = await Animal.create(req.body)
    res.status(200).json(animal)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const animals = await Animal.findAll()
    res.status(200).json(animals)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
}