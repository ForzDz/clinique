import { Home, Stethoscope, Users, MapPin, CalendarCheck } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const Navbar = () => {
  const navItems = [
    { name: "Accueil", url: "#", icon: Home },
    { name: "Services", url: "#services", icon: Stethoscope },
    { name: "Équipe", url: "#equipe", icon: Users },
    { name: "Rendez-vous", url: "#rdv", icon: CalendarCheck },
    { name: "Localisation", url: "#localisation", icon: MapPin },
  ];

  return <NavBar items={navItems} />;
};

export default Navbar;
