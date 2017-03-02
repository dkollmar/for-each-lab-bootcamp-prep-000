function iterativeLog(array){
  function logger(element,index,array){
    console.log(`${index}: ${element}`)
  }
  array.forEach(logger)
}

function iterate(callback){
  var initArray=[1,2,3,4,5,6]
  initArray.forEach(callback)
  return initArray
}

function doToArray(array,callback){
  array.forEach(callback)
}
