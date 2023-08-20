/** Given a list of lengthy words, returns a random word from the list.
* @returns {string} a random word from the lengthyWords list
*/
export function getWord() {
    const lengthyWords = [
        'anticonstitucionalissimamente',
        'inconstitucionalissimamente',
        'ultrassonoramente',
        'hipopotomonstrosesquipedaliofobia',
        'eletroencefalografista',
        'paralelepípedo',
        'anticonstitucional',
        'desoxirribonucleico',
        'antiestabelecimentarianismo',
        'esternocleidomastóideo',
        'fenilpropanolamina',
        'polissialoquissudative',
        'supercalifragilisticexpialidoso',
        'indivisibilidade',
        'hexakosioihexekontahexafobia',
        'pneumoultramicroscopicossilicovulcanoconiótico',
        'parassimpaticomimético',
        'contrarrevolucionário',
        'electrodoméstico',
        'eletronegatividade',
        'inconstitucionalidade',
        'controversamente',
        'anticonstitucionalidade',
        'anticonstitucionalidades',
        'interdisciplinar',
        'inconstitucionalidades',
        'anticonstitucionalíssimo',
        'anarquicocomunismo',
        'inconstitucionalíssimo',
        'aristocráticocomunismo',
        'anticonstitucionalíssimos',
        'anticonstitucionalíssimas',
        'anticonstitucionalíssimas',
        'perpendicular',
        'paralelogramo',
        'contemporaneidade',
        'inconstitucionalissimamente',
        'esternocleidomastoidiano',
        'radiotelescópico',
        'proparoxítona',
        'multidisciplinaridade',
        'inconstitucionalissimamente',
        'proparoxítonas'
    ];
    
    const randomIndex = Math.floor(Math.random() * lengthyWords.length);
    const randomWord = lengthyWords[randomIndex];
    return randomWord;    

}