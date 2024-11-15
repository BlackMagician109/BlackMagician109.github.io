
const minClassLvl = [9, 8, 7, 5, 6, 7, 9, 9, 10, 1]
const minStatLvl = [[15,10,11,14,13,9,9,7], [11,12,11,10,16,10,8,9], [14,9,12,16,9,7,8,11], [10,11,10,9,13,9,8,14], [9,15,9,8,12,16,7,9], [10,14,8,11,10,7,16,10], [12,11,13,12,15,9,8,8], [11,12,11,11,14,14,6,9], [10,13,10,12,12,9,14,9], [10,10,10,10,10,10,10,10]]

let level = 1
let runesNeeded = 0
let vigorLvl = 1
let mindLvl = 1
let endLvl = 1
let strLvl = 1
let dexLvl = 1
let intLvl = 1
let faithLvl = 1
let arcaneLvl = 1

const dropMenu = document.getElementById('dropdown-button-class')

const dropVagabond = document.getElementById('drop-vagabond')
const dropWarrior = document.getElementById('drop-warrior')
const dropHero = document.getElementById('drop-hero')
const dropBandit = document.getElementById('drop-bandit')
const dropAstrologer = document.getElementById('drop-astrologer')
const dropProphet = document.getElementById('drop-prophet')
const dropSamurai = document.getElementById('drop-samurai')
const dropPrisoner = document.getElementById('drop-prisoner')
const dropConfessor = document.getElementById('drop-confessor')
const dropWertch = document.getElementById('drop-wretch')

const plusVigorButton = document.getElementById('plus-vigor')
const plusMindButton = document.getElementById('plus-mind')
const plusEndButton = document.getElementById('plus-endurance')
const plusStrButton = document.getElementById('plus-strength')
const plusDexButton = document.getElementById('plus-dexterity')
const plusIntButton = document.getElementById('plus-intelligence')
const plusFaithButton = document.getElementById('plus-faith')
const plusArcaneButton = document.getElementById('plus-arcane')

const minusVigorButton = document.getElementById('minus-vigor')
const minusMindButton = document.getElementById('minus-mind')
const minusEndButton = document.getElementById('minus-endurance')
const minusStrButton = document.getElementById('minus-strength')
const minusDexButton = document.getElementById('minus-dexterity')
const minusIntButton = document.getElementById('minus-intelligence')
const minusFaithButton = document.getElementById('minus-faith')
const minusArcaneButton = document.getElementById('minus-arcane')

const displayLevel = document.getElementById('display-level')
const displayRunesNeeded = document.getElementById('display-runes-needed')
const displayVigor = document.getElementById('display-vigor')
const displayMind = document.getElementById('display-mind')
const displayEnd = document.getElementById('display-endurance')
const displayStr = document.getElementById('display-strength')
const displayDex = document.getElementById('display-dexterity')
const displayInt = document.getElementById('display-intelligence')
const displayFaith = document.getElementById('display-faith')
const displayArcane = document.getElementById('display-arcane')


plusVigorButton.addEventListener(click, handlePlusClick(displayVigor, vigorLvl))
plusMindButton.addEventListener(click, handlePlusClick(displayMind, mindLvl)) 
plusEndButton.addEventListener(click, handlePlusClick(displayEnd, endLvl))
plusStrButton.addEventListener(click, handlePlusClick(displayStr, strLvl))
plusDexButton.addEventListener(click, handlePlusClick(displayDex, dexLvl))
plusIntButton.addEventListener(click, handlePlusClick(displayInt, intLvl))
plusFaithButton.addEventListener(click, handlePlusClick(displayFaith, faithLvl))
plusArcaneButton.addEventListener(click, handlePlusClick(displayArcane, arcaneLvl))

minusVigorButton.addEventListener(click, handleMinusClick(displayVigor, vigorLvl, minLvl[0][0]))
minusMindButton.addEventListener(click, handleMinusClick(displayMind, mindLvl, minLvl[1][1])) 
minusEndButton.addEventListener(click, handleMinusClick(displayEnd, endLvl, minLvl[2][2]))
minusStrButton.addEventListener(click, handleMinusClick(displayStr, strLvl, minLvl[3][3]))
minusDexButton.addEventListener(click, handleMinusClick(displayDex, dexLvl, minLvl[4][4]))
minusIntButton.addEventListener(click, handleMinusClick(displayInt, intLvl, minLvl[5][5]))
minusFaithButton.addEventListener(click, handleMinusClick(displayFaith, faithLvl, minLvl[6][6]))
minusArcaneButton.addEventListener(click, handleMinusClick(displayArcane, arcaneLvl, minLvl[7][7]))

displayLevel.addEventListener('input', handleNumberDisplay(displayLevel))
displayRunesNeeded.addEventListener('input', handleNumberDisplay(displayRunesNeeded))
displayVigor.addEventListener('input', handleNumberDisplay(displayVigor))
displayMind.addEventListener('input', handleNumberDisplay(displayMind))
displayEnd.addEventListener('input', handleNumberDisplay(displayEnd))
displayStr.addEventListener('input', handleNumberDisplay(displayStr))
displayDex.addEventListener('input', handleNumberDisplay(displayDex))
displayInt.addEventListener('input', handleNumberDisplay(displayInt))
displayFaith.addEventListener('input', handleNumberDisplay(displayFaith))
displayArcane.addEventListener('input', handleNumberDisplay(displayArcane))


function handlePlusClick(numBox, num){
    if (num < 99){
        num = Number(num) + 1
        numBox.value = num
    }
}


function handleMinusClick(numBox, num, minLvl){
    if (num > minLvl){
        num = Number(num) - 1
        numBox.value = num
    }
}


function handleNumberDisplay(numBox){
    num = numBox.value
}

function changeDropdownTitle(title){
    // let dropdownButton = $(document).find('#dropdown-button-class')
    // dropdownButton
    $(".dropdown-menu a").click(function(){
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
      });
}