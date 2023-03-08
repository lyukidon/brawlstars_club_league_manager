const getBattleLog = async (playerTag, token) => {
    try{
        const res = await fetch(`https://api.brawlstars.com/v1/players/${encodeURIComponent(playerTag)}/battlelog`, {
            method: 'GET',
            headers: {
                Authorization : `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        
        });
        const data = await res.json();
        return data
    }catch(error){
        console.log(error)
    }
}

module.exports = getBattleLog;