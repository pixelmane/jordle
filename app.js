
let myArray = Array.from({length: 6}, e => Array.from({length: 5}, e => e = {value: '', backgroundColor: 'lightgrey'}))
console.log(myArray[0][0].backgroundColor)
function feedGame() {
for(let y = 0; y < 6; y++){
    for(let z  = 0; z < 5; z++){
        document.getElementById(`test${y}${z}`).innerHTML = myArray[y][z].value
        document.getElementById(`test${y}${z}`).style.backgroundColor = myArray[y][z].backgroundColor
    }
}
}


const keyArray = ['F','O','C','U','S']
const testArray = []
const testTestArray = []
let matches = 0
let theClicks = 0
testArray.length
let click = 0
let round = 0
function makeLetter(myValue) {
    
    myArray[round][click].value = myValue.value
    document.getElementById(`test${round}${click}`).style.animation = 'borderBump 1s'
    document.getElementById(`test${round}${click}`).style.border = '.5vw solid black'
    
    feedGame()
    console.log(myArray)
    click++
    console.log(click)
}
function removeLetter(){
    myArray[round][click-1].value = ''
    document.getElementById(`test${round}${click-1}`).style.border = '.5vw solid grey'
    document.getElementById(`test${round}${click-1}`).style.animation = ''
    feedGame()
    click--
}
function pleaseWait (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
})
}
async function checkLetter() {
    if(click === 5 || click === 10 || click === 15 || click === 20 || click === 25){
        for(let b = 0; b < 5; b++){
            
            for(let a = 0; a < 5; a++){
                
           if(keyArray[b] === myArray[round][a].value){
               if(myArray[round][a].backgroundColor === 'green') {
                myArray[round][a].backgroundColor = 'green'
               } else {
                   myArray[round][a].backgroundColor = 'yellow'
               }
               document.getElementById(myArray[round][a].value).style.backgroundColor === 'green' ? document.getElementById(myArray[round][a].value).style.backgroundColor = 'green' : document.getElementById(myArray[round][a].value).style.backgroundColor = 'yellow'
                
                }
                if(document.getElementById(myArray[round][a].value).style.backgroundColor != 'green' && document.getElementById(myArray[round][a].value).style.backgroundColor != 'yellow'){
                    document.getElementById(myArray[round][a].value).style.backgroundColor = 'grey'
                    myArray[round][a].backgroundColor = 'darkgrey'
            }
            
        }
        document.getElementById(`test${round}${b}`).style.animation = "check .5s"
                await pleaseWait(100)
        if(keyArray[b] === myArray[round][b].value){
            matches++
            console.log(`you have ${matches} correct`)
            myArray[round][b].backgroundColor = 'green'
            document.getElementById(myArray[round][b].value).style.backgroundColor = 'green'
            
        }
        
    }
        feedGame()
        round++
        console.log(round)
        click = 0
        checkForWin()
        matches = 0;
    }
}
async function checkForWin(){
    if(round === 5 && matches !== 5){
        document.getElementById(`message${round+1}`).style.animation = 'marquee 2s'
    }
   
    if(matches === 5){
        await pleaseWait(1500)
        color()
        document.getElementById('keyboardCont').style.display = 'none';
        document.getElementById('winnerBanner').style.display = 'flex';
        document.getElementById('win').style.display = 'flex'
    } else if(round === 6) {
        await pleaseWait(1500)
        color()
        document.getElementById('winnerBanner').style.display = 'flex';
        document.getElementById('lose').style.display = 'flex'
    }
}
  /*  if(testArray.length > 5 && testArray.length < 11){
        testArray.push(myValue.value)
        testArray[6] === undefined ? document.getElementById('test6').innerHTML = '' : document.getElementById('test6').innerHTML = testArray[6]
        testArray[7] === undefined ? document.getElementById('test7').innerHTML = '' : document.getElementById('test7').innerHTML = testArray[7]
        testArray[8] === undefined ? document.getElementById('test8').innerHTML = '' : document.getElementById('test8').innerHTML = testArray[8]
        testArray[9] === undefined ? document.getElementById('test9').innerHTML = '' : document.getElementById('test9').innerHTML = testArray[9]
        testArray[10] === undefined ? document.getElementById('test10').innerHTML = '' : document.getElementById('test10').innerHTML = testArray[10]
        }
    if(testArray.length > 11 && testArray.length < 17){
        testArray.push(myValue.value)
        testArray[12] === undefined ? document.getElementById('test10').innerHTML = '' : document.getElementById('test10').innerHTML = testArray[12]
        testArray[13] === undefined ? document.getElementById('test11').innerHTML = '' : document.getElementById('test11').innerHTML = testArray[13]
        testArray[14] === undefined ? document.getElementById('test12').innerHTML = '' : document.getElementById('test12').innerHTML = testArray[14]
        testArray[15] === undefined ? document.getElementById('test13').innerHTML = '' : document.getElementById('test13').innerHTML = testArray[15]
        testArray[16] === undefined ? document.getElementById('test14').innerHTML = '' : document.getElementById('test14').innerHTML = testArray[16]
        }
        console.log(testArray)
}
function removeLetter() {
    if(testArray.length < 6){
        testArray.pop()
        testArray[0] === undefined ? document.getElementById('test0').innerHTML = '' : document.getElementById('test0').innerHTML = testArray[0]
        testArray[1] === undefined ? document.getElementById('test1').innerHTML = '' : document.getElementById('test1').innerHTML = testArray[1]
        testArray[2] === undefined ? document.getElementById('test2').innerHTML = '' : document.getElementById('test2').innerHTML = testArray[2]
        testArray[3] === undefined ? document.getElementById('test3').innerHTML = '' : document.getElementById('test3').innerHTML = testArray[3]
        testArray[4] === undefined ? document.getElementById('test4').innerHTML = '' : document.getElementById('test4').innerHTML = testArray[4]
    }
    if(testArray.length > 6 && testArray.length < 12){
        testArray.pop()
        testArray[6] === undefined ? document.getElementById('test5').innerHTML = '' : document.getElementById('test5').innerHTML = testArray[6]
        testArray[7] === undefined ? document.getElementById('test6').innerHTML = '' : document.getElementById('test6').innerHTML = testArray[7]
        testArray[8] === undefined ? document.getElementById('test7').innerHTML = '' : document.getElementById('test7').innerHTML = testArray[8]
        testArray[9] === undefined ? document.getElementById('test8').innerHTML = '' : document.getElementById('test8').innerHTML = testArray[9]
        testArray[10] === undefined ? document.getElementById('test9').innerHTML = '' : document.getElementById('test9').innerHTML = testArray[10]
        }
        if(testArray.length > 12 && testArray.length < 18){
            testArray.pop()
            testArray[12] === undefined ? document.getElementById('test10').innerHTML = '' : document.getElementById('test10').innerHTML = testArray[12]
            testArray[13] === undefined ? document.getElementById('test11').innerHTML = '' : document.getElementById('test11').innerHTML = testArray[13]
            testArray[14] === undefined ? document.getElementById('test12').innerHTML = '' : document.getElementById('test12').innerHTML = testArray[14]
            testArray[15] === undefined ? document.getElementById('test13').innerHTML = '' : document.getElementById('test13').innerHTML = testArray[15]
            testArray[16] === undefined ? document.getElementById('test14').innerHTML = '' : document.getElementById('test14').innerHTML = testArray[16]
            }
}
function checkLetter() {
    if(testArray.length === 5) {
        
        console.log(testArray)
        console.log(keyArray)
        for(let p = 0; p < 5; p++){
        for(let g = 0;g < 5; g++){
            if(keyArray[p] === testArray[g]){
                
                document.getElementById(`test${g}`).style.backgroundColor = 'yellow'
            document.getElementById(testArray[g]).style.backgroundColor = 'yellow'
            
            }
        }
        if(testArray[p] === keyArray[p]){
            console.log('match')
            document.getElementById(`test${p}`).style.backgroundColor = 'green'
            document.getElementById(testArray[p]).style.backgroundColor = 'green'
            
        } else {
            document.getElementById(testArray[p]).style.backgroundColor === 'yellow' ? document.getElementById(testArray[p]).style.backgroundColor = 'yellow' : document.getElementById(testArray[p]).style.backgroundColor = 'grey'
            
        }
    }
        testArray.push('(>")>')
    }

    if(testArray.length === 11) {
        for(let p = 0; p < 5; p++){
            for(let g = 6;g < 11; g++){
                if(keyArray[p] === testArray[g]){
                    
                    document.getElementById(`test${g}`).style.backgroundColor = 'yellow'
                    document.getElementById(testArray[g]).style.backgroundColor === 'green' ? document.getElementById(testArray[g]).style.backgroundColor = 'green' : document.getElementById(testArray[g]).style.backgroundColor = 'yellow'
                
                }
            }
            if(testArray[p+6] === keyArray[p]){
                console.log('match')
                document.getElementById(`test${p+6}`).style.backgroundColor = 'green'
                document.getElementById(testArray[p+6]).style.backgroundColor = 'green'
                
            } else if(document.getElementById(testArray[p+6]).style.backgroundColor === 'yellow' || document.getElementById(testArray[p+6]).style.backgroundColor === 'green'){
                document.getElementById(testArray[p+6]).style.backgroundColor =   document.getElementById(testArray[p+6]).style.backgroundColor
            }  else {
                document.getElementById(testArray[p+6]).style.backgroundColor = 'grey'
            }

                
                
            }
        
        testArray.push('(>")>')
    }
    }


function waitForMe(time) {
   return new Promise(resolve => {
        console.log('promise')
        setTimeout(resolve, time)
    })
}
myCheck.addEventListener('click', async function onClick() {
    check++;
    if(check === 1){
        document.getElementById('check1').style.display = 'flex';
    } else if (check === 2){
        document.getElementById('check1').style.display = 'flex';
        document.getElementById('check2').style.display = 'flex';
    } else if (check === 3){
        document.getElementById('check1').style.display = 'flex';
        document.getElementById('check2').style.display = 'flex';
        document.getElementById('check3').style.display = 'flex';
    } else if (check === 4){
        document.getElementById('check1').style.display = 'flex';
        document.getElementById('check2').style.display = 'flex';
        document.getElementById('check3').style.display = 'flex';
        document.getElementById('check4').style.display = 'flex';
        document.getElementById('checkMe').value = 'LAST CHANCE'
    } else if (check === 5){
        document.getElementById('check1').style.display = 'flex';
        document.getElementById('check2').style.display = 'flex';
        document.getElementById('check3').style.display = 'flex';
        document.getElementById('check4').style.display = 'flex';
        document.getElementById('check5').style.display = 'flex';
    }
    
    let guessArray = []
    for(let j=0; j<5;j++){
        
        guessArray.push(document.getElementById(`entry${j+1}`).value)
    }
   guessArrayArray.push(guessArray)

   guessArray = []
   let winner = 0
        for (let i = 0; i < 5; i++){
            document.getElementById(`answer${check-1}${i+1}`).style.animation = 'drop .2s'
            await waitForMe(100)
            for(let l = 0; l < 5; l++){
                document.getElementById(`answer${check-1}${i+1}`).value = guessArrayArray[check - 1][i]
                
                if(keyWord[i] === guessArrayArray[check - 1][l]){
                document.getElementById(`answer${check-1}${l+1}`).style.backgroundColor = 'yellow'
                console.log(document.getElementById(`answer${check-1}${l+1}`).style.backgroundColor)
            } 
        }
        if(keyWord[i] === guessArrayArray[check - 1][i]){
            winner++
            document.getElementById(`answer${check-1}${i+1}`).style.backgroundColor = 'green'
        }
       console.log(winner)
        
    }
    if (winner === 5){
        color()
        document.getElementById('winnerBanner').style.display = 'flex';
        document.getElementById('youWin').style.display = 'flex';
        document.getElementById('loserBanner').style.display = 'none';
        document.getElementById('row1').style.display = 'none';
        document.getElementById('checkMe').style.display = 'none';
       
    } else if (check === 5){
        
        color()
        document.getElementById('checkMe').style.display = 'none';
        document.getElementById('row1').style.display = 'none';
      
        document.getElementById('winnerBanner').style.display = 'flex';
        document.getElementById('youWin').style.display = 'none';
        document.getElementById('youLose').style.display = 'flex';
        
        
    }
    document.getElementById('entry1').focus()
    console.log(keyWord)
       

document.getElementById('entry1').value = ''
document.getElementById('entry2').value = ''
document.getElementById('entry3').value = ''
document.getElementById('entry4').value = ''
document.getElementById('entry5').value = ''
console.log(guessArray)
})
*/
function color() {
document.getElementById('square01').style.backgroundColor = document.getElementById('test00').style.backgroundColor
document.getElementById('square02').style.backgroundColor = document.getElementById('test01').style.backgroundColor
document.getElementById('square03').style.backgroundColor = document.getElementById('test02').style.backgroundColor
document.getElementById('square04').style.backgroundColor = document.getElementById('test03').style.backgroundColor
document.getElementById('square05').style.backgroundColor = document.getElementById('test04').style.backgroundColor
document.getElementById('square11').style.backgroundColor = document.getElementById('test10').style.backgroundColor
document.getElementById('square12').style.backgroundColor = document.getElementById('test11').style.backgroundColor
document.getElementById('square13').style.backgroundColor = document.getElementById('test12').style.backgroundColor
document.getElementById('square14').style.backgroundColor = document.getElementById('test13').style.backgroundColor
document.getElementById('square15').style.backgroundColor = document.getElementById('test14').style.backgroundColor
document.getElementById('square21').style.backgroundColor = document.getElementById('test20').style.backgroundColor
document.getElementById('square22').style.backgroundColor = document.getElementById('test21').style.backgroundColor
document.getElementById('square23').style.backgroundColor = document.getElementById('test22').style.backgroundColor
document.getElementById('square24').style.backgroundColor = document.getElementById('test23').style.backgroundColor
document.getElementById('square25').style.backgroundColor = document.getElementById('test24').style.backgroundColor
document.getElementById('square31').style.backgroundColor = document.getElementById('test30').style.backgroundColor
document.getElementById('square32').style.backgroundColor = document.getElementById('test31').style.backgroundColor
document.getElementById('square33').style.backgroundColor = document.getElementById('test32').style.backgroundColor
document.getElementById('square34').style.backgroundColor = document.getElementById('test33').style.backgroundColor
document.getElementById('square35').style.backgroundColor = document.getElementById('test34').style.backgroundColor
document.getElementById('square41').style.backgroundColor = document.getElementById('test40').style.backgroundColor
document.getElementById('square42').style.backgroundColor = document.getElementById('test41').style.backgroundColor
document.getElementById('square43').style.backgroundColor = document.getElementById('test42').style.backgroundColor
document.getElementById('square44').style.backgroundColor = document.getElementById('test43').style.backgroundColor
document.getElementById('square45').style.backgroundColor = document.getElementById('test44').style.backgroundColor
document.getElementById('square61').style.backgroundColor = document.getElementById('test50').style.backgroundColor
document.getElementById('square62').style.backgroundColor = document.getElementById('test51').style.backgroundColor
document.getElementById('square63').style.backgroundColor = document.getElementById('test52').style.backgroundColor
document.getElementById('square64').style.backgroundColor = document.getElementById('test53').style.backgroundColor
document.getElementById('square65').style.backgroundColor = document.getElementById('test54').style.backgroundColor
document.getElementById('square51').innerHTML = keyArray[0]
document.getElementById('square52').innerHTML = keyArray[1]
document.getElementById('square53').innerHTML = keyArray[2]
document.getElementById('square54').innerHTML = keyArray[3]
document.getElementById('square55').innerHTML = keyArray[4]
}
