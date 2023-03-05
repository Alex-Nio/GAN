import { createStore } from "vuex";

export default {
  state: {
    notes: []
  },
  getters: {
    notes(state) {
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
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
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
    addNote({ commit }, note) {
      note.id = Math.random();
      commit("addNote", note);
    },
    deleteNote({ commit }, noteIndex) {
      commit("deleteNote", noteIndex);
    }
  },
  modules: {}
};
