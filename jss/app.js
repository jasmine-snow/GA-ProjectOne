
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


  for (let i = 0; i < animalsArray.length; i++) {
    // let $div = $('<div>')
    let $showBackground = $(`<div class="background-img"><img data-num=${i} id="${i}" src="${animalsArray[i].background}" class="animalBackCard"/></div>`)

    // let $showImage = $(`<div class="images"><img id="${i}" class="animalCard"/></div>`)

    $showBackground.addClass('showBackground')
    $('.flip-card-front').append($showBackground)
/*make the background show when the page opens
  make page show animals and shuffle once animals are loaded*/
 }



    for (let i = 0; i < animalsArray.length; i++) {
    $(this).attr('src', animalsArray[i].background)
    console.log($(`#${i}`))
    $(`#${i}`).on("click", (event) => {
      console.log(event.currentTarget)
      $(event.target).attr('src', animalsArray[i].image)
      // playHand()
    })
    }
  // })


// key value functioning correctly
// but the data num is not updating.


  // const handOfCards = []
  //
  //
  // const playHand = () => {
  //   if (handOfCards.length === 2) {
  //     console.log('checking', handOfCards)
  //   } else {
  //     console.log('adding to', handOfCards)
  //   }
  // }
  //
  // const chooseRandomToStart = () => {
  //     let randomIndex = Math.floor(Math.random() * animalsArray.length)
  //        return animalsArray[randomIndex]
  //        console.log(randomIndex)
  //   }
  //   chooseRandomToStart()
  //





});





//https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
// source
// while (currentIndex !== 0) {
//   randomIndex = Math.floor(Math.random() * currentIndex);
//   currentIndex -= 1;
//   temporaryValue = animalsArray[i].background[currentIndex];
//   animalsArray[i].background[currentIndex] = animalsArray[i].background[randomIndex];
//   animalsArray[i].background[randomIndex] = temporaryValue;
//
// }
//  return animalsArray[i].background



// why does this show only one image





  // $('.animalBackCard').each(function(key, value) {
  //   console.log("key", key, "value", {value})
  //   for (let i = 0; i < animalsArray.length; i++) {
  //   .attr('src', animalsArray[i].image))
  //   }
  // })







//.attr('src', chooseRandom().image)//chooseRandom().image





 //
 // const $shuffleCards = $('#start').on('click', (event) => {
 //   for (let i = 0; i <= 1; i++) {
 //     $('#start').click(function() {
 //       $('.chooseRandom').toggle('slow', function() {
 //          shuffleCards()
 //       })
 //     })
 //
 //   }
 // })




/*
find a way to show all animal cards in the beggining of the game
shuffle all of the cards
set timer




*/



//
// =========
// const $startGame = () => {
//       $showImage.addClass('showImage')
//       $('.flip-card-front').append($showImage)
//       $('#start').on('click', (event) => {
//
//       })
//       forEach(event.currentTarget(i))
//         $showImage.show();
//         $showBackground.hide();
//         $startGame()
//     };






// $('.animalBackCard').each(function(key, value) {
//   console.log("key", key, "value", {value})






///find out if this is correct and add toggle
/// $(event.currentTarget)
//replaceWith()
//.attr('src', "")
//.replaceWith($('.animalBackCard'))
//remove()   //.replaceWith().attr('src', (chooseRandom().image))

//before($('.animalBackCard').hide());   //



//
//  for (let i = 0; i < 30; i++) {
//    // let $div = $('<div>')
//    let $listName = $(`<li><img src="${animalsArray[i].image}" class="animalCard"/></li>`)
//    let $listWord = $(`<li class="animalBackCard"> ${animalsArray[i].animal} </li>`)
//
//    $listName.addClass('listName')
//    $('.img-container').append($listName)
//
//    $listWord.addClass('listWord')
//    $('.word-container').append($listWord)
//
//
//
// }
 //
 // $listName.addClass('listName')
 // $('.img-container').append($listName)
 //
 // $listWord.addClass('listWord')
 // $('.img-container').append($listWord)
  //
  // $('.animalCard').click(function() {
  //   $('.animalBackCard').toggle('.animalCard');
  // })


    // for (let i = 0; i <= animalsArray[i].length; i++) {
    //   $('.animalCard').click(function() {
    //     $('.img-container').toggle('slow', function() {
    //
    //     })
    //   })
    //
    // }

  //
  // /*great for shuffle effect */
    // for (let i = 0; i <= 1; i++) {
    //   $('.animalCard').click(function() {
    //     $('.img-container').toggle('slow', function() {
    //
    //     })
    //   })
    //
    // }

  // const changeColor = (event) => {
  //     $(event.target).addClass('.animalCard')
  // }
  //

  // const flipCards = () => () {
  //   $(document).ready(function() {
  //     $('.listName').click(function() {
  //       $('.listWord').toggle();
  //     })
  //   })
  //  }
  // {animal: 'Donky', image: './img-project/donky.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Tiger', image: './img-project/tiger.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'WILD CARD', image: './img-project/wildCard.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Horse', image: './img-project/horse.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Octopus', image: './img-project/octopus.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Turtle', image: './img-project/turtle.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Snake', image: './img-project/snake.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Whale', image: './img-project/whale.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Beaver', image: './img-project/beaver.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Mouse', image: './img-project/Mouse.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Chicken', image: './img-project/chicken.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Frog', image: './img-project/frog.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Cow', image: './img-project/cow.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Seal', image: './img-project/seal.jpg', background:'./img-project/front-card.jpg'},
  // {animal: 'Goat', image: './img-project/goat.jpg', background:'./img-project/front-card.jpg'}


  // $('div').on('click', gameBoard)
