$('.calc-btn').click(function(){
    //On met à jour la valeur de l'input result à chaque fois qu'on clique sur un bouton
    //this => .calc-btn
    $('.result').val($('.result').val() + $(this).html());
})

//On cherche à effectuer une opération et à afficher un résultat
$('.equal').click(function(){
    let resultat = $('.result').val();

    //Si le contenu de l'input contient un "x" on le remplace par * qui est convenu pour les multiplications

    if(resultat.includes('x')){
        resultat = resultat.replace('x','*');
    }

    //Eval va évaluer les chaînes de caractères et va renvoyer le résultat de cette évaluation

    $('.result').val( eval(resultat) );
})


$('.clear').click(function(){
    //Quand on clique sur ce bouton, la valeur de l'input devient vide.
    $('.result').val('');
})

$('.delete').click(function(){

    //Quand on clique sur le bouton pour retirer un caractère, on compte le nombre d'éléments qui sont contenus dans l'input, et on les soustrait de 1 à chaque fois et ce, en utilisant substring.

    let resultat = $('.result').val();
    $('.result').val(resultat.substring(0, resultat.length - 1));
})