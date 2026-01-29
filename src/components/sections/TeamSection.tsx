import { motion } from "framer-motion";
import { Award, GraduationCap, Star } from "lucide-react";
import doctor1 from "@/assets/doctor-marie.png";
import doctor2 from "@/assets/doctor-jean.png";

const doctors = [
  {
    name: "Dr. Marie Dupont",
    specialty: "Dermatologue - Médecine Esthétique",
    experience: "12 ans d'expérience",
    education: "Université d'Oran 1",
    photo: doctor1,
    certifications: ["Botox certifié", "Laser expert"],
  },
  {
    name: "Dr. Jean Martin",
    specialty: "Dermatologue - Oncologie Cutanée",
    experience: "15 ans d'expérience",
    education: "Université Lyon 1",
    photo: doctor2,
    certifications: ["Dermatoscopie", "Chirurgie cutanée"],
  }
];

const TeamSection = () => {
  return (
    <section id="equipe" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif drop-shadow-lg">Notre Équipe Médicale</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Des professionnels passionnés et hautement qualifiés à votre service
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20"
            >
              {/* Photo */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                  <h3 className="text-2xl font-bold font-serif">{doctor.name}</h3>
                  <p className="text-card/80">{doctor.specialty}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                {/* Experience */}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>{doctor.experience}</span>
                </div>

                {/* Education */}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>{doctor.education}</span>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {doctor.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      <Star className="w-3 h-3 text-accent" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
