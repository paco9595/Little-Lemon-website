import moment from 'moment';

export default [
  {
    name: "Houston",
    schedulesByDate: {
      [moment().format("YYYY-MM-DD")]: ["12:00 PM", "1:00 PM", "2:00 PM"],
      [moment().add(1, "day").format("YYYY-MM-DD")]: [
        "1:00 PM",
        "3:00 PM",
        "7:00 PM",
      ],
      [moment().add(2, "day").format("YYYY-MM-DD")]: [
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
      ],
    },
  },
  {
    name: "Texas",
    schedulesByDate: {
      [moment().format("YYYY-MM-DD")]: ["1:30 PM", "2:30 PM", "3:30 PM"],
      [moment().add(1, "day").format("YYYY-MM-DD")]: [
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
      ],
      [moment().add(2, "day").format("YYYY-MM-DD")]: [
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
      ],
    },
  },
  {
    name: "Dallas",
    schedulesByDate: {
      [moment().format("YYYY-MM-DD")]: ["11:00 AM", "12:00 PM", "1:00 PM"],
      [moment().add(1, "day").format("YYYY-MM-DD")]: [
        "7:30 PM",
        "8:30 PM",
        "9:30 PM",
      ],
      [moment().add(2, "day").format("YYYY-MM-DD")]: [
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
      ],
    },
  },
];
