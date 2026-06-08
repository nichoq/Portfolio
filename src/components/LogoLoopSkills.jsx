import { skillCategories } from '../data/skills';
import LogoLoop from './LogoLoop';

function SkillBadge({ skill }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-glass-medium border border-glass-border hover:border-aurora-cyan/20 transition-all duration-300 group">
      <i className={`${skill.icon} text-xl`}></i>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white whitespace-nowrap transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

export default function LogoLoopSkills() {
  // Flatten all skills for the loop rows
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const midpoint = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, midpoint);
  const row2 = allSkills.slice(midpoint);

  return (
    <section id="skills" className="relative z-10">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <p className="text-aurora-cyan font-mono text-sm mb-2">02 / Skills</p>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle mt-4">
            Technologies and tools I use to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-purple rounded-full mt-4" />
        </div>

        {/* Logo Loop — All Screen Sizes */}
        <div className="space-y-6">
          <LogoLoop
            logos={row1.map((skill) => ({ node: <SkillBadge skill={skill} />, title: skill.name }))}
            speed={35}
            direction="left"
            logoHeight={48}
            gap={20}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut
            fadeOutColor="#0a0a0f"
          />
          <LogoLoop
            logos={row2.map((skill) => ({ node: <SkillBadge skill={skill} />, title: skill.name }))}
            speed={30}
            direction="right"
            logoHeight={48}
            gap={20}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut
            fadeOutColor="#0a0a0f"
          />
        </div>
      </div>
    </section>
  );
}
