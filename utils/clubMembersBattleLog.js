const getBattleLog = require('./battleLog');
const getClubLeagueLog = require('./clubLeagueLog');

const clubMembersBattleLog = async (clubMembers,clubTag, token) => {
    const data = await clubMembers;
    try{
        const membersClubLog = await Promise.all(
                data.map( async (member) => {
                    const battleLog = await getBattleLog(member.tag, token);
                    const clubLeagueLog = await getClubLeagueLog(battleLog);
                    return {
                        clubTag
                        ...member,
                        clubLeagueLog,
                    }
                })
            )
            return membersClubLog
    }catch(err){
        console.error(err)
    }
}

module.exports = clubMembersBattleLog;