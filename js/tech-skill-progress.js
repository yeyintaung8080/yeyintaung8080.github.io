function loadSkills() {
    let skills = [
        { tech: 'Java', progress: 80 },
        { tech: 'Javascript', progress: 75 },
        { tech: 'Python', progress: 70 },
        { tech: 'PHP', progress: 70 },
        { tech: 'DSA', progress: 65 },
        { tech: 'OOP & Design Patterns', progress: 68 },
        { tech: 'Servlet', progress: 65 },
        { tech: 'JPA', progress: 70 },
        { tech: 'JSP', progress: 65 },
        { tech: 'Spring / Spring Boot', progress: 70 },
        { tech: 'Laravel', progress: 70 },
        { tech: 'Thymleaf', progress: 75 },
        { tech: 'Angular', progress: 80 },
        { tech: 'jQuery', progress: 60 },
        { tech: 'Node Js', progress: 60 },
        { tech: 'Typescript', progress: 70 },
        { tech: 'Bootstrap 4', progress: 70 },
        { tech: 'PL/SQL', progress: 60 },
        { tech: 'MySQL', progress: 70 },
        { tech: 'Git', progress: 65 },
    ];

    let container = document.querySelector("#professional-skills div.container-fluid");

    let i = 0;
    let row = null;
    skills.forEach((skill) => {
        if (i == 0 || i % 4 == 0) {
            row = document.createElement('div');
            let rowAttr = document.createAttribute('class');
            rowAttr.value = 'row';
            row.setAttributeNode(rowAttr);
            row.style.marginTop = '3%';
            row.innerHTML = '<div class="col-md-2"></div>';
        }
        let skillElementGroup = `<h4>${skill.tech}</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: ${skill.progress}%;" aria-valuenow="${skill.progress}" 
                                    aria-valuemin="0" aria-valuemax="100">${skill.progress}%</div>
                                </div>`;
        let col = document.createElement('div');
        let classAttr = document.createAttribute('class');
        classAttr.value = 'col-md-2';
        col.setAttributeNode(classAttr);
        col.innerHTML = skillElementGroup;
        row.appendChild(col);
        container.append(row);
        i++;
    });



}

loadSkills();