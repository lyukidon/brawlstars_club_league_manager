const fs = require('fs');

const createFile = async (clubLeagueLog) => {
    const data = await clubLeagueLog;
    fs.writeFile('clubLeageLog.json', clubLeagueLog, (err)=>{
        if (err) {
            throw err;
        } else {
            console.log('create json file')
        }
    })
}

module.exports = createFile;