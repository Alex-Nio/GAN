import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, push, set, onValue } from "firebase/database";

export default {
  state: {
    user: null,
    notes: []
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    setUser(state, user) {
      state.user = user;
    },
    addNote(state, note) {
      console.log(note);
      console.log(state.notes);
      note = Object.entries(note).map(([key, value]) => ({ [key]: value }));
      console.log(note);
      // state.notes.push(note);
    },
    deleteNote(state, noteIndex) {
      for (let i = 0; i < state.notes.length; i++) {
        if (i === noteIndex) {
          state.notes.splice(i, 1);
        }
      }
    }
  },
  actions: {
    async addNote({ commit, state }, note) {
      const user = getAuth().currentUser;
      if (!user) {
        return;
      }
      const notesRef = ref(getDatabase(), `users/${user.uid}/notes`);
      const newNoteRef = push(notesRef);
      await set(newNoteRef, note);

      commit("addNote", { ...note, id: newNoteRef.key });
    },
    // addNote({ commit }, note) {
    //   note.id = Math.random();
    //   commit("addNote", note);
    // },
    async setUserAndNotes({ commit }) {
      const user = getAuth().currentUser;
      if (!user) {
        return;
      }
      const notesRef = ref(getDatabase(), `users/${user.uid}/notes`);
      onValue(notesRef, snapshot => {
        const notes = [];
        snapshot.forEach(childSnapshot => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        commit("setNotes", notes);
      });
    },
    deleteNote({ commit }, noteIndex) {
      commit("deleteNote", noteIndex);
    }
  },
  getters: {
    getCurrentUser(state) {
      return state.user;
    },
    getNotes(state) {
      return state.notes;
    },
    noteCompleted(state) {
      return state.notes.filter(note => {
        return note.completed;
      });
    },
    noteNotCompleted(state) {
      return state.notes.filter(note => {
        return !note.completed;
      });
    }
  },
  modules: {}
};