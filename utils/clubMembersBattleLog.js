const getBattleLog = require('./battleLog');
const getClubLeagueLog = require('./clubLeagueLog');

// {
//     tag: '#8QL9P9R8Y',
//     name: '원딜몬',
//     nameColor: '0xffffffff',
//     role: 'member',
//     trophies: 3104,
//     icon: [Object]
//   }

// add club-league-battle-Log to above obj
const clubMembersBattleLog = async (clubMembers, token) => {
    const data = await clubMembers;
    try{
        const membersClubLog = await Promise.all(
                data.map( member => {
                    const battleLog = getBattleLog(member.tag, token);
                    const clubLeagueLog = getClubLeagueLog(battleLog);
                    return {
                        ...member,
                        clubLeagueLog,
                    }
                })
            )
            console.dir(membersClubLog, {depth:null})
            return membersClubLog
    }catch(err){
        console.error(err)
    }
}

module.exports = clubMembersBattleLog;