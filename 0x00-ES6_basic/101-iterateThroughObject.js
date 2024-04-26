export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  const result = employeeNames.join(' | ');

  return result;
}
