const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 82 },
    { name: 'Git', level: 92 },
    { name: 'UI/UX', level: 75 }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Mes Compétences
        </h2>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;