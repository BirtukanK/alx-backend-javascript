export default function hasValuesFromArray(aset, anarray) {
  for (const element of anarray) {
    if (!aset.has(element)) {
      return false;
    }
  }
  return anarray.every((element) => aset.has(element));
}
