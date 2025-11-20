import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard.tsx'
import type {Song} from '../interfaces/SongInterface.tsx'


interface Props {
    songs: Song[];
}

export default function SongList( { songs }: Props ) {
    return (
        <div className='p-6'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {songs.map(song => (
                <SongCard key={song.id} song={song} />
            ))}
        </div>
        </div>
    )
}