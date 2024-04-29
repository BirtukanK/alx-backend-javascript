export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
    const grade = matchedGrade ? matchedGrade.grade : 'N/A';
    return {
      ...student,
      grade,
    };
  });

  return updatedStudents;
}
