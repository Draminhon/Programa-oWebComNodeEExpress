const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const port = process.env.PORT || 3000

const fortunes = [
"Conquiste seus medos ou eles irão te conquistar",
"Rios precisam da primavera",
"Não tema o que você não conhece",
"Você terá uma surpresa agradável",
"Sempre que possível, mantenha simples."
]

app.engine('handlebars', engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
   res.render('about', {fortunee: randomFortune})
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {

    console.log(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log (
    `Express started on http://localhost:${port};`
))