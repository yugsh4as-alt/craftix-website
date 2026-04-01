// Craftix Clan - Minecraft Server Status Fetcher
async function updateClanStatus() {
    try {
        const response = await fetch('https://api.mcstatus.io/v2/status/java/play.craftix.net');
        const data = await response.json();
        console.log('Craftix Server Status:', data.online ? 'Online' : 'Offline');
        document.getElementById('server-ip').innerText = data.host;
    } catch (error) {
        console.error('Error fetching clan data:', error);
    }
}
updateClanStatus();
