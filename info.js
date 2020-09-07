const subjects = ["Thermodynamics", "Math II", "Workshop Technology", "Chemistry", "Basic Electronics Engineering", "Engineering Drawing"] ;//List of subjects
const emotes = [":thermometer:",":bar_chart:"," :hammer:",":lab_coat:",":control_knobs:",":triangular_ruler:"] //List of emotes
const teachers = ["AKJ", "GG","NA","SP","JKM","RC","JG","AKB","PA","RMS","AS","SJ","SST","LAB"] //List of teachers
const emotePNGS = [
  "https://hotemoji.com/images/dl/t/bar-chart-emoji-by-twitter.png",
  "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55878/control-knobs-emoji-clipart-md.png",
  "https://hotemoji.com/images/dl/r/building-construction-emoji-by-twitter.png",
  "https://images.emojiterra.com/twitter/512px/1f916.png",
  "https://i.imgur.com/HyOwb0R.png",
  "https://images.emojiterra.com/twitter/512px/1f5d3.png",
  "https://i.imgur.com/XkqSXIE.png"
];
//0. Thermodynamics; ; AKJ
//1. Math II; ; GG; JG; AKB; PA
//2. Workshop Technology; ; NA
//3. Chemistry; ; SP; RMS; AS; SJ
//4. Basic Electronics Engineering; ; JKM; SST
//5. Engineering Drawing; ; RC
//6. Thermodynamics; ; LAB
//7. Basic Electronics Engineering; ; LAB

const info = {
  "notificationsON":false,
  "timeZoneFix":[5,45],
  "className": "075 BCT AB",
  "classLogo": "https://i.imgur.com/OQwR8CB.png",
  "classLink": "https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid",
  "preTime": 15,
  "channelId": 750431836827680898, //The Collusion: #routine
  // "channelId": 742020361440198750,////kuu's Crib: #server-mgmt
  "routine": [
    {
      "_emotes": [emotes[0],emotes[1],"",emotes[2], "END"],
      "_emotePNGs": [emotePNGS[0], emotePNGS[1], "", emotePNGS[2], "END"],
      "_periods": [subjects[0], subjects[1], "B", subjects[2], "END"],
      "_teachers": [teachers[0], teachers[1], "", teachers[2], "END"],
      "_timing": [
        [
          [10, 15],
          [11, 55]
        ],
        [
          [11, 55],
          [12, 45]
        ],
        [
          [12, 45],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": [emotes[5],"END"],
      "_emotePNGs": [emotePNGS[5], "END"],
      "_periods": [subjects[5], "END"],
      "_teachers": [teachers[5], "END"],
      "_timing": [
        [
          [10, 15],
          [13, 35]
        ],
        [
          [13, 35],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": [emotes[1], emotes[3], "", emotes[3], emotes[0], "END"],
      "_emotePNGs": [emotePNGS[1], emotePNGS[3], "",emotePNGS[3],emotePNGS[0], "END"],
      "_periods": [subjects[1], subjects[3], "B",subjects[3]," Thermodynamics/ :control_knobs: Basic Electronics Engineering", "END"],
      "_teachers": [teachers[1], teachers[3],"",teachers[9], teachers[13],"END"],
      "_timing":[
        [
          [10, 15],
          [11, 5]
        ],
        [
          [11, 5],
          [11, 55]
        ],
        [
          [11, 55],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": [emotes[0], emotes[4],"END"],
      "_emotePNGs": [emotePNGS[0], emotePNGS[4], "END"],
      "_periods": [subjects[0], subjects[4], "END"],
      "_teachers": [teachers[0], teachers[4], "END"],
      "_timing": [
        [
          [10, 15],
          [11, 55]
        ],
        [
          [11, 55],
          [12, 45]
        ],
        [
          [12, 45],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": [emotes[1], emotes[1], emotes[1], "", emotes[3], emotes[3], "END"],
      "_emotePNGs": [emotePNGS[1], emotePNGS[1], emotePNGS[1], "", emotePNGS[3], emotePNGS[3], "END"],
      "_periods": [subjects[1], subjects[1], subjects[1], "B", subjects[3], subjects[3],"END"],
      "_teachers": [teachers[7], teachers[1], teachers[8], "", teachers[10], teachers[13], "END"],
      "_timing":[
        [
          [10, 15],
          [11, 5]
        ],
        [
          [11, 5],
          [11, 55]
        ],
        [
          [11, 55],
          [12, 45]
        ],
        [
          [12, 45],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [16, 55]
        ]
      ]
    },
    {
      "_emotes": ["", emotes[4], emotes[3], emotes[4], "END"],
      "_emotePNGs": ["", emotePNGS[4], emotePNGS[3], emotePNGS[4], "END"],
      "_periods": [" ", subjects[4], subjects[3], subjects[4], "END"],
      "_teachers": ["", teachers[4], teachers[11], teachers[12], "END"],
      "_timing": [
        [
          [10, 15],
          [11, 55]
        ],
        [
          [11, 55],
          [13, 35]
        ],
        [
          [13, 35],
          [14, 25]
        ],
        [
          [14, 25],
          [16, 5]
        ],
        [
          [16, 5],
          [16, 55]
        ]
      ]
    }
  ],
  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "Timing": [
    [
      [10, 15],
      [11, 5]
    ],
    [
      [11, 5],
      [11, 55]
    ],
    [
      [11, 55],
      [12, 45]
    ],
    [
      [12, 45],
      [13, 35]
    ],
    [
      [13, 35],
      [14, 25]
    ],
    [
      [14, 25],
      [15, 15]
    ],
    [
      [15, 15],
      [16, 5]
    ],
    [
      [16, 5],
      [16, 55]
    ]
  ]
};
module.exports = info;
