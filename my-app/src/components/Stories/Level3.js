const LEVEL3 = 
{
  "pancakeIntro": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": undefined,
    "nextScene": "testScene2",
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
        "x": "15",
        "y": "40",
        "size": "10",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hi again! We’re deeper in the ocean now! There are a whole lot of weird and mysterious creatures down here. This is generally where I hang out!",
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
      },
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
    "nextScene": "pancakeAfterMap",
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
  "pancakeAfterMap": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": "pancakeWashingtonState",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "15",
        "y": "40",
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
        "message": "The biggest creature down here is the Killer Whale. My friend Wendy is a Killer Whale. I wonder if you can find her?",
        "type": "left"
      }
    ]
  },
  "wendyIntro": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "60",
        "y": "020",
        "size": "30",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      }
    ],
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hi! I’m Wendy the Whale. I’ve heard a lot about you from Pancake! It seems you’ve been on quite the adventure so far.  ",
        "type": "left"
      }
    ]
  },
  "wendyAPath": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "60",
        "y": "20",
        "size": "30",
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
        "message": "Yes actually! Since I’m so big, it takes a lot of food to fuel me so that I can swim and have energy. Sometimes it’s hard to find enough food!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I mostly eat fish, squid, seals, and sometimes even birds! Recently, I’ve been eating these random things floating around in the water to fill me up. ",
        "type": "left"
      }
    ]
  },
  "wendyAPathAfterQuiz": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "60",
        "y": "20",
        "size": "30",
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
        "message": "Some of my other friends in our pod have been doing the same thing and I think it might be what has been making us all feel sick.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "It’s really starting to weigh me down... And my stomach hurts!",
        "type": "left"
      }
    ]
  },
  "wendyBPath": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "60",
        "y": "020",
        "size": "30",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
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
        "message": "Fun fact, I’m technically not even a whale. Although some people call us Killer Whales, my formal name is an Orca, and I’m closely related to dolphins!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Similar to dolphins, us Orcas tend to swim in pods, so me and my friends get to explore the ocean together!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Unlike dolphins, I’m one of the biggest animals down here in the ocean. I weigh 7,000 pounds!",
        "type": "left"
      }
    ]
  },
  "WendyBPathAfterQuiz1": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "60",
        "y": "30",
        "size": "30",
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
        "message": "Since I’m so big, it takes a lot of food to fuel me so that I can swim and have energy. Sometimes it’s hard to find enough food!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I mostly eat fish, squid, seals, and sometimes even birds! Recently, I’ve been eating these random things floating around in the water to fill me up. ",
        "type": "left"
      }
    ]
  },
  "WendyBPathAfterQuiz2": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "070",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "60",
        "y": "20",
        "size": "30",
        "flipX": false
      }
    ],
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "It’s really starting to weigh me down... And my stomach hurts!",
        "type": "left"
      }
    ]
  },
  "wendyEnd": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "testScene2",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "60",
        "y": "20",
        "size": "030",
        "flipX": false
      }
    ],
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Do you think you could help me? Maybe you can swim into my stomach and help to remove all the bad stuff that I ate!",
        "type": "left"
      }
    ]
  }
}

export default LEVEL3;