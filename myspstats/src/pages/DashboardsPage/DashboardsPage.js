import React from "react";
import { useSpotifyPlaylistContext } from '../../context/SpotifyPlaylistContext';
import PlaylistItem from '../../components/PlaylistItem';
import SpotifyStat from '../../components/SpotifyStat';
import './DashboardsPage.css'

const DashboardsPage = () =>  {
    const { playlists, songStats, loading, error } = useSpotifyPlaylistContext();

    // const sortedBy2Year = [...playlists].sort((a,b) => 
    //     (songStats[b.id]?.twoYearPercentage ?? 0) - (songStats[a.id]?.twoYearPercentage ?? 0)
    // );

    // const sortedBy6Month = [...playlists].sort((a,b) => 
    //     (songStats[b.id]?.sixMonthPercentage ?? 0) - (songStats[a.id]?.sixMonthPercentage ?? 0)
    // );

    if (loading) return <p>Spotify Playlist Data is loading...</p>
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="dashboard">
            <h1>Spotify Playlists Stats</h1>
            {playlists.length === 0 ? (
                <p>No playlists found.</p>
            ) : (
                playlists.map((playlist) => (
                    <div className="Dashboard">
                        <PlaylistItem key={playlist.id} playlist={playlist} />
                        {songStats[playlist.id] ? (
                            <SpotifyStat stats={songStats[playlist.id]} />
                        ) : (
                            <p>No stats available</p>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}

export default DashboardsPage;