import { Heart, Stethoscope, Microscope, Activity } from 'lucide-react';
import TeamHero from '../components/team/TeamHero';
import TeamAbout from '../components/team/TeamAbout';
import TeamFacility from '../components/team/TeamFacility';
import TeamTeam from '../components/team/TeamTeam';

export default function OurTeamPage() {
    return (
    <div className="pt-20">
      <TeamHero />
      <TeamAbout />
      <TeamFacility />
      <TeamTeam />
    </div>
  );
}