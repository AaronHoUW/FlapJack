const LEVEL1 = {
  "testScene": {
    "type": "comic",
    "background": "beige",
    "nextScene": "testScene2",
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
    "frames": [
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Today we’ll be exploring several different ocean environments, starting with this beach! We’re on the beach of the Pacific Ocean, in Washington.",
        "type": "right"
      },
      {
        "speaker": "",
        "message": "You can explore the beach by using the arrow keys to move around. When an exclamation point appears above a character when you’re near them, click on them to interact!",
        "type": "right"
      }
    ]
  },
  "beginningScene": {
    "type": "comic",
    "background": "sea",
    "nextScene": "testScene2",
    "baseFrame": [],
    "frames": []
  },
  "shawnIntro": {
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
        "message": "Hello! I’m Shawn the Seagull. I’m a ring billed seagull.",
        "type": "left"
      }
    ]
  },
  "shawnTrash": {
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
        "message": "Oh this? I don’t really know. I got caught in it a couple of days\nago and its making it hard for me to walk!",
        "type": "left"
      }
    ]
  },
  "trashHelp": {
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
        "message": "Yes please!",
        "type": "left"
      }
    ]
  },
  "trashHelpContinued": {
    "type": "comic",
    "background": "beige",
    "nextScene": "testScene2",
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
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you so much! I kind finally walk around comfortable\nagain!",
        "type": "left"
      }
    ]
  },
  "couldn'tWalk": {
    "type": "comic",
    "background": "beige",
    "nextScene": "testScene2",
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
      }
    ]
  },
  "couldn'tWalkContinued": {
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
        "message": "Do you think you could help me and my friends out by\ncleaning up some of the trash on our beach?",
        "type": "left"
      }
    ]
  }
}

export default LEVEL1;