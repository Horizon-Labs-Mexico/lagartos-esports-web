import { Link } from "react-router-dom";
import sponsorBanner from "@/assets/sponsor-banner.png";
import jerseyImage from "@/assets/jersey-2026.png";
import playerPhoto from "@/assets/player-photo.png";

const NavigationCards = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Sponsor Banner */}
      <div className="mb-12">
        <Link to="/xbox-game-pass">
          <img 
            src={sponsorBanner} 
            alt="Sponsors" 
            className="w-full rounded-lg shadow-lg cursor-pointer"
          />
        </Link>
      </div>

      {/* Jersey and Player Images */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img 
            src={jerseyImage} 
            alt="Jersey Official 2026" 
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
          />
        </div>
        <div>
          <img 
            src={playerPhoto} 
            alt="Jugador Lagartos" 
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationCards;
