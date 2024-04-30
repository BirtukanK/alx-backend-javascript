export default function cleanSet(set, startString) {
  const cleanedValues = [];
  if (startString === '') {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      const remainder = value.slice(startString.length);
      cleanedValues.push(remainder);
    }
  }
  return cleanedValues.join('-');
}
