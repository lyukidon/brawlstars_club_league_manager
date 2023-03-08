const clubLeagueLog = async ( battleLog ) => {
    const data = await battleLog
    const clubBattle = data.items.filter( (c) => {
        if (c.battle.type === "ranked"){
            if (c.battle.result === 'defeat'){
                if (c.battle.trophyChange === 1 || c.battle.trophyChange === 2){
                    return c
                }
            } else if (c.battle.result === 'draw'){
                if (c.battle.trophyChange === 2 || c.battle.trophyChange === 3){
                    return c
                }
            } else if (c.battle.result === 'victory'){
                if (c.battle.trophyChange === 3 || c.battle.trophyChange === 4){
                    return c
                }
            }
        }else if(c.battle.type === 'teamRanked'){
            if (c.battle.result === 'defeat'){
                if (c.battle.trophyChange === 3 || c.battle.trophyChange === 5){
                    return c
                }
            } else if (c.battle.result === 'victory'){
                if (c.battle.trophyChange === 7 || c.battle.trophyChange === 9){
                    return c
                }
            }
        }
    })
    return clubBattle;
}

module.exports = clubLeagueLog