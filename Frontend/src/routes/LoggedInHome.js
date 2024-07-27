import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Embark on a serene journey with our Peaceful Piano playlist. Immerse yourself in a curated selection of beautiful piano compositions and melodic notes that invite you to unwind and discover moments of tranquility. Each piece is a musical exploration, fostering a serene atmosphere perfect for relaxation, introspection, and quiet contemplation. Whether during work, study sessions, or moments of leisure, this playlist offers a timeless collection of masterful piano music.",
    imgUrl: "https://millersmusic.co.uk/cdn/shop/articles/Blog_Image_40.png?v=1681389491",
  },
  {
    title: "Deep Focus",
    description: "Embark on a journey of deep concentration with our Deep Focus playlist. Immerse yourself in a curated selection of ambient sounds and instrumental compositions designed to enhance your cognitive abilities and foster intense focus. Each track is a sonic journey that encourages clarity of thought and heightened productivity, making it the perfect companion for deep work sessions and moments of intense concentration.",
    imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  },
  {
    title: "Instrumental Study",
    description: "Elevate your study sessions with our Instrumental Study playlist. Dive into a world of instrumental excellence, where the absence of lyrics allows you to fully concentrate on your academic pursuits. From classical masterpieces to modern instrumental arrangements, this collection provides a tranquil backdrop for focused learning, helping you reach new heights of academic achievement.",
    imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Focus Flow",
    description: "Experience the rhythmic energy of our Focus Flow playlist. Curated to enhance your workflow, this collection blends ambient beats and uplifting rhythms to create a dynamic atmosphere for productivity. Let the seamless transitions and engaging beats guide you through tasks, whether you're working on a project, tackling assignments, or simply seeking a vibrant backdrop for your creative endeavors.",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

const SymphonyPlaylistsCardData = [
  {
    title: "Christmas Mix",
    description: "Celebrate the joyous spirit of the season with our Christmas Mix playlist. Immerse yourself in a harmonious blend of festive tunes that capture the magic and warmth of Christmas. From classic carols to contemporary holiday hits, this curated selection will fill your space with the enchanting melodies that define the holiday season. Let the cheerful notes and heartwarming lyrics create a festive ambiance, making every moment merry and bright.",
    imgUrl: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Top 100 Worldwide",
    description: "Discover the pulse of global music with our Top 100 Worldwide playlist, a dynamic and eclectic collection that transcends borders and genres. Immerse yourself in a sonic journey that brings together the hottest tracks from around the world, spanning diverse cultures and musical landscapes. From chart-topping pop hits to infectious beats that dominate international airwaves, this playlist is a curated showcase of the most influential and trendsetting songs.",
    imgUrl: "https://images-platform.99static.com//_QOprBjs_25wk86CTmSatRFl95g=/0x0:1636x1636/fit-in/500x500/99designs-contests-attachments/81/81413/attachment_81413912",
  },
  {
    title: "Workout Mix",
    description: "Ignite your workout sessions with our high-octane Workout Mix playlist. Immerse yourself in a pulse-pounding collection of tracks meticulously curated to fuel your energy and elevate your exercise routine. From heart-pumping beats to adrenaline-fueled anthems, this playlist is designed to keep you motivated and focused throughout every squat, sprint, and lift. Feel the rhythmic surge as each track propels you to push your limits and achieve your fitness goals.",
    imgUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sounds of Nature",
    description: "Escape the chaos of daily life with our Sounds of Nature playlist, where the gentle rustle of leaves, rhythmic raindrops, and melodic bird songs form a symphony of tranquility. Each track is a serene composition, capturing the essence of idyllic landscapes to create a calming atmosphere. Whether seeking moments of relaxation, mindfulness, or a peaceful backdrop for work or study, this playlist offers a retreat to the rejuvenating sounds of nature.",
    imgUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const IndiaPlaylistsCardData = [
  {
    title: "Best of Bollywood",
    description: "Embark on a journey of deep concentration with our Deep Focus playlist. Immerse yourself in a curated selection of ambient sounds and instrumental compositions designed to enhance your cognitive abilities and foster intense focus. Each track is a sonic journey that encourages clarity of thought and heightened productivity, making it the perfect companion for deep work sessions and moments of intense concentration.",
    imgUrl: "https://png.pngtree.com/template/20220424/ourmid/pngtree-bollywood-cinema-cinematography-banner-logo-brochure-image_1179540.jpg",
  },
  {
    title: "Devotional Harmony",
    description: "Elevate your spiritual experience with Devotional Harmony Haven, a playlist dedicated to devotional and religious music from India. From devotional bhajans to soulful hymns, this collection brings together diverse religious traditions, offering a musical journey that transcends boundaries and fosters a sense of divine connection.",
    imgUrl: "https://thumbs.dreamstime.com/b/silhouette-woman-praying-hands-faith-religion-belief-god-morning-sunrise-background-namaste-namaskar-166730045.jpg",
  },
  {
    title: "Bhangra Beats",
    description: "Get ready to dance with Bhangra Beats Bash, a playlist that celebrates the energetic and infectious beats of Punjabi Bhangra music. Featuring high-energy tracks and iconic Punjabi folk tunes, this playlist is your go-to soundtrack for lively celebrations, weddings, and joyous moments that are synonymous with the vibrant spirit of Bhangra.",
    imgUrl: "https://www.shutterstock.com/image-vector/vector-cartoon-illustration-punjabi-dhol-600nw-1666021117.jpg",
  },
  {
    title: "Garba Grooves",
    description: "Join the festive celebration with Garba Grooves Gala, a playlist dedicated to the spirited and rhythmic music of Garba and Dandiya. Immerse yourself in the vibrant beats and lively tunes that define the cultural festivities of Gujarat, creating an atmosphere of joy and communal celebration.",
    imgUrl: "https://cdni.iconscout.com/illustration/premium/thumb/girl-playing-garba-6462108-5332028.png?f=webp",
  },
];

// Array of links corresponding to each card
const cardLinks = [
    "/playlist/657382f4fc032cbeb272461b",
    "/playlist/6573855afc032cbeb27246de",
    "/playlist/65735b05f641825dc10ce90d",
    "/playlist/65735b13f641825dc10ce910",
    "/playlist/65735b27f641825dc10ce916",
    "/playlist/65735b3cf641825dc10ce919",
    "/playlist/65735b4ef641825dc10ce91c",
    "/playlist/65735b7df641825dc10ce922",
    "/playlist/65735b7df641825dc10ce922",
    "/playlist/65735ba6f641825dc10ce92b",
    "/playlist/65735bb6f641825dc10ce92e",
    "/playlist/65735bc5f641825dc10ce931",
  ];
const Home = () => {
  return (
    <LoggedInContainer curActiveScreen="home">
      <PlaylistView titleText="Focus" cardsData={focusCardsData} cardLinks={cardLinks.slice(0, 4)} />
      <PlaylistView titleText="Symphony Playlists" cardsData={SymphonyPlaylistsCardData} cardLinks={cardLinks.slice(4, 8)} />
      <PlaylistView titleText="Sounds from India" cardsData={IndiaPlaylistsCardData} cardLinks={cardLinks.slice(8, 12)} />
    </LoggedInContainer>
  );
};

const PlaylistView = ({ titleText, cardsData, cardLinks }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardsData.map((item, index) => (
          <Card key={index} {...item} link={cardLinks[index]} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl, link }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`} onClick={handleCardClick}>
      <div className="pb-4 pt-2 h-48 overflow-hidden">
        <img className="w-full h-full object-cover rounded-md" src={imgUrl} alt="Focus Image" />
      </div>
      <div className="text-white font-semibold py-3 hover:underline cursor-pointer">{title}</div>
      {expanded && <div className="text-gray-500 text-sm">{description}</div>}
      {expanded && (
        <div className="mt-2">
          <Link to={link} className="text-green-500 hover:underline">
            Click to know more
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
