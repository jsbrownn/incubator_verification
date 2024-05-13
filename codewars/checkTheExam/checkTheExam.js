let arr1 = ["a", "a", "c", "b"];
let arr2 = ["a", "a", "b", ""];
let result = 0;
function checkExam( rightAnswersArr, studentAnswers) {
  let result = 0;
  for (let i = 0; i < rightAnswersArr.length; i++) {
    if (rightAnswersArr[i] === studentAnswers[i]) {
      result += 4;
    } else { 
      if(studentAnswers[i] === ""){
        result += 0 ;
      } else { 
        debugger
        result += -1;
      }
    }
  }
  if(result <= 0){
    result = 0;
  }
  console.log( rightAnswersArr, studentAnswers)
  console.log(result + ' всего')
  return result
}

checkAnswer(arr1,arr2)
