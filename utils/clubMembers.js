const clubMembers = async (clubTag, token) => {
    try{
        const res = await fetch(`https://api.brawlstars.com/v1/clubs/${encodeURIComponent(clubTag)}/members`,{
            method: 'GET',
            headers: {
                Authorization : `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();
        return data.items;
    }catch (err){
        console.error(err)
    }
}

module.exports = clubMembers;