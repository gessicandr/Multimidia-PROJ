export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
    title: string;
}

const videos: Video[] = [
    {
        videoURL: "video/video1.mp4",
        imageURL: "/image/imagem1.jpg",
        description: "Primeiro episodio da primeira temporada de Attack on Titan",
        title: "serie Attack on Titan"
    },
    {
        // video 2
        videoURL: "video/video2.mp4",
        imageURL: "/image/imagem2.jpeg",
        description: " Primeiro episodio da primeira temporada de Attack on Titan",
        title: "serie Attack on Titan"
    },

    {   //video 3
        videoURL: "video/video3.mp4",
        imageURL: "/image/imagem3.jpg",
        description: "Primeiro episodio da primeira temporada de Attack on Titan",
        title: "serie Attack on Titan"
    }
    ,
    {  //video 4
        videoURL: "video/video4.mp4",
        imageURL:"/image/imagem4.jpeg",
        description: "Primeiro episodio da primeira temporada de Attack on Titan",
        title: "serie Attack on Titan",
    }
   
]


export default videos;
