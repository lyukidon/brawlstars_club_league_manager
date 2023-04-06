const getClubMembers = require('./utils/clubMembers');
const getClubLeagueBattleLog = require('./utils/clubMembersBattleLog')

const getData = async (clubTag, developmentToken) => {
    try{
        const clubMembers = await getClubMembers(clubTag, developmentToken)
        const clubMembersBattleLog = await getClubLeagueBattleLog(clubMembers, clubTag, developmentToken);
    
        return clubMembersBattleLog;
    }catch(err){
        console.error(err)
    }
}

module.exports = getData;