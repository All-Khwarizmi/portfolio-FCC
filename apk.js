let obj = {id: 'vBKEzNMvWrF', content: 'Whatever we expect with confidence becomes our own self-fulfilling prophecy.', author: 'Brian Tracy', tags: 2, authorSlug: 'brian-tracy'}

/*  taking values from object */

let arr = Object.values(obj)

/* copying quote and author values to separate arrays */
let newArr = arr.slice(1, 2)
let arrAuthor = arr.slice(2, 3);

/* passing arrays to strings */

let textStr = newArr.toString();
let authorStr = arrAuthor.toString()
/* concatening strings  */

let lastStr = textStr.concat(authorStr)

console.log(lastStr)
/* spliting the string */

lastStr = lastStr.split(" ")

/* joining the string */

lastStr = lastStr.join("%20")





/* https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Our%20lives%20begin%20to%20end%20the%20day%20we%20become%20silent%20about%20things%20that%20matter.%22%20Martin%20Luther%20King%20Jr. */

const randomColor = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let color = `'rgb(${r}, ${g}, ${b})'`
    console.log(color)
    return color 

  }
  randomColor()  