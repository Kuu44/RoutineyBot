/*
For easy navigation, go to folding level 2
(Atom: Ctrl+K then Ctrl+2; VS: Ctrl+M then Ctrl+O)
Then fold line 1 ^^

Subscribed Servers:
BCT075 550704758055370767: #routine 750431836827680898
kuu's Crib 544232674412462101: #server-mgmt 742020361440198750
BCT076 679306265674907671: #reminders 745136785666998303
bot-test-server 681076561142611989: #routiney-bot-test 750653645174997093

Guide:

BCT074:
1. Operating System, :penguin: , AV;
2. Database Management System, :cd: , AS;
3. Object Oriented Analysis & Design, , AT;
4. Artificial Intelligence, :robot: , BJ;
5. Embedded System, , SS;
6. Engineering Economics, , RK;
7. Embedded System, , LAB
8. Minor Project, , LAB;
9. Object Oriented Analysis & Design, , LAB

BCT075:
1. Instrumentation I,:control_knobs:;MB;
2. Applied Math;:construction_site:;SG;SKM;JG
3. Microprocessor;:robot:;DSB;
4. Numerical Methods;:bar_chart:;BDM;
5. Data Structure and Algorithm;:cd:;BS;
6. Discrete Structure;:calendar_spiral:;SPP;
7. Electric Machine;:satellite_orbital:;KBT;
8. Data Structure and Algorithm;:cd:;LAB;
9. Microprocessor;:robot:;LAB;
10. Instrumentation I,:control_knobs:;LAB;

kuus:
1. Instrumentation I,:control_knobs:;MB;
2. Applied Math;:construction_site:;SG;SKM;JG
3. Microprocessor;:robot:;DSB;
4. Numerical Methods;:bar_chart:;BDM;
5. Data Structure and Algorithm;:cd:;BS;
6. Discrete Structure;:calendar_spiral:;SPP;
7. Electric Machine;:satellite_orbital:;KBT;
8. Data Structure and Algorithm;:cd:;LAB;
9. Microprocessor;:robot:;LAB;
10. Instrumentation I,:control_knobs:;LAB;

BCT076:
0. Thermodynamics;:thermometer:; AKJ
1. Math II;:bar_chart: ; GG; JG; AKB; PA
2. Workshop Technology; :hammer:; NA
3. Chemistry;:lab_coat:; SP; RMS; AS; SJ
4. Basic Electronics Engineering;:control_knobs:; JKM; SST
5. Engineering Drawing;:triangular_ruler:; NA
6. Thermodynamics;:thermometer: ; LAB
7. Basic ElectrAonics Engineering;:control_knobs:; LAB
8. Chemistry;:lab_coat:;LAB

*/

const subjects = {
  "BCT074": [
    "Operating System", "Database Management System","Object Oriented Analysis & Design", "Artificial Intelligence", "Embedded System", "Engineering Economics", "Minor Project"
  ],
  "BCT075": [
    "Numerical Methods", "Instrumentation I", "Applied Math", "Microprocessor",
    "Data Structure and Algorithm", "Discrete Structure", "Electric Machine"
  ],
  "kuus": [
    "Numerical Methods", "Instrumentation I", "Applied Math", "Microprocessor",
    "Data Structure and Algorithm", "Discrete Structure", "Electric Machine"
  ],
  "BCT076": ["Thermodynamics", "Math II", "Workshop Technology", "Chemistry",
    "Basic Electronics Engineering", "Engineering Drawing"
  ]
}; //List of subjects
const emotes = {
  "BCT074": [
     ":penguin:", ":cd:", ":technologist:", ":robot:", 
     ":control_knobs:", 
     ":money_with_wings:",
     ":card_box:",
  ],
  "BCT075": [
    ":bar_chart:", ":control_knobs:", ":construction_site:", ":robot:",
    ":cd:", ":calendar_spiral:", ":satellite_orbital:"
  ],
  "kuus": [
    ":bar_chart:", ":control_knobs:", ":construction_site:", ":robot:", ":cd:",
    ":calendar_spiral:", ":satellite_orbital:"
  ],
  "BCT076": [":thermometer:", ":bar_chart:", ":hammer:", ":lab_coat:",
    ":control_knobs:", ":triangular_ruler:"
  ]
}; //List of emotes
const teachers = {
  "BCT074": [
    "AV", "AS", "BJ", "AT", "SS", "RK", "LAB"
  ],
  "BCT075": ["SG", "MB", "SKM", "DSB", "BS", "SPP", "KBT", "BDM", "JG", "JRS", "LAB"],
  "kuus": ["SG", "MB", "SKM", "DSB", "BS", "SPP", "KBT", "BDM", "JG", "JRS", "LAB"],
  "BCT076": ["AKJ", "GG", "NA", "SP", "JKM", "NA", "JG", "AKB", "PA", "RMS", "AS", "SJ", "SST", "LAB"]
}; //List of teachers
const emotePNGs = {
  "BCT074": [

  ],
  "BCT075": [
    "https://hotemoji.com/images/dl/t/bar-chart-emoji-by-twitter.png",
    "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55878/control-knobs-emoji-clipart-md.png",
    "https://hotemoji.com/images/dl/r/building-construction-emoji-by-twitter.png",
    "https://images.emojiterra.com/twitter/512px/1f916.png",
    "https://i.imgur.com/HyOwb0R.png",
    "https://images.emojiterra.com/twitter/512px/1f5d3.png",
    "https://i.imgur.com/XkqSXIE.png"
  ],
  "kuus": [
    "https://hotemoji.com/images/dl/t/bar-chart-emoji-by-twitter.png",
    "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55878/control-knobs-emoji-clipart-md.png",
    "https://hotemoji.com/images/dl/r/building-construction-emoji-by-twitter.png",
    "https://images.emojiterra.com/twitter/512px/1f916.png",
    "https://i.imgur.com/HyOwb0R.png",
    "https://images.emojiterra.com/twitter/512px/1f5d3.png",
    "https://i.imgur.com/XkqSXIE.png"
  ],
  "BCT076": [
    "https://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11893-thermometer.png",
    "https://hotemoji.com/images/dl/t/bar-chart-emoji-by-twitter.png",
    "https://i.imgur.com/czFMa9Q.png",
    "https://hotemoji.com/images/dl/o/lab-coat-emoji-by-twitter.png",
    "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55878/control-knobs-emoji-clipart-md.png",
    "https://i.imgur.com/b5KsQQx.png"
  ]
}; //List of emote pngs

const info = {

   "    " /*BCT074*/: {
  //   "notificationsON": false,
  //   "startNotification": true,
  //   "preNotification": true,
  //   "timeZoneFix": [5, 45],
  //   "className": "075 BCT AB",
  //   "classLogo": "https://i.imgur.com/OQwR8CB.png",
  //   "classLink": "https://teams.microsoft.com/_#/school//?ctx=teamsGrid",
  //   "preTime": 15,
  //   "channelId": 750431836827680898, //BCT074: #routine
    "routine": [{
        "_emotes": [emotes['BCT074'][0], emotes['BCT074'][1], "", emotes['BCT074'][6], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][0], emotePNGs['BCT074'][1], "", emotePNGs['BCT074'][6], "END"],
        "_periods": [subjects['BCT074'][0], subjects['BCT074'][1], "B", subjects['BCT074'][6], "END"],
        "_teachers": [teachers['BCT074'][0], teachers['BCT074'][1], "", teachers['BCT074'][6], "END"],
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
      [16, 55]
    ]
  ]
},
{
  "_emotes": [emotes['BCT074'][2], "", emotes['BCT074'][6], emotes['BCT074'][0], "END"],
  "_emotePNGs": [emotePNGs['BCT074'][2], "", emotePNGs['BCT074'][6], emotePNGs['BCT074'][0], "END"],
  "_periods": [subjects['BCT074'][2], "B", subjects['BCT074'][6], "Operating System/ :control_knobs: Embedded System","END"],
  "_teachers": [teachers['BCT074'][6], "", teachers['BCT074'][6], teachers['BCT074'][6], "END"],
  "_timing": [
    [
      [10, 15],
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
  "_emotes": [emotes['BCT074'][0], emotes['BCT074'][3], emotes['BCT074'][2], "", emotes['BCT074'][4], emotes['BCT074'][1], emotes['BCT074'][4],"END"],
  "_emotePNGs": [emotePNGs['BCT074'][0], emotePNGs['BCT074'][3], emotePNGs['BCT074'][2], "", emotePNGs['BCT074'][4], emotePNGs['BCT074'][1], emotePNGs['BCT074'][4] ,"END"],
  "_periods": [subjects['BCT074'][0], subjects['BCT074'][3], subjects['BCT074'][2], "B", subjects['BCT074'][4], subjects["BCT074"][1], subjects['BCT074'][4],"END"],
  "_teachers": [teachers['BCT074'][0], teachers['BCT074'][3], teachers['BCT074'][2], "", teachers['BCT074'][4], teachers['BCT074'][1], teachers['BCT074'][4], "END"],
  "_timing": [
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
},

{
  "_emotes": [emotes['BCT074'][2], emotes['BCT074'][1], emotes['BCT074'][3], emotes['BCT074'][0], "END"],
  "_emotePNGs": [emotePNGs['BCT074'][2], emotePNGs['BCT074'][1], emotePNGs['BCT074'][3], emotePNGs['BCT074'][0], "END"],
  "_periods": [subjects['BCT074'][2], subjects['BCT074'][1], subjects['BCT074'][3], subjects['BCT074'][0], "END"],
  "_teachers": [teachers['BCT074'][2], teachers['BCT074'][1], teachers['BCT074'][3], teachers['BCT074'][0], "END"],
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
  "_emotes": [emotes['BCT074'][4], " ", emotes['BCT074'][5], "", emotes['BCT074'][1], "END"],
  "_emotePNGs": [emotePNGs['BCT074'][4]," ", emotePNGs['BCT074'][5], "", emotePNGs['BCT074'][1], "END"],
  "_periods": [subjects['BCT074'][4], " ", subjects['BCT074'][5], "B", subjects['BCT074'][1], "END"],
  "_teachers": [teachers['BCT074'][4], " ", teachers['BCT074'][6], "", teachers['BCT074'][1], "END"],
  "_timing": [
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
  "_emotes": [emotes['BCT074'][3], emotes['BCT074'][5], "", emotes['BCT074'][3], "END"],
  "_emotePNGs": [emotePNGs['BCT074'][3], emotePNGs['BCT074'][5], "", emotePNGs['BCT074'][3], "END"],
  "_periods": [subjects['BCT074'][3], subjects['BCT074'][5], "B", subjects['BCT074'][3], "END"],
  "_teachers": [teachers['BCT074'][5], teachers['BCT074'][3], "", teachers['BCT074'][6], "END"],
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
      [16, 55]
    ]
  ]
}
]
},




  "550704758055370767" /*The Collusion*/: {
    "notificationsON": false,
    "startNotification": true,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "075 BCT AB",
    "classLogo": "https://i.imgur.com/OQwR8CB.png",
    "classLink": "https://teams.microsoft.com/_#/school//?ctx=teamsGrid",
    "preTime": 15,
    "channelId": 750431836827680898, //The Collusion: #routine
    "routine": [{
        "_emotes": [emotes['BCT075'][0], emotes['BCT075'][1], "", emotes['BCT075'][2], emotes['BCT075'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][0], emotePNGs['BCT075'][1], "", emotePNGs['BCT075'][2], emotePNGs['BCT075'][0], "END"],
        "_periods": [subjects['BCT075'][0], subjects['BCT075'][1], "B", subjects['BCT075'][2], subjects['BCT075'][0], "END"],
        "_teachers": [teachers['BCT075'][0], teachers['BCT075'][1], "", teachers['BCT075'][0], teachers['BCT075'][9], "END"],
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
      },
      {
        "_emotes": [emotes['BCT075'][3], emotes['BCT075'][0], "", emotes['BCT075'][2], " ", emotes['BCT075'][2], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][3], emotePNGs['BCT075'][0], "", emotePNGs['BCT075'][2], "", emotePNGs['BCT075'][2], "END"],
        "_periods": [subjects['BCT075'][3], subjects['BCT075'][0], "B", subjects['BCT075'][2], " ", subjects['BCT075'][2], "END"],
        "_teachers": [teachers['BCT075'][3], teachers['BCT075'][7], "", teachers['BCT075'][2], " ", teachers['BCT075'][9], "END"],
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
            [16, 0]
          ],
          [
            [16, 0],
            [17, 30]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][4], emotes['BCT075'][5], "", emotes['BCT075'][4], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][4], emotePNGs['BCT075'][5], "", emotePNGs['BCT075'][4], "END"],
        "_periods": [subjects['BCT075'][4], subjects['BCT075'][5], "B", subjects['BCT075'][4], "END"],
        "_teachers": [teachers['BCT075'][4], teachers['BCT075'][5], "", subjects['BCT075'][4], "END"],
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
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][1], emotes['BCT075'][6], "", emotes['BCT075'][3], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][1], emotePNGs['BCT075'][6], "", emotePNGs['BCT075'][3], "END"],
        "_periods": [subjects['BCT075'][1], subjects['BCT075'][6], "B", subjects['BCT075'][3], "END"],
        "_teachers": [teachers['BCT075'][1], teachers['BCT075'][6], "", teachers['BCT075'][10], "END"],
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
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][6], emotes['BCT075'][5], "", emotes['BCT075'][4], emotes['BCT075'][6], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][6], emotePNGs['BCT075'][5], "", emotePNGs['BCT075'][4], emotePNGs['BCT075'][6], "END"],
        "_periods": [subjects['BCT075'][6], subjects['BCT075'][5], "B", subjects['BCT075'][4], " Electric Machine / :control_knobs: Instrumentation I", "END"],
        "_teachers": [teachers['BCT075'][6], teachers['BCT075'][5], "", teachers['BCT075'][4], teachers['BCT075'][10], "END"],
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
        "_emotes": ["", emotes['BCT075'][3], "", emotes['BCT075'][2], emotes['BCT075'][0], "END"],
        "_emotePNGs": ["", emotePNGs['BCT075'][3], "", emotePNGs['BCT075'][2], emotePNGs['BCT075'][0], "END"],
        "_periods": [" ", subjects['BCT075'][3], "B", subjects['BCT075'][2], subjects['BCT075'][0], "END"],
        "_teachers": ["", teachers['BCT075'][3], "", teachers['BCT075'][0], teachers['BCT075'][10], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
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
      }
    ]
  },
  "544232674412462101" /*kuu's*/: {
    "notificationsON": false,
    "startNotification": true,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "075 BCT AB",
    "classLogo": "https://i.imgur.com/OQwR8CB.png",
    "classLink": "https://teams.microsoft.com/_#/school//?ctx=teamsGrid",
    "preTime": 15,
    "channelId": 753515966759174264, //kuu's Crib: #routiney-notifications
    "routine": [{
        "_emotes": [emotes['kuus'][0], emotes['kuus'][1], "", emotes['kuus'][2], emotes['kuus'][0], "END"],
        "_emotePNGs": [emotePNGs['kuus'][0], emotePNGs['kuus'][1], "", emotePNGs['kuus'][2], emotePNGs['kuus'][0], "END"],
        "_periods": [subjects['kuus'][0], subjects['kuus'][1], "B", subjects['kuus'][2], subjects['kuus'][0], "END"],
        "_teachers": [teachers['kuus'][0], teachers['kuus'][1], "", teachers['kuus'][0], teachers['kuus'][9], "END"],
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
      },
      {
        "_emotes": [emotes['kuus'][3], emotes['kuus'][0], "", emotes['kuus'][2], emotes['kuus'][4], "END"],
        "_emotePNGs": [emotePNGs['kuus'][3], emotePNGs['kuus'][0], "", emotePNGs['kuus'][2], emotePNGs['kuus'][4], "END"],
        "_periods": [subjects['kuus'][3], subjects['kuus'][0], "B", subjects['kuus'][2], subjects['kuus'][4], "END"],
        "_teachers": [teachers['kuus'][3], teachers['kuus'][7], "", teachers['kuus'][2], teachers['kuus'][10], "END"],
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
        "_emotes": [emotes['kuus'][4], emotes['kuus'][5], "", emotes['kuus'][4], "END"],
        "_emotePNGs": [emotePNGs['kuus'][4], emotePNGs['kuus'][5], "", emotePNGs['kuus'][4], "END"],
        "_periods": [subjects['kuus'][4], subjects['kuus'][5], "B", subjects['kuus'][4], "END"],
        "_teachers": [teachers['kuus'][4], teachers['kuus'][5], "", subjects['kuus'][4], "END"],
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
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['kuus'][1], emotes['kuus'][6], "", emotes['kuus'][3], "END"],
        "_emotePNGs": [emotePNGs['kuus'][1], emotePNGs['kuus'][6], "", emotePNGs['kuus'][3], "END"],
        "_periods": [subjects['kuus'][1], subjects['kuus'][6], "B", subjects['kuus'][3], "END"],
        "_teachers": [teachers['kuus'][1], teachers['kuus'][6], "", teachers['kuus'][10], "END"],
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
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['kuus'][6], emotes['kuus'][5], "", emotes['kuus'][4], emotes['kuus'][6], "END"],
        "_emotePNGs": [emotePNGs['kuus'][6], emotePNGs['kuus'][5], "", emotePNGs['kuus'][4], emotePNGs['kuus'][6], "END"],
        "_periods": [subjects['kuus'][6], subjects['kuus'][5], "B", subjects['kuus'][4], " Electric Machine / :control_knobs: Instrumentation I", "END"],
        "_teachers": [teachers['kuus'][6], teachers['kuus'][5], "", teachers['kuus'][4], teachers['kuus'][10], "END"],
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
        "_emotes": ["", emotes['kuus'][3], "", emotes['kuus'][2], emotes['kuus'][0], "END"],
        "_emotePNGs": ["", emotePNGs['kuus'][3], "", emotePNGs['kuus'][2], emotePNGs['kuus'][0], "END"],
        "_periods": [" ", subjects['kuus'][3], "B", subjects['kuus'][2], subjects['kuus'][0], "END"],
        "_teachers": ["", teachers['kuus'][3], "", teachers['kuus'][0], teachers['kuus'][10], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
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
      }
    ]
  },
  "681076561142611989" /*bot-test-server*/: {
    "notificationsON": false,
    "startNotification": true,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "Bot Test Server",
    "classLogo": "https://i.imgur.com/OQwR8CB.png",
    "classLink": "https://teams.microsoft.com/_#/school//?ctx=teamsGrid",
    "preTime": 15,
    "channelId": 750653645174997093, //bot-test-server: #routiney-bot-test
    "routine": [{
        "_emotes": [emotes['kuus'][0], emotes['kuus'][1], "", emotes['kuus'][2], emotes['kuus'][0], "END"],
        "_emotePNGs": [emotePNGs['kuus'][0], emotePNGs['kuus'][1], "", emotePNGs['kuus'][2], emotePNGs['kuus'][0], "END"],
        "_periods": [subjects['kuus'][0], subjects['kuus'][1], "B", subjects['kuus'][2], subjects['kuus'][0], "END"],
        "_teachers": [teachers['kuus'][0], teachers['kuus'][1], "", teachers['kuus'][0], teachers['kuus'][9], "END"],
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
      },
      {
        "_emotes": [emotes['kuus'][3], emotes['kuus'][0], "", emotes['kuus'][2], emotes['kuus'][4], "END"],
        "_emotePNGs": [emotePNGs['kuus'][3], emotePNGs['kuus'][0], "", emotePNGs['kuus'][2], emotePNGs['kuus'][4], "END"],
        "_periods": [subjects['kuus'][3], subjects['kuus'][0], "B", subjects['kuus'][2], subjects['kuus'][4], "END"],
        "_teachers": [teachers['kuus'][3], teachers['kuus'][7], "", teachers['kuus'][2], teachers['kuus'][10], "END"],
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
        "_emotes": [emotes['kuus'][4], emotes['kuus'][5], "", emotes['kuus'][4], "END"],
        "_emotePNGs": [emotePNGs['kuus'][4], emotePNGs['kuus'][5], "", emotePNGs['kuus'][4], "END"],
        "_periods": [subjects['kuus'][4], subjects['kuus'][5], "B", subjects['kuus'][4], "END"],
        "_teachers": [teachers['kuus'][4], teachers['kuus'][5], "", subjects['kuus'][4], "END"],
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
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['kuus'][1], emotes['kuus'][6], "", emotes['kuus'][3], "END"],
        "_emotePNGs": [emotePNGs['kuus'][1], emotePNGs['kuus'][6], "", emotePNGs['kuus'][3], "END"],
        "_periods": [subjects['kuus'][1], subjects['kuus'][6], "B", subjects['kuus'][3], "END"],
        "_teachers": [teachers['kuus'][1], teachers['kuus'][6], "", teachers['kuus'][10], "END"],
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
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['kuus'][6], emotes['kuus'][5], "", emotes['kuus'][4], emotes['kuus'][6], "END"],
        "_emotePNGs": [emotePNGs['kuus'][6], emotePNGs['kuus'][5], "", emotePNGs['kuus'][4], emotePNGs['kuus'][6], "END"],
        "_periods": [subjects['kuus'][6], subjects['kuus'][5], "B", subjects['kuus'][4], " Electric Machine / :control_knobs: Instrumentation I", "END"],
        "_teachers": [teachers['kuus'][6], teachers['kuus'][5], "", teachers['kuus'][4], teachers['kuus'][10], "END"],
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
        "_emotes": ["", emotes['kuus'][3], "", emotes['kuus'][2], emotes['kuus'][0], "END"],
        "_emotePNGs": ["", emotePNGs['kuus'][3], "", emotePNGs['kuus'][2], emotePNGs['kuus'][0], "END"],
        "_periods": [" ", subjects['kuus'][3], "B", subjects['kuus'][2], subjects['kuus'][0], "END"],
        "_teachers": ["", teachers['kuus'][3], "", teachers['kuus'][0], teachers['kuus'][10], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
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
      }
    ]
  },
  "679306265674907671": /*BCT076*/ {
    "notificationsON": false,
    "startNotification": false,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "076 BCT AB",
    "classLogo": "https://media.discordapp.net/attachments/695687733330313286/753473074610831390/6738_WaddlingDuck.gif",
    "classLink": "https://teams.microsoft.com/_#/school//?ctx=teamsGrid",
    "preTime": 10,
    "channelId": 745136785666998303, //076-BCT-AB: #reminders
    "routine": [{
        "_emotes": [emotes['BCT076'][0], emotes['BCT076'][1], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][0], emotePNGs['BCT076'][1], "END"],
        "_periods": [subjects['BCT076'][0], subjects['BCT076'][1], "END"],
        "_teachers": [teachers['BCT076'][0], teachers['BCT076'][1], "END"],
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
        "_emotes": [emotes['BCT076'][5], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][5], "END"],
        "_periods": [subjects['BCT076'][5], "END"],
        "_teachers": [teachers['BCT076'][5], "END"],
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
        "_emotes": [emotes['BCT076'][1], emotes['BCT076'][3], "", emotes['BCT076'][3], emotes['BCT076'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][1], emotePNGs['BCT076'][3], "", emotePNGs['BCT076'][3], emotePNGs['BCT076'][0], "END"],
        "_periods": [subjects['BCT076'][1], subjects['BCT076'][3], "B", subjects['BCT076'][3], " Thermodynamics/ :control_knobs: Basic Electronics Engineering", "END"],
        "_teachers": [teachers['BCT076'][1], teachers['BCT076'][3], "", teachers['BCT076'][9], teachers['BCT076'][13], "END"],
        "_timing": [
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
        "_emotes": ["", emotes['BCT076'][4], "", emotes['BCT076'][0], "END"],
        "_emotePNGs": ["", emotePNGs['BCT076'][4], "", emotePNGs['BCT076'][0], "END"],
        "_periods": [" ", subjects['BCT076'][4], "B", subjects['BCT076'][0], "END"],
        "_teachers": ["", teachers['BCT076'][4], "", teachers['BCT076'][0], "END"],
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
            [14, 0],
          ],
          [
            [14, 0],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT076'][1], emotes['BCT076'][1], emotes['BCT076'][1], "", emotes['BCT076'][3], emotes['BCT076'][3], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][1], emotePNGs['BCT076'][1], emotePNGs['BCT076'][1], "", emotePNGs['BCT076'][3], emotePNGs['BCT076'][3], "END"],
        "_periods": [subjects['BCT076'][1], subjects['BCT076'][1], subjects['BCT076'][1], "B", subjects['BCT076'][3], subjects['BCT076'][3], "END"],
        "_teachers": [teachers['BCT076'][7], teachers['BCT076'][1], teachers['BCT076'][8], "", teachers['BCT076'][10], teachers['BCT076'][13], "END"],
        "_timing": [
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
        "_emotes": [emotes['BCT076'][2], "", emotes['BCT076'][4], emotes['BCT076'][3], "", emotes['BCT076'][4], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][2], "", emotePNGs['BCT076'][4], emotePNGs['BCT076'][3], "", emotePNGs['BCT076'][4], "END"],
        "_periods": [subjects['BCT076'][2], " ", subjects['BCT076'][4], subjects['BCT076'][3], "B", subjects['BCT076'][4], "END"],
        "_teachers": [teachers['BCT076'][2], "", teachers['BCT076'][3], teachers['BCT076'][11], "", teachers['BCT076'][12], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55],
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
            [14, 55]
          ],
          [
            [14, 55],
            [16, 55],
          ],
        ]
      }
    ]
  },
};
const helpers = {
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
module.exports = {
  info,
  helpers
};
