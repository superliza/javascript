var liza = {
  name: 'eliss',
  points: 1000,
  isActive: true,
  courses: ['Intro JS', 'JS avanzado', 'JS master']
}

var frida = {
  name: 'Frida',
  points: 500,
  isActive: true,
  courses: ['Intro JS', 'Intro UX', 'UX master']
}

var lucy = {
  name: 'Lucy',
  points: 2000,
  isActive: false,
  courses: ['Intro JS', 'JS avanzado']
}

var students = [liza, frida, lucy];

for(var i = 0; i < students.length; i++) {
  var studentCourses = students[i].courses;
  for (var j = 0; j < studentCourses.length; j++){
    if (studentCourses[j] === 'JS avanzado') {
      console.log(students[i].name);
    }
  }

}
