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
    {animal: 'Donky', image: './img-project/donky.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Tiger', image: './img-project/tiger.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'WILD CARD', image: './img-project/wildCard.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Horse', image: './img-project/horse.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Octopus', image: './img-project/octopus.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Turtle', image: './img-project/turtle.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Snake', image: './img-project/snake.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Whale', image: './img-project/whale.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Beaver', image: './img-project/beaver.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Mouse', image: './img-project/Mouse.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Chicken', image: './img-project/chicken.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Frog', image: './img-project/frog.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Cow', image: './img-project/cow.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Seal', image: './img-project/seal.jpg', background:'./img-project/front-card.jpg'},
    {animal: 'Goat', image: './img-project/goat.jpg', background:'./img-project/front-card.jpg'}

  ];


  for (let i = 0; i < animalsArray.length; i++) {
    // let $div = $('<div>')
    let $showBackground = $(`<div class="background-img"><img id="two" src="${animalsArray[i].background}" class="animalBackCard"/></div>`)

    let $showImage = $(`<div class="images"><img id="one" src="${animalsArray[i].image}" class="animalCard"/></div>`)


/*make the background show when the page opens
  make page show animals and shuffle once animals are loaded*/

    $showBackground.addClass('showBackground')
    $('.flip-card-front').append($showBackground)
    // $('.playLink').on('click', (event) => {
       //add this to a function that shuffles animal cards

    // })










const $startGame = () => {
      $showImage.addClass('showImage')
      $('.flip-card-front').append($showImage)
      $('#start').on('click', (event) => {

      })
      forEach(event.currentTarget(i))
        $showImage.show();
        $showBackground.hide();
        $startGame()
    };








  // const hideAnimalImage = () => {
  //   $("")
  // }


 }
 // const chooseRandom = () => {
 //     let randomIndex = Math.floor(Math.random() * animalsArray.length)
 //        return animalsArray[randomIndex]

      console.log(randomIndex)
    let addClassToRandom = document.querySelector(chooseRandom());
    addClassToRandom.classList.add("chooseRandom");
}      //console.log(chooseRandom().image)


 const $card = $('.animalBackCard').on('click', (event) => {
   console.log($(event.currentTarget).attr('src'))
   $(event.currentTarget).toggleClass('.chooseRandom')
   console.log($(event.currentTarget).attr('src', chooseRandom().image))
 })


//.attr('src', chooseRandom().image)





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


  // $('div').on('click', gameBoard)

});


/*
find a way to get front card appeneded to the container
  - build an array of objects
  - add all images and names to array
  - add images to by squares clss
  - add onclick to each image
  - add back image to picture
  - make  random





find a way to get get cards to flip
find a way to get images on other side of the cards
find a way to make cards shuffle randomly.
add form for player to add their name
add levels











*/
