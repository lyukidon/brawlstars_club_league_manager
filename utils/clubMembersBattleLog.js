const getBattleLog = require('./battleLog');
const getClubLeagueLog = require('./clubLeagueLog');

const clubMembersBattleLog = async (clubMembers, token) => {
    const data = await clubMembers;
    try{
        const membersClubLog = await Promise.all(
                data.map( async (member) => {
                    const battleLog = await getBattleLog(member.tag, token);
                    const clubLeagueLog = await getClubLeagueLog(battleLog);
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