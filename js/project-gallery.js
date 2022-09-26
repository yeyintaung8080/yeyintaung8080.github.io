function loadProjectGallery() {

    let projectList = [{
            company: 'Myanma Apex Bank',
            title: 'Government Bank\'s Management Information System',
            desc: 'I\'ve been conducting full stack web application development to sync and report various bank\'s transaction data between MAB bank and Government bank. Continuously supporting integration to major and minor changes raise by Government bank specifically.',
            technologies: ['Angular', 'JWT Auth', 'Java 8', 'Spring Boot', 'Spring JDBC', 'SOAP Client', 'XML', 'Oracle PL/SQL']
        },
        {
            company: 'Myanma Apex Bank',
            title: 'Bank Internal Management and Reporting System',
            desc: 'I\'ve been developing customized modules due to business owners\' requirements. Support version changes.',
            technologies: ['Angular', 'JWT Auth', 'Java 8', 'Spring Boot', 'Spring JDBC', 'Oracle PL/SQL', 'MS SQL']
        },
        {
            company: 'Myanma Apex Bank',
            title: 'MAB Intercomm Staff App',
            desc: 'Designed, developed, and delivered internal used staff communication application and administration web portal for HR and Management department. Specially developed using API and Angular.',
            technologies: ['Angular', 'Flutter', 'JWT Auth', 'Java 8', 'Spring Boot', 'Spring JDBC', 'Oracle PL/SQL', 'Web Logic', 'Firebase'],
            link: 'https://play.google.com/store/apps/details?id=com.mab.mab_inter_com'
        },
        {
            company: 'Myanma Apex Bank',
            title: 'iBanking Duplicate User ID Transformation Web Service',
            desc: `Delivered 6-month project enforces MAB iBanking customers with duplicate identities to transform into a new unique identity in the whole Core Banking System\'s database`,
            technologies: ['Angular', 'JWT Auth', 'Java 8', 'Spring Boot', 'Spring JDBC', 'Oracle PL/SQL']
        },
        {
            company: 'Myanma Apex Bank',
            title: 'SMS Queuing Window Service',
            desc: `Developed a window service that batches MAB\'s SMS messages into SMS Queuing Database by scheduling`,
            technologies: ['Java 8', 'Spring Boot', 'Spring JDBC', 'Oracle PL/SQL']
        },
        {
            company: 'Myanma Apex Bank',
            title: 'Oracle Banking Digital Experience (OBDX) Merchant EPI Integration',
            desc: `Developed merchant integration service and corporated with Oracle team`,
            technologies: ['Angular', 'Java 8', 'Spring Boot', 'JPA', 'Oracle PL/SQL']
        },
        {
            company: 'Myanma Apex Bank',
            title: 'Question and Answer System',
            desc: `Delivered experience with Google Form like Question and Answer System for MAB\'s staffs that\'s internally used.`,
            technologies: ['Angular', 'JWT Auth', 'Java 8', 'Spring Boot', 'Spring JDBC', 'Oracle PL/SQL', 'Web Logic']
        },
        {
            company: 'Myanma Apex Bank',
            title: 'Other Contributed Modules',
            desc: `
                <ul>
                    <li>Myanmar Payment Union Service\'s bulk transaction file parsing, validating, and importing into reporting database</li>
                    <li>Other Bank Remittence Transaction Reports (Inward\/Outward)</li>
                    <li>Bank Statement Reports</li>
                </ul>
            `,
            technologies: ['Angular', 'JWT Auth', 'Java 8', 'Spring Boot', 'Spring JDBC', 'Oracle PL/SQL', 'Web Logic']
        },
        {
            company: 'Pearl Yadana',
            title: 'Student Exam Management System',
            desc: 'Implemented a management system for: <ul> <li> student registration </li><li>attendee hostel reservation</li><li>exam data entry</li><li>attendee entry</li><li>exam mark entry</li><li>reporting passed and failed students</li><li>user management</li></ul> ',
            technologies: ['Angular', 'JWT Auth', 'Java 8', 'Spring Boot', 'JPA', 'MySQL', 'Apache Tomcat'],
        },
    ];

    let row = document.querySelector('#projects .row');
    projectList.forEach((item) => {
        let col = document.createElement('div');
        let colMdClass = document.createAttribute('class');
        colMdClass.value = 'col-md-4';
        col.setAttributeNode(colMdClass);

        let techListStr = '';
        item.technologies.forEach((tech) => {
            techListStr += `<li>${tech}</li>`;
        });

        let projectLink = '';
        if (item.link) {
            projectLink = ` <div class="project-links">
                                <a href="${item.link}" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </div>`;
        }

        let projectNodeStr = `<div class="pj-card">
                                <header>
                                    <div class="pj-top">
                                       <!-- <div class="folder">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                        </div> -->
                                        <h5 class="company">
                                            ${item.company}
                                        </h5>
                                        ${projectLink}
                                    </div>
                                    <h3 class="pj-title">
                                            ${item.title}
                                    </h3>
                                    <div class="pj-desc">
                                        <p>
                                            ${item.desc}
                                        </p>
                                    </div>
                                </header>
                                <footer>
                                    <ul class="pj-tech-list">
                                        ${techListStr}
                                    </ul>
                                </footer>
                            </div>`;

        col.innerHTML = projectNodeStr;
        console.log(col);
        row.appendChild(col);
    });

}

loadProjectGallery();