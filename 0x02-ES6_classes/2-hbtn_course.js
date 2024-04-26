export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate and set name attribute
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    // Validate and set length attribute
    if (typeof length !== 'number' || isNaN(length)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    // Validate and set students attribute
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for length attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number' || isNaN(newLength)) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and setter for students attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
