import React, { useState } from "react";

const Que5 = () => {
  let [data, setData] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      price: 499,
      rating: 4.8,
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      price: 299,
      rating: 4.6,
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      genre: "Finance",
      price: 399,
      rating: 4.5,
    },
    {
      id: 4,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      genre: "Finance",
      price: 450,
      rating: 4.7,
    },
    {
      id: 5,
      title: "Ikigai",
      author: "Héctor García",
      genre: "Self-Help",
      price: 350,
      rating: 4.4,
    },
    {
      id: 6,
      title: "Deep Work",
      author: "Cal Newport",
      genre: "Productivity",
      price: 420,
      rating: 4.6,
    },
    {
      id: 7,
      title: "Clean Code",
      author: "Robert C. Martin",
      genre: "Programming",
      price: 699,
      rating: 4.8,
    },
    {
      id: 8,
      title: "You Don’t Know JS",
      author: "Kyle Simpson",
      genre: "Programming",
      price: 550,
      rating: 4.7,
    },
    {
      id: 9,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      genre: "Self-Help",
      price: 399,
      rating: 4.3,
    },
    {
      id: 10,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      genre: "Motivation",
      price: 250,
      rating: 4.2,
    },
    {
      id: 11,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      price: 300,
      rating: 4.7,
    },
    {
      id: 12,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      price: 320,
      rating: 4.8,
    },
    {
      id: 13,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      price: 380,
      rating: 4.9,
    },
    {
      id: 14,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      price: 600,
      rating: 4.6,
    },
    {
      id: 15,
      title: "The Lean Startup",
      author: "Eric Ries",
      genre: "Business",
      price: 480,
      rating: 4.5,
    },
    {
      id: 16,
      title: "Zero to One",
      author: "Peter Thiel",
      genre: "Business",
      price: 410,
      rating: 4.4,
    },
    {
      id: 17,
      title: "The Power of Habit",
      author: "Charles Duhigg",
      genre: "Psychology",
      price: 450,
      rating: 4.6,
    },
    {
      id: 18,
      title: "Harry Potter and the Sorcerer’s Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      price: 350,
      rating: 4.9,
    },
    {
      id: 19,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      genre: "Programming",
      price: 750,
      rating: 4.8,
    },
    {
      id: 20,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      price: 270,
      rating: 4.3,
    },
  ]);
  let [state, setState] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    rating: "",
    id: Date.now(),
  });

  let [filtered, setFiltered] = useState(data)

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    
 if (
    !state.title.trim() ||
    !state.author.trim() ||
    !state.genre.trim() ||
    !state.price.trim() ||
    !state.rating.trim()
  ) {
    alert("Please fill all fields");
    return;
  }


    setFiltered([...filtered, state]);

    setState({
      title: "",
      author: "",
      genre: "",
      price: "",
      rating: "",
      id: Date.now(),
    });
  };

  let handleDel = (id) => {
    setFiltered(filtered.filter((obj) => id != obj.id));
  };

  let handleUpdate = (obj) => {
    setState({
      title: obj.title,
      author: obj.author,
      genre: obj.genre,
      price: obj.price,
      rating: obj.rating,
      id: obj.id,
    });
    handleDel(obj.id);
  };

let timer;
  let handleSearch=(e)=>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
      setFiltered(
      data.filter(obj=> obj.genre.toLowerCase().includes(e.target.value.toLowerCase()) )
    )
    }, 1000)
  }



  return (
    <>
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

    {/* Page Title */}
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
      📚 Book Manager
    </h1>

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

      {/* LEFT SIDE - FORM */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Add / Update Book
        </h2>

        {/* Search */}
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search by genre..."
          className="w-full mb-4 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Title..."
            type="text"
            name="title"
            value={state.title}
          />

          <input
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Author..."
            type="text"
            name="author"
            value={state.author}
          />

          <input
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Genre..."
            type="text"
            name="genre"
            value={state.genre}
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Price..."
              type="text"
              name="price"
              value={state.price}
            />

            <input
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Rating..."
              type="text"
              name="rating"
              value={state.rating}
            />
          </div>

          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition duration-200 font-medium">
            Add Book
          </button>

        </form>
      </div>

      {/* RIGHT SIDE - BOOK LIST */}
      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">

        {filtered.map((obj) => (
          <div
            key={obj.id}
            className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {obj.title}
                </p>
                <p className="text-gray-600 text-sm">{obj.author}</p>
                <p className="text-gray-500 text-sm">{obj.genre}</p>
                <p className="mt-1 text-sm font-medium text-indigo-600">
                  ₹ {obj.price} | ⭐ {obj.rating}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleDel(obj.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
              >
                Delete
              </button>

              <button
                onClick={() => handleUpdate(obj)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg text-sm transition"
              >
                Update
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  </div>
</>
  );
};

export default Que5;
