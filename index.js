const getClubMembers = require('./utils/clubMembers');
const getClubLeagueBattleLog = require('./utils/clubMembersBattleLog')

const getData = async (clubTag, developmentToken) => {
    const clubMembers = await getClubMembers(clubTag, token)
    const clubMembersBattleLog = await getClubLeagueBattleLog(clubMembers, token);
}


module.exports = getData