const test = {
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
        "nextScene": "shawnQuestion",
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
    "shawnQuestion2": {
        "type": "comic",
        "background": "beige",
        "previousScene": undefined,
        "nextScene": {
            "Would you like help removing the soda can rings from your leg?": "trashHelp",
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
    "shawnQuestion": {
        "type": "comic",
        "background": "beige",
        "previousScene": undefined,
        "nextScene": {
            "How is life on the beach?": "shawnBeach",
            "Would you like help removing the soda can rings from your leg?": "trashHelp",
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
        "nextScene": "trashHelpContinued", // clickSodaCanRings
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
            "What were you doing when you couldn't walk as well?": "couldntWalk",
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
                "message": "Thank you so much! I can finally walk around comfortably\nagain!",
                "type": "left"
            }
        ]
    },
    "couldntWalk": {
        "type": "comic",
        "background": "beige",
        "previousScene": ["shawnBeach", "trashHelpContinued"],
        "nextScene": "trashIsland",
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
        "frames": [],
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
    "couldntWalkContinued": {
        "type": "comic",
        "background": "beige",
        "nextScene": "flapGuide",
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
        "previousScene": "lifeOnBeach",
        "nextScene": "shawnCardGame",
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
                "message": "Trash islands are a collection of trash floating in the ocean. They exit because most of the trash is not biodegradable, they just break into smaller pieces.",
                "type": "nospeaker"
            }
        ]
    },
    "lifeOnBeach": {
        "type": "comic",
        "background": "beige",
        "previousScene": "shawnIntro",
        "nextScene": "trashIsland",
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
    "shawnCardGame": {
        "type": "comic",
        "background": "sea",
        "previousScene": "trashIsland",
        "nextScene": "animalImpactTrash",
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
                "message": "Can you help to identify the images that have trash islands in them? Click on the images you think have trash islands in them!",
                "type": "nospeaker",
            }
        ]
    },
    "animalImpactTrash": {
        "type": "comic",
        "background": "beige",
        "previousScene": "shawnCardGame",
        "nextScene": "shawnQuestion2", // quiz1
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
        "frames": [],
        "dialogue": [
            {
                "speaker": "",
                "message": "Obviously, people are just throwing a lot of garbage in and\naround the ocean, and not thinking about how it impacts us\nanimals.",
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