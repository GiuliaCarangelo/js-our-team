/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg


const teamMembers = [
    {
        "name": 'Wayne Barnett',
        "role": 'Founder & CEO',
        "idPic": 'wayne-barnett-founder-ceo.jpg'
    },

    {
        "name": 'Angela Caroll',
        "role": 'Chief Editor',
        "idPic": 'angela-caroll-chief-editor.jpg'
    },

    {
        "name": 'Walter Gordon',
        "role": 'Office Manager',
        "idPic": 'walter-gordon-office-manager.jpg'
    },

    {
        "name": 'Angela Lopez',
        "role": 'Social Media Manager',
        "idPic": 'angela-lopez-social-media-manager.jpg'
    },

    {
        "name": 'Scott Estrada',
        "role": 'Developer',
        "idPic": 'scott-estrada-developer.jpg'
    },

    {
        "name": 'Barbara Ramos',
        "role": 'Graphic Designer',
        "idPic": 'barbara-ramos-graphic-designer.jpg'
    }
];


// MILESTONE 1: Stampare su console le informazioni
for (const i in teamMembers) {
    const member = teamMembers[i];
    console.log(`${member.name} - ${member.role} - ${member.idPic}`);
}

// MILESTONE 2: Stampare su DOM sottoforma di stringhe
const teamList = document.getElementById('team-list');

for (const i in teamMembers) {
    const member = teamMembers[i];
    const memberInfo = document.createElement('p');
    memberInfo.textContent = `${member.name} - ${member.role} - ${member.idPic}`;
    teamList.appendChild(memberInfo);
}