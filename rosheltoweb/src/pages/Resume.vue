<template>
    
    <div class="row">
        <div class="resumeSection">
            <h2>
                Skills
            </h2>
            <div>
                <p>
                    <i>Programming Languages:</i> Python, Java, JavaScript, SQL, HTML, CSS, C#
                </p>
                <p> 
                    <i>Technologies: </i> React.js, Vue.js, Node.js, Liferay, Helm/Kubernetes, PostgreSQL, Flyway, REST APIs
                </p>
                <p> 
                    <i>Other skills: </i> Agile Development, Jira and ticket systems
                </p>
                <p> 
                    <i>Source Control: </i> Git, SVN
                </p>
            </div>
        </div>
    </div>
    <div class="resumeSection">
            <h2>
                Experience
            </h2>
            <div>
                <div>
                    <h3>Applications Engineer 3 (August 2024 - Present)</h3>
                    <p><i>National Center for Ecological Analysis and Synthesis</i></p>
                    <ul>
                        <li>Build and maintain VegBank API, a Python Flask application that allows scientists to access and upload vegetation data. </li>
                        <li>Manage Helm charts to make code easily deployable via Kubernetes. </li>
                        <li>Deploy VegBank PostgreSQL database to Kubernetes and maintain via Flyway.</li>
                        <li>Collaborate with Scientists to understand their data needs and provide technical solutions. </li>
                    </ul>
                </div>
                <div>
                    <h3>Software Engineer (November 2019 - May 2024)</h3>
                    <p><i>Stanford University IT Student and HR Systems Portal Team</i></p>
                    <ul>
                        <li>Build full stack web applications in JavaScript, HTML, CSS, and Java that fetch and display data from REST APIs, ensuring a responsive and user-friendly interface.</li>
                        <li>Revitalize user account structure to better represent the varied needs of Stanford community members during sitewide refresh project.</li>
                        <li>Develop enhancements for university enrollment website. Worked closely with business owners, accessibility teams, and infrastructure teams to create a smooth and scalable experience for students.</li>
                        <li>Respond to enhancement and optimization tickets from students, faculty, and staff. </li>
                        <li>Manage front end and middleware for payroll and financial aid information. </li>
                        <li>Write and review code for web accessibility, meeting requirements for screen readers and contrast rules. </li>
                        <li>Collaborate with analysts and campus groups to understand and fulfill the needs of students and staff.</li>
                    </ul>
                </div>
                <div>
                    <h3>Software Developer (September 2014 - October 2018)</h3>
                    <p><i>University of Puget Sound Enterprise Information Services</i></p>
                    <ul>
                        <li>Built a new REST API in C# to create accounts in Active Directory via requests from PeopleSoft. Partnered with PeopleSoft administrators to redesign the University’s account management system. [<a href="https://github.com/puget-sound/MSActor" target="_blank">Available Here</a>]</li>
                        <li>Designed and implemented several apps for different campus groups to streamline business practices, including a photo migration pipeline and a scheduler for recurring campus events. </li>
                        <li>Organized team documentation and resources as part of new software acquired by Project Management Office. </li>
                    </ul>
                </div>
            </div>
    </div>
    <div class="resumeSection">
        <h2>
            Education
        </h2>
        <div class="educationBar">
            <div class="educationTitle">
                <p>B.S.</p>
            </div>
            <div class="educationContent">
                <p>Computer Science, minors in Classics and English</p>
                <p>University of Puget Sound, Tacoma, WA</p>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.verticalDivider{
    border-left: 2px solid white;
    margin-left:24px;
    margin-right:24px;
}
h2, p{
    padding:0;
    margin-block:0;
}
hr{
    opacity:60%;
}
.resumeSection{
    padding-bottom:24px;
}
.educationBar{
    display:flex;
}
.educationTitle{
    padding-right:24px;
}
</style>