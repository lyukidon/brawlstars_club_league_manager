const getClubMembers = require('./utils/clubMembers');
const getClubLeagueBattleLog = require('./utils/clubMembersBattleLog')
const createFile = require('./utils/createFile')

const token = require('./token/token');

const clubMembers = getClubMembers('#2099yjyyc', token)
const clubMembersBattleLog = getClubLeagueBattleLog(clubMembers, token);

createFile(clubMembersBattleLog);