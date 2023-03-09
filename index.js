const getClubMembers = require('./utils/clubMembers');
const getClubLeagueBattleLog = require('./utils/clubMembersBattleLog')
const createFile = require('./utils/createFile')

const token = require('./token/token');

const getData = async (clubTag, developmentToken) => {
    const clubMembers = await getClubMembers(clubTag, token)
    const clubMembersBattleLog = await getClubLeagueBattleLog(clubMembers, token);
}


module.exports = getData