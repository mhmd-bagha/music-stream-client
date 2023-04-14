import Image from "next/image";

const RecentPlayed = () => {
    const recentPlayedSong = [
        {name: 'Blank Space', image: '/songs/song.jpg', singer: 'Taylor Swift', played_time: '12min'},
        {name: 'Bad Hobbits', image: '/songs/song.jpg', singer: 'Ed Sheeran', played_time: '30min'},
        {name: 'MONEY', image: '/songs/song.jpg', singer: 'Lisa', played_time: '2hr'},
        {name: 'I See Love', image: '/songs/song.jpg', singer: 'Jonas Blue', played_time: '4hr'},
        {name: 'Side Effects', image: '/songs/song.jpg', singer: 'The Chainsmokers', played_time: '4hr'},
        {name: 'Hora Loca', image: '/songs/song.jpg', singer: 'The Change', played_time: '5hr'},
    ]

    return (
        <>
            <div className="flex justify-between items-center mt-14 gap-5">
                <p className="color-gunmetal text-lg font-bold lg:text-sm 2xl:text-lg truncate">Recent Played</p>
                <p className="text-sm color-gunmetal lg:text-xs 2xl:text-sm truncate">See All</p>
            </div>
            {/* songs */}
            <div className="mt-6">
                {/* song */}
                {recentPlayedSong.map((song, index) => (
                    <div className="flex justify-between items-center py-2" key={index}>
                        {/* image and name */}
                        <div className="flex justify-center items-center cursor-pointer">
                            <Image src={song.image} alt={song.name} className="w-12 h-12 rounded" width={200}
                                   height={200}/>
                            <div className="pl-4">
                                <p className="text-sm color-gunmetal">{song.name}</p>
                                <p className="color-crayola text-xs">{song.singer}</p>
                            </div>
                        </div>
                        {/* time */}
                        <p className="text-xs color-gunmetal">{song.played_time} ago</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RecentPlayed