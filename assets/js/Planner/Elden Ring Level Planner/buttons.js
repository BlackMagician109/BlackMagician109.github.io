const minClassLvl = [9, 8, 7, 5, 6, 7, 9, 9, 10, 1]
const minStatLvl = [[15,10,11,14,13,9,9,7], [11,12,11,10,16,10,8,9], [14,9,12,16,9,7,8,11], [10,11,10,9,13,9,8,14], [9,15,9,8,12,16,7,9], [10,14,8,11,10,7,16,10], [12,11,13,12,15,9,8,8], [11,12,11,11,14,14,6,9], [10,13,10,12,12,9,14,9], [10,10,10,10,10,10,10,10]]


const statIncrease = [
    {
      "Level": 1,
      "HP": 300,
      "FP": 50,
      "Stamina": 80,
      "EquipLoad": 45,
      "Discovery": 1
    },
    {
      "Level": 2,
      "HP": 304,
      "FP": 53,
      "Stamina": 81,
      "EquipLoad": 45,
      "Discovery": 2
    },
    {
      "Level": 3,
      "HP": 312,
      "FP": 56,
      "Stamina": 82,
      "EquipLoad": 45,
      "Discovery": 3
    },
    {
      "Level": 4,
      "HP": 322,
      "FP": 59,
      "Stamina": 84,
      "EquipLoad": 45,
      "Discovery": 4
    },
    {
      "Level": 5,
      "HP": 334,
      "FP": 62,
      "Stamina": 85,
      "EquipLoad": 45,
      "Discovery": 5
    },
    {
      "Level": 6,
      "HP": 347,
      "FP": 66,
      "Stamina": 87,
      "EquipLoad": 45,
      "Discovery": 6
    },
    {
      "Level": 7,
      "HP": 362,
      "FP": 69,
      "Stamina": 88,
      "EquipLoad": 45,
      "Discovery": 7
    },
    {
      "Level": 8,
      "HP": 378,
      "FP": 72,
      "Stamina": 92,
      "EquipLoad": 45,
      "Discovery": 8
    },
    {
      "Level": 9,
      "HP": 396,
      "FP": 75,
      "Stamina": 94,
      "EquipLoad": 46.6,
      "Discovery": 9
    },
    {
      "Level": 10,
      "HP": 414,
      "FP": 78,
      "Stamina": 96,
      "EquipLoad": 48.2,
      "Discovery": 10
    },
    {
      "Level": 11,
      "HP": 434,
      "FP": 82,
      "Stamina": 97,
      "EquipLoad": 49.8,
      "Discovery": 11
    },
    {
      "Level": 12,
      "HP": 455,
      "FP": 85,
      "Stamina": 99,
      "EquipLoad": 51.4,
      "Discovery": 12
    },
    {
      "Level": 13,
      "HP": 476,
      "FP": 88,
      "Stamina": 101,
      "EquipLoad": 52.9,
      "Discovery": 13
    },
    {
      "Level": 14,
      "HP": 499,
      "FP": 91,
      "Stamina": 103,
      "EquipLoad": 54.5,
      "Discovery": 14
    },
    {
      "Level": 15,
      "HP": 522,
      "FP": 95,
      "Stamina": 105,
      "EquipLoad": 56.1,
      "Discovery": 15
    },
    {
      "Level": 16,
      "HP": 547,
      "FP": 100,
      "Stamina": 106,
      "EquipLoad": 57.7,
      "Discovery": 16
    },
    {
      "Level": 17,
      "HP": 572,
      "FP": 105,
      "Stamina": 108,
      "EquipLoad": 59.3,
      "Discovery": 17
    },
    {
      "Level": 18,
      "HP": 598,
      "FP": 110,
      "Stamina": 110,
      "EquipLoad": 60.9,
      "Discovery": 18
    },
    {
      "Level": 19,
      "HP": 624,
      "FP": 116,
      "Stamina": 111,
      "EquipLoad": 62.5,
      "Discovery": 19
    },
    {
      "Level": 20,
      "HP": 652,
      "FP": 121,
      "Stamina": 113,
      "EquipLoad": 64.1,
      "Discovery": 20
    },
    {
      "Level": 21,
      "HP": 680,
      "FP": 126,
      "Stamina": 115,
      "EquipLoad": 65.6,
      "Discovery": 21
    },
    {
      "Level": 22,
      "HP": 709,
      "FP": 131,
      "Stamina": 116,
      "EquipLoad": 67.2,
      "Discovery": 22
    },
    {
      "Level": 23,
      "HP": 738,
      "FP": 137,
      "Stamina": 118,
      "EquipLoad": 68.8,
      "Discovery": 23
    },
    {
      "Level": 24,
      "HP": 769,
      "FP": 142,
      "Stamina": 120,
      "EquipLoad": 70.4,
      "Discovery": 24
    },
    {
      "Level": 25,
      "HP": 800,
      "FP": 147,
      "Stamina": 121,
      "EquipLoad": 72,
      "Discovery": 25
    },
    {
      "Level": 26,
      "HP": 833,
      "FP": 152,
      "Stamina": 123,
      "EquipLoad": 73,
      "Discovery": 26
    },
    {
      "Level": 27,
      "HP": 870,
      "FP": 158,
      "Stamina": 125,
      "EquipLoad": 74.1,
      "Discovery": 27
    },
    {
      "Level": 28,
      "HP": 910,
      "FP": 163,
      "Stamina": 126,
      "EquipLoad": 75.2,
      "Discovery": 28
    },
    {
      "Level": 29,
      "HP": 951,
      "FP": 168,
      "Stamina": 128,
      "EquipLoad": 76.4,
      "Discovery": 29
    },
    {
      "Level": 30,
      "HP": 994,
      "FP": 173,
      "Stamina": 130,
      "EquipLoad": 77.6,
      "Discovery": 30
    },
    {
      "Level": 31,
      "HP": 1037,
      "FP": 179,
      "Stamina": 131,
      "EquipLoad": 78.9,
      "Discovery": 31
    },
    {
      "Level": 32,
      "HP": 1081,
      "FP": 184,
      "Stamina": 132,
      "EquipLoad": 80.2,
      "Discovery": 32
    },
    {
      "Level": 33,
      "HP": 1125,
      "FP": 189,
      "Stamina": 133,
      "EquipLoad": 81.5,
      "Discovery": 33
    },
    {
      "Level": 34,
      "HP": 1170,
      "FP": 194,
      "Stamina": 135,
      "EquipLoad": 82.8,
      "Discovery": 34
    },
    {
      "Level": 35,
      "HP": 1216,
      "FP": 200,
      "Stamina": 136,
      "EquipLoad": 84.1,
      "Discovery": 35
    },
    {
      "Level": 36,
      "HP": 1262,
      "FP": 207,
      "Stamina": 137,
      "EquipLoad": 85.4,
      "Discovery": 36
    },
    {
      "Level": 37,
      "HP": 1308,
      "FP": 214,
      "Stamina": 138,
      "EquipLoad": 86.8,
      "Discovery": 37
    },
    {
      "Level": 38,
      "HP": 1355,
      "FP": 221,
      "Stamina": 140,
      "EquipLoad": 88.1,
      "Discovery": 38
    },
    {
      "Level": 39,
      "HP": 1402,
      "FP": 228,
      "Stamina": 141,
      "EquipLoad": 89.5,
      "Discovery": 39
    },
    {
      "Level": 40,
      "HP": 1450,
      "FP": 235,
      "Stamina": 142,
      "EquipLoad": 90.9,
      "Discovery": 40
    },
    {
      "Level": 41,
      "HP": 1476,
      "FP": 242,
      "Stamina": 143,
      "EquipLoad": 92.3,
      "Discovery": 41
    },
    {
      "Level": 42,
      "HP": 1503,
      "FP": 248,
      "Stamina": 145,
      "EquipLoad": 93.7,
      "Discovery": 42
    },
    {
      "Level": 43,
      "HP": 1529,
      "FP": 255,
      "Stamina": 146,
      "EquipLoad": 95.1,
      "Discovery": 43
    },
    {
      "Level": 44,
      "HP": 1555,
      "FP": 262,
      "Stamina": 147,
      "EquipLoad": 96.5,
      "Discovery": 44
    },
    {
      "Level": 45,
      "HP": 1581,
      "FP": 268,
      "Stamina": 148,
      "EquipLoad": 97.9,
      "Discovery": 45
    },
    {
      "Level": 46,
      "HP": 1606,
      "FP": 275,
      "Stamina": 150,
      "EquipLoad": 99.4,
      "Discovery": 46
    },
    {
      "Level": 47,
      "HP": 1631,
      "FP": 281,
      "Stamina": 151,
      "EquipLoad": 100.8,
      "Discovery": 47
    },
    {
      "Level": 48,
      "HP": 1656,
      "FP": 287,
      "Stamina": 152,
      "EquipLoad": 102.2,
      "Discovery": 48
    },
    {
      "Level": 49,
      "HP": 1680,
      "FP": 293,
      "Stamina": 153,
      "EquipLoad": 103.7,
      "Discovery": 49
    },
    {
      "Level": 50,
      "HP": 1704,
      "FP": 300,
      "Stamina": 155,
      "EquipLoad": 105.2,
      "Discovery": 50
    },
    {
      "Level": 51,
      "HP": 1727,
      "FP": 305,
      "Stamina": 155,
      "EquipLoad": 106.6,
      "Discovery": 51
    },
    {
      "Level": 52,
      "HP": 1750,
      "FP": 311,
      "Stamina": 155,
      "EquipLoad": 108.1,
      "Discovery": 52
    },
    {
      "Level": 53,
      "HP": 1772,
      "FP": 317,
      "Stamina": 155,
      "EquipLoad": 109.6,
      "Discovery": 53
    },
    {
      "Level": 54,
      "HP": 1793,
      "FP": 322,
      "Stamina": 156,
      "EquipLoad": 111,
      "Discovery": 54
    },
    {
      "Level": 55,
      "HP": 1814,
      "FP": 328,
      "Stamina": 156,
      "EquipLoad": 112.5,
      "Discovery": 55
    },
    {
      "Level": 56,
      "HP": 1834,
      "FP": 333,
      "Stamina": 156,
      "EquipLoad": 114,
      "Discovery": 56
    },
    {
      "Level": 57,
      "HP": 1853,
      "FP": 338,
      "Stamina": 157,
      "EquipLoad": 115.5,
      "Discovery": 57
    },
    {
      "Level": 58,
      "HP": 1871,
      "FP": 342,
      "Stamina": 157,
      "EquipLoad": 117,
      "Discovery": 58
    },
    {
      "Level": 59,
      "HP": 1887,
      "FP": 346,
      "Stamina": 157,
      "EquipLoad": 118.5,
      "Discovery": 59
    },
    {
      "Level": 60,
      "HP": 1900,
      "FP": 350,
      "Stamina": 158,
      "EquipLoad": 120,
      "Discovery": 60
    },
    {
      "Level": 61,
      "HP": 1906,
      "FP": 352,
      "Stamina": 158,
      "EquipLoad": 121,
      "Discovery": 61
    },
    {
      "Level": 62,
      "HP": 1912,
      "FP": 355,
      "Stamina": 158,
      "EquipLoad": 122.1,
      "Discovery": 62
    },
    {
      "Level": 63,
      "HP": 1918,
      "FP": 357,
      "Stamina": 158,
      "EquipLoad": 123.1,
      "Discovery": 63
    },
    {
      "Level": 64,
      "HP": 1924,
      "FP": 360,
      "Stamina": 159,
      "EquipLoad": 124.1,
      "Discovery": 64
    },
    {
      "Level": 65,
      "HP": 1930,
      "FP": 362,
      "Stamina": 159,
      "EquipLoad": 125.1,
      "Discovery": 65
    },
    {
      "Level": 66,
      "HP": 1936,
      "FP": 365,
      "Stamina": 159,
      "EquipLoad": 126.2,
      "Discovery": 66
    },
    {
      "Level": 67,
      "HP": 1942,
      "FP": 367,
      "Stamina": 160,
      "EquipLoad": 127.2,
      "Discovery": 67
    },
    {
      "Level": 68,
      "HP": 1948,
      "FP": 370,
      "Stamina": 160,
      "EquipLoad": 128.2,
      "Discovery": 68
    },
    {
      "Level": 69,
      "HP": 1953,
      "FP": 373,
      "Stamina": 160,
      "EquipLoad": 129.2,
      "Discovery": 69
    },
    {
      "Level": 70,
      "HP": 1959,
      "FP": 375,
      "Stamina": 161,
      "EquipLoad": 130.3,
      "Discovery": 70
    },
    {
      "Level": 71,
      "HP": 1965,
      "FP": 378,
      "Stamina": 161,
      "EquipLoad": 131.3,
      "Discovery": 71
    },
    {
      "Level": 72,
      "HP": 1971,
      "FP": 380,
      "Stamina": 161,
      "EquipLoad": 132.3,
      "Discovery": 72
    },
    {
      "Level": 73,
      "HP": 1977,
      "FP": 383,
      "Stamina": 162,
      "EquipLoad": 133.3,
      "Discovery": 73
    },
    {
      "Level": 74,
      "HP": 1982,
      "FP": 385,
      "Stamina": 162,
      "EquipLoad": 134.4,
      "Discovery": 74
    },
    {
      "Level": 75,
      "HP": 1988,
      "FP": 388,
      "Stamina": 162,
      "EquipLoad": 135.4,
      "Discovery": 75
    },
    {
      "Level": 76,
      "HP": 1993,
      "FP": 391,
      "Stamina": 162,
      "EquipLoad": 136.4,
      "Discovery": 76
    },
    {
      "Level": 77,
      "HP": 1999,
      "FP": 393,
      "Stamina": 163,
      "EquipLoad": 137.4,
      "Discovery": 77
    },
    {
      "Level": 78,
      "HP": 2004,
      "FP": 396,
      "Stamina": 163,
      "EquipLoad": 138.5,
      "Discovery": 78
    },
    {
      "Level": 79,
      "HP": 2010,
      "FP": 398,
      "Stamina": 163,
      "EquipLoad": 139.5,
      "Discovery": 79
    },
    {
      "Level": 80,
      "HP": 2015,
      "FP": 401,
      "Stamina": 164,
      "EquipLoad": 140.5,
      "Discovery": 80
    },
    {
      "Level": 81,
      "HP": 2020,
      "FP": 403,
      "Stamina": 164,
      "EquipLoad": 141.5,
      "Discovery": 81
    },
    {
      "Level": 82,
      "HP": 2026,
      "FP": 406,
      "Stamina": 164,
      "EquipLoad": 142.6,
      "Discovery": 82
    },
    {
      "Level": 83,
      "HP": 2031,
      "FP": 408,
      "Stamina": 165,
      "EquipLoad": 143.6,
      "Discovery": 83
    },
    {
      "Level": 84,
      "HP": 2036,
      "FP": 411,
      "Stamina": 165,
      "EquipLoad": 144.6,
      "Discovery": 84
    },
    {
      "Level": 85,
      "HP": 2041,
      "FP": 414,
      "Stamina": 165,
      "EquipLoad": 145.6,
      "Discovery": 85
    },
    {
      "Level": 86,
      "HP": 2046,
      "FP": 416,
      "Stamina": 166,
      "EquipLoad": 146.7,
      "Discovery": 86
    },
    {
      "Level": 87,
      "HP": 2051,
      "FP": 419,
      "Stamina": 166,
      "EquipLoad": 147.7,
      "Discovery": 87
    },
    {
      "Level": 88,
      "HP": 2056,
      "FP": 421,
      "Stamina": 166,
      "EquipLoad": 148.7,
      "Discovery": 88
    },
    {
      "Level": 89,
      "HP": 2060,
      "FP": 424,
      "Stamina": 166,
      "EquipLoad": 149.7,
      "Discovery": 89
    },
    {
      "Level": 90,
      "HP": 2065,
      "FP": 426,
      "Stamina": 167,
      "EquipLoad": 150.8,
      "Discovery": 90
    },
    {
      "Level": 91,
      "HP": 2070,
      "FP": 429,
      "Stamina": 167,
      "EquipLoad": 151.8,
      "Discovery": 91
    },
    {
      "Level": 92,
      "HP": 2074,
      "FP": 432,
      "Stamina": 167,
      "EquipLoad": 152.8,
      "Discovery": 92
    },
    {
      "Level": 93,
      "HP": 2078,
      "FP": 434,
      "Stamina": 168,
      "EquipLoad": 153.8,
      "Discovery": 93
    },
    {
      "Level": 94,
      "HP": 2082,
      "FP": 437,
      "Stamina": 168,
      "EquipLoad": 154.9,
      "Discovery": 94
    },
    {
      "Level": 95,
      "HP": 2086,
      "FP": 439,
      "Stamina": 168,
      "EquipLoad": 155.9,
      "Discovery": 95
    },
    {
      "Level": 96,
      "HP": 2090,
      "FP": 442,
      "Stamina": 169,
      "EquipLoad": 156.9,
      "Discovery": 96
    },
    {
      "Level": 97,
      "HP": 2094,
      "FP": 444,
      "Stamina": 169,
      "EquipLoad": 157.9,
      "Discovery": 97
    },
    {
      "Level": 98,
      "HP": 2097,
      "FP": 447,
      "Stamina": 169,
      "EquipLoad": 159,
      "Discovery": 98
    },
    {
      "Level": 99,
      "HP": 2100,
      "FP": 450,
      "Stamina": 170,
      "EquipLoad": 160,
      "Discovery": 99
    }
   ]


console.log(statIncrease[0].HP);


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

let hp = 522
let fp = 95
let stamina = 105
let equipLoad = 56.1
let discovery = 15

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

const displayHP = document.getElementById('display-hp')
const displayFP = document.getElementById('display-fp')
const displayStamina = document.getElementById('display-stamina')
const displayEquipLoad = document.getElementById('display-equip-load')
const displayDiscovery = document.getElementById('display-discovery')

// assignClass(0)


plusVigorButton.addEventListener('click', function(){
    if (vigorLvl < 99){
        vigorLvl = Number(vigorLvl) + 1;
        level = Number(level) + 1;
        hp = statIncrease[vigorLvl-1].HP
        displayVigor.value = vigorLvl
        displayLevel.value = level
        displayHP.value = hp
    }
})
plusMindButton.addEventListener('click', function(){
    if (mindLvl < 99){
        mindLvl = Number(mindLvl) + 1;
        level = Number(level) + 1;
        fp = statIncrease[mindLvl-1].FP
        displayMind.value = mindLvl
        displayLevel.value = level
        displayFP.value = fp
    }
}) 
plusEndButton.addEventListener('click', function(){
    if (endLvl < 99){
        endLvl = Number(endLvl) + 1;
        level = Number(level) + 1;
        stamina = statIncrease[endLvl-1].Stamina
        equipLoad = statIncrease[level-1].EquipLoad
        displayEnd.value = endLvl
        displayLevel.value = level
        displayStamina.value = stamina
        displayEquipLoad.value = equipLoad
        console.log(equipLoad)
    }
})
plusStrButton.addEventListener('click', function(){
    if (strLvl < 99){
        strLvl = Number(strLvl) + 1;
        level = Number(level) + 1;
        displayStr.value = strLvl
        displayLevel.value = level
    }
})
plusDexButton.addEventListener('click', function(){
    if (dexLvl < 99){
        dexLvl = Number(dexLvl) + 1;
        level = Number(level) + 1;
        displayDex.value = dexLvl
        displayLevel.value = level
    }
})
plusIntButton.addEventListener('click', function(){
    if (intLvl < 99){
        intLvl = Number(intLvl) + 1;
        level = Number(level) + 1;
        displayInt.value = intLvl
        displayLevel.value = level
    }
})
plusFaithButton.addEventListener('click', function(){
    if (faithLvl < 99){
        faithLvl = Number(faithLvl) + 1;
        level = Number(level) + 1;
        displayFaith.value = faithLvl
        displayLevel.value = level
    }
})
plusArcaneButton.addEventListener('click', function(){
    if (arcaneLvl < 99){
        arcaneLvl = Number(arcaneLvl) + 1;
        level = Number(level) + 1;
        discovery = statIncrease[arcaneLvl-1].Discovery
        displayArcane.value = arcaneLvl
        displayLevel.value = level
        displayDiscovery.value = discovery
    }
})

minusVigorButton.addEventListener('click', function(){
    if (vigorLvl > minStatLvl[currentClass][0]){
        vigorLvl = Number(vigorLvl) - 1;
        level = level - 1;
        hp = statIncrease[vigorLvl-1].HP
        displayVigor.value = vigorLvl
        displayLevel.value = level
        displayHP.value = hp
    }
})
minusMindButton.addEventListener('click', function(){
    if (mindLvl > minStatLvl[currentClass][1]){
        mindLvl = Number(mindLvl) - 1;
        level = level - 1;
        fp = statIncrease[mindLvl-1].FP
        displayMind.value = mindLvl
        displayLevel.value = level
        displayFP.value = fp
    }
}) 
minusEndButton.addEventListener('click', function(){
    if (endLvl > minStatLvl[currentClass][2]){
        endLvl = Number(endLvl) - 1;
        level = level - 1;
        stamina = statIncrease[endLvl-1].Stamina
        equipLoad = statIncrease[endLvl-1].EquipLoad
        displayEnd.value = endLvl
        displayLevel.value = level
        displayStamina.value = stamina
        displayEquipLoad.value = equipLoad
    }
})
minusStrButton.addEventListener('click', function(){
    if (strLvl > minStatLvl[currentClass][3]){
        strLvl = Number(strLvl) - 1;
        level = level - 1;
        displayStr.value = strLvl
        displayLevel.value = level
    }
})
minusDexButton.addEventListener('click', function(){
    if (dexLvl > minStatLvl[currentClass][4]){
        dexLvl = Number(dexLvl) - 1;
        level = level - 1;
        displayDex.value = dexLvl
        displayLevel.value = level
    }
})
minusIntButton.addEventListener('click', function(){
    if (intLvl > minStatLvl[currentClass][5]){
        intLvl = Number(intLvl) - 1;
        level = level - 1;
        displayInt.value = intLvl
        displayLevel.value = level
    }
})
minusFaithButton.addEventListener('click', function(){
    if (faithLvl > minStatLvl[currentClass][6]){
        faithLvl = Number(faithLvl) - 1;
        level = level - 1;
        displayFaith.value = faithLvl
        displayLevel.value = level
    }
})
minusArcaneButton.addEventListener('click', function(){
    if (arcaneLvl > minStatLvl[currentClass][7]){
        arcaneLvl = Number(arcaneLvl) - 1;
        level = level - 1;
        discovery = statIncrease[arcaneLvl-1].Discovery
        displayArcane.value = arcaneLvl
        displayLevel.value = level
        displayDiscovery.value = discovery
    }
})


// displayRunesNeeded.addEventListener('input', function(){
//     handleNumberDisplay(runesNeeded, displayRunesNeeded)
// })
displayVigor.addEventListener('blur', function(){
    if (displayVigor.value <= 99 && displayVigor.value >= minStatLvl[currentClass][0]){
        vigorLvl = displayVigor.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
        hp = statIncrease[vigorLvl-1].HP
        displayHP.value = hp
    }
    else{
        displayVigor.value = vigorLvl
    }
})
displayMind.addEventListener('blur', function(){
    if (displayMind.value <= 99 && displayMind.value >= minStatLvl[currentClass][1]){
        mindLvl = displayMind.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
        fp = statIncrease[mindLvl-1].FP
        displayFP.value = fp
    }
    else{
        displayMind.value = mindLvl
    }
})
displayEnd.addEventListener('blur', function(){
    if (displayEnd.value <= 99 && displayEnd.value >= minStatLvl[currentClass][2]){
        endLvl = displayEnd.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
        stamina = statIncrease[endLvl-1].Stamina
        equipLoad = statIncrease[endLvl-1].EquipLoad
        displayStamina.value = stamina
        displayEquipLoad.value = equipLoad
    }
    else{
        displayEnd.value = endLvl
    }
})
displayStr.addEventListener('blur', function(){
    if (displayStr.value <= 99 && displayStr.value >= minStatLvl[currentClass][3]){
        strLvl = displayStr.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
    }
    else{
        displayStr.value = strLvl
    }
})
displayDex.addEventListener('blur', function(){
    if (displayDex.value <= 99 && displayDex.value >= minStatLvl[currentClass][4]){
        dexLvl = displayDex.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
    }
    else{
        displayDex.value = dexLvl
    }
})
displayInt.addEventListener('blur', function(){
    if (displayInt.value <= 99 && displayInt.value >= minStatLvl[currentClass][5]){
        intLvl = displayInt.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
    }
    else{
        displayInt.value = intLvl
    }
})
displayFaith.addEventListener('blur', function(){
    if (displayFaith.value <= 99 && displayFaith.value >= minStatLvl[currentClass][6]){
        faithLvl = displayFaith.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
    }
    else{
        displayFaith.value = faithLvl
    }
})
displayArcane.addEventListener('blur', function(){
    if (displayArcane.value <= 99 && displayArcane.value >= minStatLvl[currentClass][7]){
        arcaneLvl = displayArcane.value
        level = Number(vigorLvl)+Number(mindLvl)+Number(endLvl)+Number(strLvl)+Number(dexLvl)+Number(intLvl)+Number(faithLvl)+Number(arcaneLvl)-79
        displayLevel.value = level
        discovery = statIncrease[arcaneLvl-1].Discovery
        displayDiscovery.value = discovery
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


