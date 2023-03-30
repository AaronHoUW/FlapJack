const LEVEL1 = {
  "testScene": {
    "type": "comic",
    "background": "sea",
    "nextScene": "testScene2",
    "baseFrame": [],
    "frames": []
  },
  "pancakeIntro": {
    "type": "comic",
    "background": "sea",
    "previousScene": undefined,
    "nextScene": "pancakeNorthAmerica",
    "baseFrame": [],
    "frames": [
      [
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
      [
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
      ]
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hello there! I’m Pancake the Flapjack Octopus. \nPress the Next button in the bottom right to keep going!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": " I’ll lead you around your adventure today and help you learn about the ocean, sea creatures and the impact humans have on the ocean.",
        "type": "left"
      }
    ]
  },
  "sallyTalking": {
    "type": "comic",
    "background": "sea",
    "nextScene": "sallyTalking2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "sally-salmon",
        "x": "18",
        "y": "40",
        "size": "15",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": 47.099999999999994,
        "y": -3.1999999999999993,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [
      [],
      [
        {
          "type": "sprite",
          "image": "pancake-flapjack-octopus",
          "x": "50",
          "y": "30",
          "size": "8",
          "flipX": false
        }
      ],
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hi! I’m Sally the Salmon! I’m a Chum Salmon.",
        "type": "left",
        "keyword": "Chum Salmon",
      },
    ]
  },
  "sallyTalking2": {
    "type": "comic",
    "background": "sea",
    "previousScene": "sallyTalking",
    "nextScene": {
      "Where did you go?": "sallyTalkingA",
      "How has the Elwha Dam affected you?": "sallyTalkingB"
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "sally-salmon",
        "x": "18",
        "y": "40",
        "size": "15",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": 47.099999999999994,
        "y": -3.1999999999999993,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [
      [],
      [
        {
          "type": "sprite",
          "image": "pancake-flapjack-octopus",
          "x": "50",
          "y": "30",
          "size": "8",
          "flipX": false
        }
      ],
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "I migrated to the ocean two years ago.",
        "type": "left",
        "keyword": "migrated",
      }
    ]
  },
  "sallyTalkingA": {
    "type": "comic",
    "background": "sea",
    "previousScene": "sallyTalking2",
    "nextScene": "sallyNetCutScene",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "47.6",
        "y": "-3",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "sally-salmon",
        "x": "14",
        "y": "40",
        "size": "15",
        "flipX": true
      }
    ],
    "frames": [
      [],
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "I swam up the Elwha river where I was born and laid eggs! It is called spawning.",
        "type": "left",
        "keyword": "spawning",
      },
      {
        "speaker": "",
        "message": "My parents were not able to swim as far up the Elwha because the dam was in the way.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Now that I am back, I have noticed that things are changing in the ocean too. There are more nets floating around and  less of my friends have returned from spawning.",
        "type": "left",
        "keyword": "spawning",
      }
    ]
  },
  "pancakeNorthAmerica": {
    "type": "comic",
    "background": "north-america",
    "previousScene": "pancakeIntro",
    "nextScene": "pancakeWashingtonState",
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
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "This is a map of North America. Right now, we are in the Pacific Ocean, which is west of the United States. We are in an area near Washington State.",
        "type": "nospeaker"
      }
    ]
  },
  "pancakeWashingtonState": {
    "type": "comic",
    "background": "washington-state",
    "previousScene": "pancakeNorthAmerica",
    "nextScene": "pancakeMap",
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
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "This is Washington state. The area circled in red is where we will be exploring and meeting new friends!",
        "type": "nospeaker"
      }
    ]
  },
  "pancakeMap": {
    "type": "comic",
    "background": "elwha-estuary",
    "previousScene": "pancakeWashingtonState",
    "nextScene": "pancakeDam",
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
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Right now we’re in the Elwha estuary, which is connected to the Elwha river in the Olympic National Park. ",
        "type": "nospeaker",
        "keyword": ["Elwha", "estuary"],
      }
    ]
  },
  "pancakeDam": {
    "type": "comic",
    "background": "dam",
    "previousScene": "pancakeMap",
    "nextScene": "pancakeGuide",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "pancake-flapjack-octopus",
          "x": "5",
          "y": "80",
          "size": "010",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "The Elwha river used to have a big dam in it, but that got taken down several years ago. The dam blocked a lot of salmon from returning to their homes to lay eggs. Let's go find a salmon to talk to! ",
        "type": "nospeaker",
        "keyword": "dam",
      }
    ]
  },
  "sallyTalkingAContinued": {
    "type": "comic",
    "background": "sea",
    "previousScene": "sallyNetCutScene",
    "nextScene": "minigame",
    "baseFrame": [
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
        "image": "sally-salmon",
        "x": "14",
        "y": "40",
        "size": "15",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "simon-salmon",
        "x": "25",
        "y": "20",
        "size": "15",
        "flipX": true
      },
    ],
    "frames": [
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "For example, my friend Simon got caught in a net a few weeks ago and lost one of his fins. This has made it hard for him to swim as fast as the rest of us.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Because of this, I am scared of getting caught by a net! I wonder if you could help clean up the nets?",
        "type": "left"
      }
    ]
  },
  "sallyNetCutScene": {
    "type": "comic",
    "background": "net",
    "previousScene": ["sallyTalkingA2", "sallyTalkingB2"],
    "nextScene": "sallyTalkingAContinued",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "pancake-flapjack-octopus",
          "x": "20",
          "y": "50",
          "size": "10",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "These nets that get left behind by fishing companies are called ghost nets. These can be dangerous for fish and other marine life that get caught in them.",
        "type": "nospeaker"
      }
    ]
  },
  "sallyTalkingB": {
    "type": "comic",
    "background": "sea",
    "previousScene": "sallyTalking",
    "nextScene": "sallyTalkingB2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "sally-salmon",
        "x": "14",
        "y": "40",
        "size": "15",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "47.6",
        "y": "-3",
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [
      [],
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "My parents were not able to swim very far up the Elwha because the dam was in the way.",
        "type": "left"
      },
    ]
  },
  "sallyTalkingB2": {
    "type": "comic",
    "background": "sea",
    "previousScene": "sallyTalkingB",
    "nextScene": "sallyNetCutScene",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "sally-salmon",
        "x": "14",
        "y": "40",
        "size": "15",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "47.6",
        "y": "-3",
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [
      [],
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "But I was able to swim really far up the river on an adventure. I also laid eggs! It's called spawning.",
        "type": "left",
        "keyword": "spawning",
      },
      {
        "speaker": "",
        "message": "Now that I am back, I have noticed that things are changing in the ocean too. There are more nets floating around and  less of my friends have returned from spawning.",
        "type": "left",
        "keyword": "spawning",
      }
    ]
  },
  "postGame": {
    "type": "comic",
    "background": "sea",
    "nextScene": "postGame2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "sally-salmon",
        "x": "15",
        "y": "40",
        "size": "15",
        "flipX": true
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Wow! Thank you so much for helping to remove all of the dangerous ghost nets near me and my friends!",
        "type": "left"
      }
    ]
  },
  "postGame2": {
    "type": "comic",
    "background": "sea",
    "previousScene": "postGame2",
    "nextScene": "end",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "20",
        "y": "40",
        "size": "10",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Great job today! You really helped make the ocean more safe for the animals living here.",
        "type": "left"
      }
    ]
  }
}

export default LEVEL1;
