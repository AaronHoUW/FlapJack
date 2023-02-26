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
    "nextScene": "pancakeMap",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "user-placeholder",
          "x": 49.900000000000006,
          "y": -0.8999999999999986,
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
          "x": 49.900000000000006,
          "y": -0.8999999999999986,
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
        "message": "Hello there! I’m Pancake the Flapjack Octopus. \nPress the arrow in the bottom right to keep going!",
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
    "nextScene": {
      "Where did you go?": "sallyTalkingA",
      "How has the Elwha Dam effected you?": "sallyTalkingB"
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
        "message": "Hi! I’m Sally the Salmon! I’m a Chum Salmon.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I migrated to the ocean two years ago.",
        "type": "left"
      }
    ]
  },
  "sallyTalkingA": {
    "type": "comic",
    "background": "sea",
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
        "type": "left"
      },
      {
        "speaker": "",
        "message": "My parents were not able to swim as far up the Elwha because the dam was in the way.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Now that I am back, I have noticed that things are changing in the ocean too. There are more nets floating around and  less of my friends have returned from spawning.",
        "type": "left"
      }
    ]
  },
  "pancakeMap": {
    "type": "comic",
    "background": "elwha-estuary",
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
        "type": "nospeaker"
      }
    ]
  },
  "pancakeDam": {
    "type": "comic",
    "background": "dam",
    "nextScene": "sallyTalking",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "pancake-flapjack-octopus",
          "x": "10",
          "y": "55",
          "size": "10",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "The Elwha river used to have a big dam in it, but that got taken down several years ago. The dam blocked a lot of salmon from returning to their homes to lay eggs. Lets go find a salmon to talk to! ",
        "type": "nospeaker"
      }
    ]
  },
  "sallyTalkingAContinued": {
    "type": "comic",
    "background": "sea",
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
      }
    ],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "sally-salmon",
          "x": "25",
          "y": "20",
          "size": "15",
          "flipX": true
        }
      ],
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
    "nextScene": "sallyNetCutscene",
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
        "x": "55",
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
      {
        "speaker": "",
        "message": "But I was able to swim really far up the river on an adventure. I also laid eggs! Its called spawning.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Now that I am back, I have noticed that things are changing in the ocean too. There are more nets floating around and  less of my friends have returned from spawning.",
        "type": "left"
      }
    ]
  },
  "postGame": {
    "type": "comic",
    "background": "sea",
    "nextScene": "testScene2",
    "baseFrame": [
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
      [
        {
          "type": "sprite",
          "image": "sally-salmon",
          "x": "15",
          "y": "40",
          "size": "15",
          "flipX": true
        }
      ],
      [
        {
          "type": "sprite",
          "image": "pancake-flapjack-octopus",
          "x": "20",
          "y": "40",
          "size": "10",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Wow! Thank you so much for helping to remove all of the dangerous ghost nets near me and my friends!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Great job today! You really helped make the ocean more safe for the animals living here.",
        "type": "left"
      }
    ]
  }
}

export default LEVEL1;
