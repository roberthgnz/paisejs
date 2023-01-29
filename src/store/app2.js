import { defineStore } from 'pinia'
import { ref, reactive, watch, computed, watchEffect } from "vue";

export const useBookStore = defineStore('book', () => {
  const count = ref(0)
  const book = reactive([
    {
      name: "Vckyt",
      total: 22,
      transactions: [
        {
          id: "asdfwegjhfk",
          amount: 5,
          type: "lend",
          date: "2022-10-25",
          message: "message 1",
        },
        {
          id: "3g3afwecvnjg",
          amount: 10,
          type: "lend",
          date: "2023-02-21",
          message: "message 2",
        },
        {
          id: "assg3rafwex",
          amount: 2,
          type: "borrow",
          date: "2022-09-25",
        },
        {
          id: "g3gehvcvcxe",
          amount: 3,
          type: "lend",
          date: "2023-06-05",
        },
      ],
    },
    {
      name: "Gill",
      total: 22,
      transactions: [
        {
          id: "assg3rafwex",
          amount: 2,
          type: "borrow",
          date: "2022-09-25",
        },
      ],
    },
    {
      name: "singh",
      total: 22,
      transactions: [
        {
          id: "asdfwegjhfk",
          amount: 5,
          type: "lend",
          date: "2022-10-25",
          message: "message 1",
        },
      ],
    },
  ])
  const person = (name) => book.find((t) => t.name == name)
  const addPerson = () => {
    let person = prompt("Please enter the person's name", "Singh");
    if (person != null) {
      book.push({
        name: person, total: 0, transactions: []
      })
    }
  }
  const filteredBook = computed(() => {
    return book.value
  });
  // watch(filteredBook, (newVal) => {
  //   console.log("Changedx");
  // })
  // watch(()=>book,(newVal)=>{
  //   console.log("Changedx");
  // })
  watch(() => book, (newVal) => {
    console.log("Changedx");
  }, {
    immediate: true,
    deep: true
  })
  return { book, person, addPerson }
})