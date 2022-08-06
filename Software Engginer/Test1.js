const data = [
  {
    session_name: "first test",
    classes: [
      {
        class_name: undefined,
        students: [
          {
            student_name: "John",
          },
        ],
      },
    ],
  },
  {
    session_name: null,
    classes: [
      {
        class_name: "second class",
        students: [
          {
            student_name: "Doe",
          },
        ],
      },
    ],
  },
];

const removeNullUndefind = (key, value) => {
    if (value === undefined || value === null ) {
      return undefined;
    }
    return value;
}
let newObject= JSON.stringify(data, removeNullUndefind(), 2);
console.log(newObject);
