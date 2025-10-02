import { person, person1, person2, person3, person4, person5 } from "../assets/images";

export const profileData = {
  username: "heba.dev",
  name: "Heba Saber",
  profilePic: person,
    bio: "Web developer and designer. Love to create beautiful and functional websites.",
    followers: 1200,
    following: 300,
    adsCount: 45,
  stories: [
    {
      id: 1,
      date: "2025-09-15",
      images: [
        {
          src: person,
          duration: 4000
        },
        {
          src: person1,
          duration: 4000
        },
        {
          src: person2,
          duration: 4000
        }
      ]
    },
    {
      id: 2,
      date: "2025-09-16",
      images: [
        {
          src: person4,
          duration: 5000
        },
        {
          src: person3,
          duration: 5000
        }
      ]
    },
    {
      id: 3,
      date: "2025-09-17",
      images: [
        {
          src: person5,
          duration: 4000
        },
        {
          src: person1,
          duration: 4000
        },
        {
          src: person2,
          duration: 4000
        },
        {
          src: person3,
          duration: 4000
        }
      ]
    },
    {
      id: 4,
      date: "2025-09-20",
      images: [
        {
          src: person2,
          duration: 4000
        },
        {
          src: person5,
          duration: 4000
        },
        {
          src: person1,
          duration: 4000
        },
        {
          src: person3,
          duration: 4000
        },
         {
          src: person,
          duration: 4000
        }
      ]
    }
  ]
};