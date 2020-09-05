const subjects = ["Numerical Methods", "Instrumentation I", "Applied Math", "Microprocessor",
  "Data Structure and Algorithm", "Discrete Structure", "Electric Machine"
]; //List of subjects
const emotes = [":bar_chart:", ":control_knobs:", ":construction_site:", ":robot:", ":cd:", ":calendar_spiral:", ":satellite_orbital:"]; //List of emotes
const teachers = ["SG", "MB", "SKM", "DSB", "BS", "SPP", "KBT", "BDM", "JG", "JRS", "LAB"]; //List of teachers

//0. Numerical Methods;:bar_chart:;SG;JRS
//1. Instrumentation I,:control_knobs:;MB;
//2. Applied Math;:construction_site:;SG;SKM;JG
//3. Microprocessor;:robot:;DSB;
//4. Numerical Methods;:bar_chart:;BDM;
//5. Data Structure and Algorithm;:cd:;BS;
//6. Discrete Structure;:calendar_spiral:;SPP;
//7. Electric Machine;:satellite_orbital:;KBT;
//8. Data Structure and Algorithm;:cd:;LAB;
//9. Microprocessor;:robot:;LAB;
//10. Instrumentation I,:control_knobs:;LAB;

const info = {
  "routine": [{
      "_emotes": [emotes[0], emotes[0], emotes[1], emotes[1], "", emotes[2], emotes[2], emotes[0], "END"],
      "_periods": [subjects[0], subjects[0], subjects[1], subjects[1], "B", subjects[2], subjects[2], subjects[0], "END"],
      "_teachers": [teachers[0], teachers[0], teachers[1], teachers[1], "", teachers[8], teachers[0], teachers[9], "END"],
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
      "_emotes": [emotes[3], emotes[3], emotes[0], emotes[0], "", emotes[2], emotes[4], emotes[4], emotes[4], "END"],
      "_periods": [subjects[3], subjects[3], subjects[0], subjects[0], "B", subjects[2], subjects[4], subjects[4], subjects[4], "END"],
      "_teachers": [teachers[3], teachers[3], teachers[7], teachers[7], "", teachers[2], teachers[10], teachers[10], teachers[10], "END"],
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
      "_emotes": [emotes[4], emotes[4], emotes[5], emotes[5], "", "END"],
      "_periods": [subjects[4], subjects[4], subjects[5], subjects[5], "B", "END"],
      "_teachers": [teachers[4], teachers[4], teachers[5], teachers[5], "", "END"],
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
      "_emotes": [emotes[1], emotes[1], emotes[6], emotes[6], "", emotes[3], emotes[3], emotes[3], "END"],
      "_periods": [subjects[1], subjects[1], subjects[6], subjects[6], "B", subjects[3], subjects[3], subjects[3], "END"],
      "_teachers": [teachers[1], teachers[1], teachers[6], teachers[6], "", teachers[10], teachers[10], teachers[10], "END"],
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
      "_emotes": [emotes[6], emotes[6], emotes[5], "", emotes[4], emotes[6], emotes[6], "END"],
      "_periods": [subjects[6], subjects[6], subjects[5], "B", subjects[4], " Electric Machine / :control_knobs: Instrumentation I", " Electric Machine / :control_knobs: Instrumentation I", "END"],
      "_teachers": [teachers[6], teachers[6], teachers[5], "", teachers[4], teachers[10], teachers[10], "END"],
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
      "_emotes": ["", emotes[3], emotes[3], "", emotes[2], emotes[0], emotes[0], "END"],
      "_periods": [" ", subjects[3], subjects[3], "B", subjects[2], subjects[0], subjects[0], "END"],
      "_teachers": ["", teachers[3], teachers[3], "", teachers[0], teachers[10], teachers[10], "END"],
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
