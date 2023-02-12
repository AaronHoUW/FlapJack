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
    "nextScene": "testScene2",
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
        "y": "30",
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
    ]
  },
  "sallyTalkingA": {
    "type": "comic",
    "background": "sea",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": 54.6,
        "y": -1,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "sally-salmon",
        "x": 10.000000000000002,
        "y": 10.500000000000002,
        "size": "20",
        "flipX": true
      }
    ],
    "frames": []
  }
}

export default LEVEL1;
