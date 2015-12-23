﻿{
    "frame": {
        "width": 32,
        "height": 32,
        "rows": 3,
        "cols": 6
    },
    "animations" : {
        "stop": {
            "frames": [0],
            "next": "stop",
            "frequency": 1
        },
        "move": {
            "frames": [1,2,3],
            "next": "move",
            "frequency": 5
        },
        "down": {
            "frames":[4,5],
            "frequency": 23
        },
        "moveL": {
            "frames": [12,13,14,13],
            "next": "moveL",
            "frequency": 5
        },
        "moveR": {
            "frames": [15,16,17,16],
            "next": "moveR",
            "frequency": 5
        },
        "moveD": {
            "frames": [6,7,8,7],
            "next": "moveD",
            "frequency": 5
        },
        "moveU": {
            "frames": [9,10,11,10],
            "next": "moveU",
            "frequency": 5
        }
    }
}
    
