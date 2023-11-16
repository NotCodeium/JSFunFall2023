/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here  var firstLi = document.querySelector('section:nth-child(2) ul li');
  let firstLi = document.querySelector('section:nth-child(2) ul li');
  let elementWithId = document.getElementById('myId');
  
  console.log('Single Elements:');
  console.log(firstLi);
  console.log(elementWithId);


  let yellowBackgroundLiElements = document.querySelectorAll('section:nth-child(3) ul li.bg-warning');

  console.log('\nGroups of Elements:');
  yellowBackgroundLiElements.forEach(function (element) {
    console.log(element);
  });

  let targetButton = document.getElementById('targetButton');
  let socialMediaLinks = document.querySelectorAll('section:nth-child(4) a.social-link');

  console.log('\nStructuring HTML for JavaScript:');
  console.log(targetButton);
  socialMediaLinks.forEach(function (element) {
    console.log(element);
  });


  let cellsInMyRow = document.querySelectorAll('section:nth-child(5) #myRow div.border');

  console.log('\nNested Elements:');
  cellsInMyRow.forEach(function (element) {
    console.log(element);
  });
})();