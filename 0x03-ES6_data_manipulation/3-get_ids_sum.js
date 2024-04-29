export default function getStudentIdsSum(students) {
  const i = 0;
  const sum = students.reduce(
  (accumulator, currentValue) => { 
    return accumulator + currentValue.id}, i,
  );
  return sum;
}
