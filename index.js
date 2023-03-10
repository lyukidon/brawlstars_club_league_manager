const getClubMembers = require('./utils/clubMembers');
const getClubLeagueBattleLog = require('./utils/clubMembersBattleLog')

const getData = async (clubTag, developmentToken) => {
    const clubMembers = await getClubMembers(clubTag, developmentToken)
    const clubMembersBattleLog = await getClubLeagueBattleLog(clubMembers, developmentToken);
}


module.exports = getData