import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TodoContactProps } from '../../App'


type ContactsState = {
  contacts: TodoContactProps[]
}

export type TodoTasksPropsWithoutId = Omit<TodoContactProps, 'id'>;

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      contact: "Mateus",
      number: "(19) 83231-2321",
      mail: "mateus@gmail.com",
    },
    {
      id: 2,
      contact: "Leonardo",
      number: "(19) 75331-3230",
      mail: "leonardo@gmail.com",
    },
    {
      id: 3,
      contact: "Giovanna",
      number: "(19) 32131-3030",
      mail: "giovanna@gmail.com",
    },
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoTasksPropsWithoutId>) => {
      const contact = action.payload

      const lastContactIndex = state.contacts[state.contacts.length - 1];

      let lastContactId;

      if (lastContactIndex) {
        lastContactId = lastContactIndex.id + 1
      } else {
        lastContactId = 1;
      }

      const newContact = {
        id: lastContactId,
        ...contact
      }

      state.contacts.push(newContact);
    },
    remove: (state, action: PayloadAction<number>) => {
      const idContactRemove = action.payload

      const tasksAcctualyRemove = state.contacts.filter((contact) => {
        if (contact.id === idContactRemove) {
            return;
        }

        return contact;
    })

    state.contacts = tasksAcctualyRemove;
    },
    update: (state, action: PayloadAction<TodoContactProps>) => {
      const contactUpdate = action.payload

      const tasksAcctualyEdit = state.contacts.map((contact) => {
        if (contact.id === contactUpdate.id) {
            return contactUpdate;
        }

        return contact;
    })

    state.contacts = tasksAcctualyEdit
    }
  }
}
)

export const { create, update, remove } = contactsSlice.actions
export default contactsSlice.reducer