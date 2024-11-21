

const minClassLvl = [9, 8, 7, 5, 6, 7, 9, 9, 10, 1]
const minStatLvl = [[15,10,11,14,13,9,9,7], [11,12,11,10,16,10,8,9], [14,9,12,16,9,7,8,11], [10,11,10,9,13,9,8,14], [9,15,9,8,12,16,7,9], [10,14,8,11,10,7,16,10], [12,11,13,12,15,9,8,8], [11,12,11,11,14,14,6,9], [10,13,10,12,12,9,14,9], [10,10,10,10,10,10,10,10]]
const runesPerLvl = [673, 689, 706, 723,740,757,775,793,811,829,847,1038,1238,1445,1659,1882,2113,2353,2601,2857,3122,3395,3678,3970,4270,4580,4899,5228,5567,5915,6273,6640,7018,7407,7805,8214,8633,9064,9505,9956,10419,10893,11379,11876,12384,12904,13435,13979,14535,15102,15682,16274,16879,,17498,,18127,18770,19425,20094,20777,21472,22181,22903,23640,,24390,25153,25931,26723,27530,28351,29186,30036,30900,31780,32675,33584,34509,35449,36405,37377,38364,39367,40385,41420,42472,43539,44623,45723,46841,47975,49125,50293,51478,52681,53901,55138,56393,57665,58956,60265,61591,62936,64299,65681,67082,68501,69939,71395,72871,74367,75881,77415,78968,80542,82135,83747,85380,87033,88707,90401,92115,93850,95605,97382,99180,100998,102838,104699,106582,108487,110413,112361,114330,116322,118337,120373,122432,124513,126618,128745,130894,133067,135263,137483,139726,141992,144282,146595,148933,151295,153680,156090,158524,160983,163467,165975,168508,141065,173648,176257,178890,181549,184233,186944,189680,192441,195229,198043,200884,203754,206644,209564,212510,215484,218485,221512,221567,227649,230759,233897,237062,240255,243475,246724,250222,253307,256641,260003,263395,266815,270263,273741,277248,280785,284351,287946,291571,295225,298910,302625,306369,310144,313949,317785,321652,325549,329477,333435,337425,341447,345499,349583,353698,357846,362025,366235,370478,374753,379061,383401,387773,392178,396615,401086,405590,410126,414696,419299,432936,428607,433311,438049,442820,447626,452467,457341,462250,467193,472172,477185,482232,487315,492433,497587,502776,508000,513260,518555,523887,529255,534658,540098,545574,551087,556637,562223,567846,573505,578202,584937,590708]

let level = 9
let runesNeeded = 0
let vigorLvl = 15
let mindLvl = 10
let endLvl = 11
let strLvl = 14
let dexLvl = 13
let intLvl = 9
let faithLvl = 9
let arcaneLvl = 7

let currentClass = 0

const radioVagabond = document.getElementById('radio-vagabond')
const radioWarrior = document.getElementById('radio-warrior')
const radioHero = document.getElementById('radio-hero')
const radioBandit = document.getElementById('radio-bandit')
const radioAstrologer = document.getElementById('radio-astrologer')
const radioProphet = document.getElementById('radio-prophet')
const radioSamurai = document.getElementById('radio-samurai')
const radioPrisoner = document.getElementById('radio-prisoner')
const radioConfessor = document.getElementById('radio-confessor')
const radioWertch = document.getElementById('radio-wretch')

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


// assignClass(0)


plusVigorButton.addEventListener('click', function(){
    if (vigorLvl < 99){
        vigorLvl = Number(vigorLvl) + 1;
        displayVigor.value = vigorLvl
    }
})
plusMindButton.addEventListener('click', function(){
    if (mindLvl < 99){
        mindLvl = Number(mindLvl) + 1;
        displayMind.value = mindLvl
    }
}) 
plusEndButton.addEventListener('click', function(){
    if (endLvl < 99){
        endLvl = Number(endLvl) + 1;
        displayEnd.value = endLvl
    }
})
plusStrButton.addEventListener('click', function(){
    if (strLvl < 99){
        strLvl = Number(strLvl) + 1;
        displayStr.value = strLvl
    }
})
plusDexButton.addEventListener('click', function(){
    if (dexLvl < 99){
        dexLvl = Number(dexLvl) + 1;
        displayDex.value = dexLvl
    }
})
plusIntButton.addEventListener('click', function(){
    if (intLvl < 99){
        intLvl = Number(intLvl) + 1;
        displayInt.value = intLvl
    }
})
plusFaithButton.addEventListener('click', function(){
    if (faithLvl < 99){
        faithLvl = Number(faithLvl) + 1;
        displayFaith.value = faithLvl
    }
})
plusArcaneButton.addEventListener('click', function(){
    if (arcaneLvl < 99){
        arcaneLvl = Number(arcaneLvl) + 1;
        displayArcane.value = arcaneLvl
    }
})

minusVigorButton.addEventListener('click', function(){
    if (vigorLvl > minStatLvl[currentClass][0]){
        vigorLvl = Number(vigorLvl) - 1;
        displayVigor.value = vigorLvl
    }
})
minusMindButton.addEventListener('click', function(){
    if (mindLvl > minStatLvl[currentClass][1]){
        mindLvl = Number(mindLvl) - 1;
        displayMind.value = mindLvl
    }
}) 
minusEndButton.addEventListener('click', function(){
    if (endLvl > minStatLvl[currentClass][2]){
        endLvl = Number(endLvl) - 1;
        displayEnd.value = endLvl
    }
})
minusStrButton.addEventListener('click', function(){
    if (strLvl > minStatLvl[currentClass][3]){
        strLvl = Number(strLvl) - 1;
        displayStr.value = strLvl
    }
})
minusDexButton.addEventListener('click', function(){
    if (dexLvl > minStatLvl[currentClass][4]){
        dexLvl = Number(dexLvl) - 1;
        displayDex.value = dexLvl
    }
})
minusIntButton.addEventListener('click', function(){
    if (intLvl > minStatLvl[currentClass][5]){
        intLvl = Number(intLvl) - 1;
        displayInt.value = intLvl
    }
})
minusFaithButton.addEventListener('click', function(){
    if (faithLvl > minStatLvl[currentClass][6]){
        faithLvl = Number(faithLvl) - 1;
        displayFaith.value = faithLvl
    }
})
minusArcaneButton.addEventListener('click', function(){
    if (arcaneLvl > minStatLvl[currentClass][7]){
        arcaneLvl = Number(arcaneLvl) - 1;
        displayArcane.value = arcaneLvl
    }
})


// displayLevel.addEventListener('input', function(){
//     handleNumberDisplay(vigorLvl, displayLevel)

// })
// displayRunesNeeded.addEventListener('input', function(){
//     handleNumberDisplay(runesNeeded, displayRunesNeeded)
// })
displayVigor.addEventListener('blur', function(){
    if (displayVigor.value <= 99 && displayVigor.value > minStatLvl[currentClass][0]){
        vigorLvl = displayVigor.value
    }
    else{
        displayVigor.value = vigorLvl
    }
})
displayMind.addEventListener('blur', function(){
    if (displayMind.value <= 99 && displayMind.value > minStatLvl[currentClass][1]){
        mindLvl = displayMind.value
    }
    else{
        displayMind.value = mindLvl
    }
})
displayEnd.addEventListener('blur', function(){
    if (displayEnd.value <= 99 && displayEnd.value > minStatLvl[currentClass][2]){
        endLvl = displayEnd.value
    }
    else{
        displayEnd.value = endLvl
    }
})
displayStr.addEventListener('blur', function(){
    if (displayStr.value <= 99 && displayStr.value > minStatLvl[currentClass][3]){
        strLvl = displayStr.value
    }
    else{
        displayStr.value = strLvl
    }
})
displayDex.addEventListener('blur', function(){
    if (displayDex.value <= 99 && displayDex.value > minStatLvl[currentClass][4]){
        dexLvl = displayDex.value
    }
    else{
        displayDex.value = dexLvl
    }
})
displayInt.addEventListener('blur', function(){
    if (displayInt.value <= 99 && displayInt.value > minStatLvl[currentClass][5]){
        intLvl = displayInt.value
    }
    else{
        displayInt.value = intLvl
    }
})
displayFaith.addEventListener('blur', function(){
    if (displayFaith.value <= 99 && displayFaith.value > minStatLvl[currentClass][6]){
        faithLvl = displayFaith.value
    }
    else{
        displayFaith.value = faithLvl
    }
})
displayArcane.addEventListener('blur', function(){
    if (displayArcane.value <= 99 && displayArcane.value > minStatLvl[currentClass][7]){
        arcaneLvl = displayArcane.value
    }
    else{
        displayArcane.value = arcaneLvl
    }
})


radioVagabond.addEventListener('click', function(){
    currentClass = 0
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioWarrior.addEventListener('click', function(){
    currentClass = 1
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioHero.addEventListener('click', function(){
    currentClass = 2
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioBandit.addEventListener('click', function(){
    currentClass = 3
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioAstrologer.addEventListener('click', function(){
    currentClass = 4
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioProphet.addEventListener('click', function(){
    currentClass = 5
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioSamurai.addEventListener('click', function(){
    currentClass = 6
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioPrisoner.addEventListener('click', function(){
    currentClass = 7
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioConfessor.addEventListener('click', function(){
    currentClass = 8
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
radioWertch.addEventListener('click', function(){
    currentClass = 9
    level = minClassLvl[currentClass]
    vigorLvl = minStatLvl[currentClass][0]
    mindLvl = minStatLvl[currentClass][1]
    endLvl = minStatLvl[currentClass][2]
    strLvl = minStatLvl[currentClass][3]
    dexLvl = minStatLvl[currentClass][4]
    intLvl = minStatLvl[currentClass][5]
    faithLvl = minStatLvl[currentClass][6]
    arcaneLvl = minStatLvl[currentClass][7]

    displayLevel.value = Number(minClassLvl[currentClass])
    displayVigor.value = Number(vigorLvl)
    displayMind.value = Number(mindLvl)
    displayEnd.value = Number(endLvl)
    displayStr.value = Number(strLvl)
    displayDex.value = Number(dexLvl)
    displayInt.value = Number(intLvl)
    displayFaith.value = Number(faithLvl)
    displayArcane.value = Number(arcaneLvl)
})
