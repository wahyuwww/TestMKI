const data = [
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 1,
      name: "Adi",
    },
    class: {
      class_id: 1,
      name: "A",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 5,
      name: "Surya",
    },
    class: {
      class_id: 3,
      name: "C",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 8,
      name: "Edi",
    },
    class: {
      class_id: 4,
      name: "D",
    },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 7,
      name: "Dede",
    },
    class: {
      class_id: 4,
      name: "D",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 3,
      name: "Bayu",
    },
    class: {
      class_id: 2,
      name: "B",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 2,
      name: "Budi",
    },
    class: {
      class_id: 1,
      name: "A",
    },
  },
  {
    session_id: 1,
    time: "09:00",
    student: {
      student_id: 4,
      name: "Dharma",
    },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: {
      student_id: 3,
      name: "Maha",
    },
    class: {
      class_id: 3,
      name: "C",
    },
  },
];

const newData = (items) => {
  let data = [];
  let i=0
  while (i< items.length) {
     let index = data.findIndex(
      (item) => item.session_id === items[i].session_id
    );

    if (index === -1) {
      data.push({
        session_id: items[i].session_id,
        time: items[i].time,
        classes: [{ ...items[i].class, students: [{ ...items[i].student }] }],
      });
    } else {
      let classId = data[index].classes.findIndex(
        (item) => item.class_id === items[i].class.class_id
      );

      if (classId === -1) {
        data[index].classes.push({
          ...items[i].class,
          students: [{ ...items[i].student }],
        });
      } else {
        data[index].classes[classId].students.push({ ...items[i].student });
      }
    }
    i++ 
  }
  return data
};
const result = JSON.stringify(newData(data));
console.log(result);
