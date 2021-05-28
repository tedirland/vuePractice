const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {
          title: 'name of the wind',
          author: 'Patrick Rothfuss',
          image: 'assets/1.jpg',
          isFav: true,
        },
        {
          title: 'The Return of the King',
          author: 'JRR Tolkien',
          image: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'A Feast For Crows',
          author: 'George RR Martin',
          image: 'assets/3.jpg',
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount('#app');
