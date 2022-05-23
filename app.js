const obj = {
    name: 'Alyson',
    age: 24
}

console.log(obj)

const objJson = JSON.stringify(obj)
console.log(objJson)

const objRestored = JSON.parse(objJson)
console.log(objRestored)



let number = 42;
function showNumber() {
    console.log(number);
}

const functionJson = JSON.stringify(showNumber)
console.log(functionJson)



const parser = new DOMParser();

const text =
`<container>
    <div>
        -box1
        -box2
        -box3
    </div>
    <div>
        -box4
    </div>
</container>`

const xmlDoc = parser.parseFromString(text, "text/xml");
const htmlDoc = parser.parseFromString(text, "text/html");

console.log(xmlDoc)
console.log(htmlDoc)



//Compare um objeto serializado em JSON, XML e YAML
/*
`
{
    "titulo": "Serialização",
    "url": "https://www.google.com/search?q=serializacao"
    "posts": [
      {
        "titulo": "XML, JSON, YAML e Serialização de Objetos - Parte 1",
        "data": "23/05/2022"
      },
      {
        "titulo": "XML, JSON, YAML e Serialização de Objetos - Parte 2",
        "data": "23/05/2022"
      }
    ]
  }
`

`
<?xml version="1.0" enconding="UTF-8" ?>
<site>
    <titulo>Serialização</titulo>
    <url>https://www.google.com/search?q=serializacao</url>
    <post>
        <titulo>XML, JSON, YAML e Serialização de Objetos - Parte 1</titulo>
        <data>23/05/2022</data>
    </post>
    <post>
        <titulo>XML, JSON, YAML e Serialização de Objetos - Parte 2</titulo>
        </data>23/05/2022</data>
    </post>
</site>
`

`
site:
  titulo: Serialização
  url: https://www.google.com/search?q=serializacao
  post:
    titulo: XML, JSON, YAML e Serialização de Objetos - Parte 1
    data: 23/05/2022
  post:
    titulo: XML, JSON, YAML e Serialização de Objetos - Parte 2
    data: 23/05/2022
`
*/