// ELMS group relabel 2

// Get all student names from class list
function getNamesFromClassList() {
  const nameNodes = document.querySelectorAll('.StudentEnrollment');
  console.log(nameNodes);
  const nameArray = Array.from(nameNodes);
  const nameAndSection = nameArray.map((m) => {
    const name = m.querySelector('.roster_user_name').innerText;
    const lName = name.substring(name.lastIndexOf(' ') + 1, name.length);
    return {
      name: lName,
      section: m.querySelector('.section').innerText.substring(8, 15)
    };
  });
  sessionStorage.setItem('inst377', JSON.stringify(nameAndSection));
  console.log(nameAndSection);
}
getNamesFromClassList();

function tagStudentWithSection() {
  const classMembers = JSON.parse(sessionStorage.getItem('inst377'));
  let displayStudents = document.querySelectorAll('li.group-user div.group-user-name');
  displayStudents = Array.from(displayStudents);
  classMembers.forEach((student) => {
    displayStudents.find((f) => {
      if (f.innerText.includes(student.name)) {
        f.innerText = `${student.name} ${student.section}`;
      }
    });
  });
  console.log('done');
}


tagStudentWithSection();
