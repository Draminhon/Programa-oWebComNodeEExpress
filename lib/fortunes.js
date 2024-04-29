const fortunes = [
    "Conquiste seus medos ou eles irão te conquistar",
    "Rios precisam da primavera",
    "Não tema o que você não conhece",
    "Você terá uma surpresa agradável",
    "Sempre que possível, mantenha simples."
]



module.exports = {
    getFortunes() {
        return fortunes[Math.floor(Math.random() * fortunes.length)]
    }
}