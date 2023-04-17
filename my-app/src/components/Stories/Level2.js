const LEVEL2 = {
  "testScene": {
    "type": "comic",
    "background": "sea",
    "nextScene": "testScene2",
    "baseFrame": [],
    "frames": [
      []
    ]
  },
  "pancakeIntro": {
    "type": "comic",
    "background": "sea",
    "nextScene": "pancakeNorthAmerica",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "47.6",
        "y": "-1",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "18",
        "y": "35",
        "size": "15",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hello there! I’m Pancake the Flapjack Octopus. \nPress the Next button in the bottom right to keep going!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": " I will lead you around your adventure today and help you learn about the ocean, sea creatures and the impact humans have on the ocean.",
        "type": "left"
      }
    ]
  },
  "pancakeNorthAmerica": {
    "type": "comic",
    "background": "north-america-blank",
    "previousScene": "pancakeIntro",
    "nextScene": "clickMap",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "This is a map of North America. Do you know where the Pacific Ocean is? Click on where you think the Pacific Ocean is.",
        "type": "nospeaker"
      }
    ]
  },
  "pacificOcean_correct": {
    "type": "comic",
    "background": "north-america",
    "previousScene": "pancakeNorthAmerica",
    "nextScene": "pancakeWashingtonState",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Correct! The Pacific Ocean is on the west side of the United States, near Washington, Oregon and California.",
        "type": "nospeaker"
      }
    ]
  },
  "pacificOcean_incorrect": {
    "type": "comic",
    "background": "north-america",
    "previousScene": "pancakeNorthAmerica",
    "nextScene": "pancakeWashingtonState",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "10",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Uh Oh! Looks like you weren’t sure where the Pacific Ocean is. Its on the west side of the United States, near Washington, Oregon and California.",
        "type": "nospeaker"
      }
    ]
  },
  "pancakeWashingtonState": {
    "type": "comic",
    "background": "washington-state",
    "previousScene": "pancakeNorthAmerica",
    "nextScene": "beginningScene",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "This is Washington state. The area circled in red is where we will be exploring and meeting new friends!",
        "type": "nospeaker"
      }
    ]
  },
  "beginningScene": {
    "type": "comic",
    "background": "beige",
    "previousScene": "pancakeWashingtonState",
    "nextScene": "shawnIntro",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-bowl",
        "x": "15",
        "y": "30",
        "size": "10",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Today, we will be exploring several different ocean environments, starting with this beach! We’re on the beach of the Pacific Ocean, in Washington.",
        "type": "right"
      },
      {
        "speaker": "",
        "message": "You can explore the beach by using the arrow keys to move around. When an exclamation point appears above a character when you’re near them, click on them to interact!",
        "type": "right"
      }
    ]
  },
  "shawnIntro": {
    "type": "comic",
    "background": "beige",
    "nextScene": {
      "How is life on the beach?": "shawnBeach",
      "What's that thing around your foot?": "shawnTrash"
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hello! I’m Shawn the Seagull. I’m a ring billed seagull.",
        "type": "left",
        "keyword": "ring billed seagull"
      }
    ]
  },
  "shawnBeach": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnIntro",
    "nextScene": "couldntWalk",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "The beach is okay. There are lots of different animals to meet, but I've noticed there's more and more litter on the beach. Nowadays, I prefer to fly over the open ocean.",
        "type": "left"
      }
    ]
  },
  "shawnTrash": {
    "type": "comic",
    "background": "beige",
    "nextScene": "quiz",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Oh this? I don’t really know. I got caught in it a couple of days\nago and its making it hard for me to walk!",
        "type": "left"
      }
    ]
  },
  "shawnQuestion": {
    "type": "comic",
    "background": "beige",
    "nextScene": {
      "How is life on the beach?": "shawnBeach",
      "Would you like help removing the soda can rings from your leg?": "trashHelp"
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It's gotten really tangled up that I can't get out of it easily.",
        "type": "left"
      }
    ]
  },
  "trashHelp": {
    "type": "comic",
    "background": "beige",
    "previousScene": "shawnQuestion",
    "nextScene": "clickSodaCanRings",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Yes please!",
        "type": "left"
      }
    ]
  },
  "trashHelpContinued": {
    "type": "comic",
    "background": "beige",
    "previousScene": "trashHelp",
    "nextScene": {
      "How is life on the beach?": "shawnBeach",
      "What were you doing when you couldn't walk as well?": "couldntWalk"
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "050",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you so much! I kind finally walk around comfortably\nagain!",
        "type": "left"
      }
    ]
  },
  "couldntWalk": {
    "type": "comic",
    "background": "beige",
    "previousScene": [
      "shawnBeach",
      "trashHelpContinued"
    ],
    "nextScene": "trashisland",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Since it was hard to walk, I would fly over the open ocean\ninstead!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      },
      null,
      null
    ]
  },
  "couldntWalkContinued": {
    "type": "comic",
    "background": "beige",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": "0",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "shawn-seagull",
        "x": "15",
        "y": "30",
        "size": "13",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  },
  "trashIsland": {
    "type": "comic",
    "background": "trash-island",
    "nextScene": "testScene2",
    "baseFrame": [],
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Trash islands are a collection of trash floating in the ocean. They exit because most of the trash is not biodegradable, they just break into smaller pieces.",
        "type": "nospeaker"
      }
    ]
  },
  "lifeOnBeach": {
    "type": "comic",
    "background": "beige",
    "nextScene": "trashisland",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "The beach is okay. There are lots of different animals to meet,\nbut I’ve noticed there’s more and more litter on the beach. \nNowadays, I prefer to fly over the open ocean.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "When I fly over the ocean, I’ve been seeing big trash islands.\nIt is just lots and lots of trash, all floating together. ",
        "type": "left"
      }
    ]
  },
  "animalImpact-trash": {
    "type": "comic",
    "background": "beige",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": "50",
        "flipX": false
      }
    ],
    "frames": [
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Obviously people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I’ve had this thing stuck around my foot for a couple of days\nnow and its making it hard to walk!",
        "type": "left"
      }
    ]
  },
  "helpPickUpTrash": {
    "type": "comic",
    "background": "beige",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "shawn-sad",
        "x": "15",
        "y": "30",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "It would really help if you could pick up the trash that’s\non the beach right now!",
        "type": "left"
      }
    ]
  }
}

export default LEVEL2;
