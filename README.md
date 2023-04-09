# brawlstars_clubleague_battlelog

Get BrawlStars Club League BattleLog

## Install

```sh
npm install brawlstars_clubleague_battlelog
```

## Usage

```js
getData(clubTag, development Token)
// clubTag : string
// development Token : string
```
- Get Token from [Brawl Stars API](https://developer.brawlstars.com/#/)

## Data Form
- 23.04.06
    - Add `clubTag` data

```js
[
    {
        "clubTag":"#000000000",
        "tag":String,
        "name":String,
        "nameColor":String,
        "role":String,
        "trophies":Number,
        "clubLeagueLog: [
            {
                "battleTime": String,
                "event":{
                    "id": number,
                    "mode": String,
                    "map": String
                },
                "battle":{
                    "mode": String,
                    "type": String,
                    "result": String,
                    "duration": number,
                    "trophyChange": number,
                    "starPlayer": {
                        "tag": String,
                        "name": String,
                        "brawler": {
                            "id": number,
                            "name": String,
                            "power": number,
                            "trophies": number
                        }
                    },
                    "teams": [
                        [
                            {
                                "tag": String,
                                "name": String,
                                "brawler": {
                                    "id": number,
                                    "name": String,
                                    "power": number,
                                    "trophies": number
                                }
                            },
                            ...
                        ],
                        [...]
                    ]
                }
            }
        ]
    }
]
```
