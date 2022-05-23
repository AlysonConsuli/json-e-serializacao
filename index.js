import express, { json } from 'express'
import xml from "xml";
import YAML from 'yaml'

const app = express()
app.use(json())

const obj1 = { name: 'Alyson' }
const obj2 = [{ games: [{ game: 'Halo' }, { game: 'COD' }] }]

console.log(xml(obj1))
console.log(xml(obj2))

const printYaml = YAML.stringify({ name: 'Alyson', age: 24, test: { test1: 1, test2: 2 } })
console.log(printYaml)

app.listen(5000)