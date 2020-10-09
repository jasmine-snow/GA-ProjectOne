/*GA lecture*/
// let handOfCards = []

// int i;
// const = newArray = (animals1, animals2) => {
//   int makeNew [] = new int[n + 1];
//   for (i = 0; i &lt; n; i++)
//   newArray[i] = myArray[i];
//   return mre
// }
// const playHand = (cards) => {
//     handOfCards.push(cards)
//     console.log('handOfCards', handOfCards)
//   if (handOfCards.length == 2) {
//     handOfCards.empty(cards)
//
//   }
//   handOfCards = []
// }
// console.log(animal)
// const checkHand = (event) => {
//   if (animal === animal && handOfCards == 0) { // else if cards are are == and handOfCards is empty remove cards
//       animal.hide()
//   } else if  (animal !== animal)
//     console.log('try again')
//   }

// $(document).on('click', function(event){
//   for (let i = 0; i < handOfCards.length; i++) {
//     if (event.currentTarget.id == handOfCards[i].id) {
//     console.log('its a match!')
//   } else {
//     console.log('its not a match!')
//   }
// }
// })

// $(document).on('click', function(event){
//   for (let i = 0; i < handOfCards.length; i++) {
//     if (event.currentTarget.id == handOfCards[i].id) {
//     console.log('its a match!')
//   } else {
//     console.log('its not a match!')
//   }
// }
// })


$(()=>{


  const animalsArray = [
    {animal: 'Elephant', image: './img-project/elephant.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Iguana', image: './img-project/iguana.jpg', background:'./img-project/front-card.jpg' },
    {animal: 'Lion', image: './img-project/lion.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Panda', image: './img-project/panda.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Penguin', image: './img-project/penguin.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Pig', image: './img-project/pig.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Sheep', image: './img-project/sheep.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Zebra', image: './img-project/zebra.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Dog', image: './img-project/dog.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Hippo', image: './img-project/hippo.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Fox', image: './img-project/fox.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Owl', image: './img-project/owl.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Cat', image: './img-project/cat.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Giraffe', image: './img-project/giraffe.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Squirrel', image: './img-project/squirrel.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Elephant', image: './img-project/elephant.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Iguana', image: './img-project/iguana.jpg', background:'./img-project/front-card.jpg' },
    {animal: 'Lion', image: './img-project/lion.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Panda', image: './img-project/panda.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Penguin', image: './img-project/penguin.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Pig', image: './img-project/pig.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Sheep', image: './img-project/sheep.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Zebra', image: './img-project/zebra.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Dog', image: './img-project/dog.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Hippo', image: './img-project/hippo.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Fox', image: './img-project/fox.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Owl', image: './img-project/owl.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Cat', image: './img-project/cat.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Giraffe', image: './img-project/giraffe.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Squirrel', image: './img-project/squirrel.jpg', background:'./img-project/front-card.jpg'},

  ];
  /*==========
    shuffle/ /*============
      random generator from w3Schools
    =============*/

animalsArray.sort(function(a, b){return 0.5 - Math.random()});

/*===========
==============*/
  const get_animal_name = (unique_id) => {
     let animal = ""
     for (let i = 0; i < unique_id.length; i+=1) {
          if (unique_id[i].toLowerCase() != unique_id[i].toUpperCase()) {
              animal+=unique_id[i]
          }
          else {
              return animal
          }
     }
     return animal
  }

  const getCounter = () => {
      const counter = {}
      for(let i = 0; i < animalsArray.length; i+=1) {
        counter[animalsArray[i].animal] = 0
      }
      return counter;
    }

  const counter = getCounter()
    for (let i = 0; i < animalsArray.length; i++) {
    // let $div = $('<div>')
    let unique_id = animalsArray[i].animal + counter[animalsArray[i].animal]
    let $showBackground = $(`<div class="background-img"><img data-num=${i}  id="${unique_id}" src="${animalsArray[i].background}" class="animalBackCard"/></div>`)
    counter[animalsArray[i].animal]+=1

      $showBackground.addClass('showBackground')
      $('.flip-card-front').append($showBackground)
  }

      $(".animalBackCard").on("click", (event) => {
        let id=event.target.id
        let animal = get_animal_name(id)
        let animalObject = animalsArray.find( element => element.animal === animal)
          $(event.target).attr('src', animalObject.image)
        // playHand($(event.target))
      // sendAnalytics = function(message) {let animal = get_animal_name(id)}

      const playHand = (cards) => {
      if ($(event.currentTarget.id).length == 2) {
        if ($(event.currentTarget.id).first().data('animal') == $(event.currentTarget.id).last().data('animal')) {
          $(event.currentTarget.id).each(function(){
            $(this).animate({opacity: 0})
          });
        } else {
          //flip
        }
        $(event.currentTarget.id).each(function() {
          $(this).remove(animalObject)
        })
      }
    }

    })
    // function checkId(newId) {
    //   let twoOfAKind = animal;
    //   for (let key in animalsArray.length)
    //     if ($(event.target.id) == $(event.target.id)
    // }
    //
    // $(document).on('click', function(event){
    //   for (let i = 0; i < handOfCards.length; i++) {
    //     if (event.currentTarget.id == handOfCards[i].id) {
    //     console.log('its a match!')
    //   } else {
    //     console.log('its not a match!')
    //   }
    // }
    // })


  /*======================================
    when hand of cards is fixed I function below should work.
    if function below works
    - turn console.logs into alerts or append message to the body
    - find a way to remove the cards
    - and leave cards if they don't match

    until that solution is found I will move on and make a
    win game feature.
    ==========================================*/

/* ====================
finish winGame function
when animalsArray is empty alert you win!
===================*/
// const $winGame = () => {
//   for (let i = 0; i < 1; i++) {
//     //if there are no cards left then say 'you win!'
//     if ()
//   }
// }
//
//
});
