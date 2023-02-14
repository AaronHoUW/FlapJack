const LEVEL1 = {
  "testScene": {
    "type": "comic",
    "background": "sea",
    "nextScene": "testScene2",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "pancake-flapjack-octopus",
          "x": 0,
          "y": 0,
          "size": 50,
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "user-placeholder",
          "x": 55.4,
          "y": -6.799999999999999,
          "size": 50,
          "flipX": false
        }
      ]
    ]
  },
  "pancakeIntro": {
    "type": "comic",
    "background": "sea",
    "nextScene": "pancakemap",
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
          "x": 8.600000000000003,
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
          "x": 8.600000000000003,
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
    "nextScene": "testScene2",
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
        "x": 55.099999999999994,
        "y": -3.1999999999999993,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [
      [],
      [],
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "",
        "type": "left"
      }
    ]
  },
  "sallyTalkingA": {
    "type": "comic",
    "background": "sea",
    "nextScene": "sallynetcutscene",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "55.6",
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
        "message": "",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "My parents weren’t able to swim as far up the Elwha because the dam was in the way.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "",
        "type": "left"
      }
    ]
  },
  "pancakeMap": {
    "type": "comic",
    "background": "elwha-estuary",
    "nextScene": "pancakedam",
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
        "message": "",
        "type": "nospeaker"
      }
    ]
  },
  "pancakeDam": {
    "type": "comic",
    "background": "dam",
    "nextScene": "testScene2",
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
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "54.6",
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
        "message": "Because of this, I’m scared of getting caught by a net! I wonder if you could help clean up the nets?",
        "type": "left"
      }
    ]
  },
  "sallyNetCutScene": {
    "type": "comic",
    "background": "sea",
    "nextScene": "sallytalkingacontinued",
    "baseFrame": [],
    "frames": []
  },
  "sallyTalkingB": {
    "type": "comic",
    "background": "sea",
    "nextScene": "sallynetcutscene",
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
        "message": "My parents weren’t able to swim very far up the Elwha because the dam was in the way.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "",
        "type": "left"
      }
    ]
  }
}

export default LEVEL1;
