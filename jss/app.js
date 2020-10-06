$(()=>{

  const gameBoard = (event) => {


    /*===============
    when squares are clicked they turn to into the
    peach class. So I can use that to flip the cards!!
    // =================*/
    //   $(event.target).addClass('peach')
  }
  const animalsArray = [
    {animal: 'Elephant', image: './img-project/elephant.jpg'},
    {animal: 'Iguana', image: './img-project/iguana.jpg' },
    {animal: 'Lion', image: './img-project/lion.jpg'},
    {animal: 'Panda', image: './img-project/panda.jpg'},
    {animal: 'Penguin', image: './img-project/penguin.jpg'},
    {animal: 'Pig', image: './img-project/pig.jpg'},
    {animal: 'Sheep', image: './img-project/sheep.jpg'},
    {animal: 'Zebra', image: './img-project/zebra.jpg'},
    {animal: 'Dog', image: './img-project/dog.jpg'},
    {animal: 'Hippo', image: './img-project/hippo.jpg'},
    {animal: 'Fox', image: './img-project/fox.jpg'},
    {animal: 'Owl', image: './img-project/owl.jpg'},
    {animal: 'Cat', image: './img-project/cat.jpg'},
    {animal: 'Giraffe', image: './img-project/giraffe.jpg'},
    {animal: 'Squirrel', image: './img-project/squirrel.jpg'},
    {animal: 'Donky', image: './img-project/donky.jpg'},
    {animal: 'Tiger', image: './img-project/tiger.jpg'},
    {animal: 'WILD CARD', image: './img-project/wildCard.jpg'},
    {animal: 'Horse', image: './img-project/horse.jpg'},
    {animal: 'Octopus', image: './img-project/octopus.jpg'},
    {animal: 'Turtle', image: './img-project/turtle.jpg'},
    {animal: 'Snake', image: './img-project/snake.jpg'},
    {animal: 'Whale', image: './img-project/whale.jpg'},
    {animal: 'Beaver', image: './img-project/beaver.jpg'},
    {animal: 'Mouse', image: './img-project/Mouse.jpg'},
    {animal: 'Chicken', image: './img-project/chicken.jpg'},
    {animal: 'Frog', image: './img-project/frog.jpg'},
    {animal: 'Cow', image: './img-project/cow.jpg'},
    {animal: 'Seal', image: './img-project/seal.jpg'},
    {animal: 'Goat', image: './img-project/goat.jpg'}

  ];


  for (let i = 0; i < 30; i++) {
    // let $div = $('<div>')
    let $listName = $(`<li><img src="${animalsArray[i].image}" class="animalCard"/></li>`)
    let $listWord = $(`<li class="animalBackCard" id="${animalsArray[i].animal}"> </li>`)

    $listName.addClass('listName')
    $('.img-container').append($listName)

    $listWord.addClass('listWord')
    $('.img-container').append($listWord)

  }

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


  $('div').on('click', gameBoard)

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
