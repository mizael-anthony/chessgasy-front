
// Cette méthode va bloquer le clavier si on ne saisie pas des lettres
export const OnlyLetter = (e) => {
    const LETTER = /[A-Za-z]/
        if(!(LETTER.test(e.key)))
            e.preventDefault()
}