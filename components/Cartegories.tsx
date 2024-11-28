import React from "react";

const categories = [
  { name: "Graphics & Design", icon: "🎨" },
  { name: "Digital Marketing", icon: "📈" },
  { name: "Writing & Translation", icon: "✍️" },
  { name: "Video & Animation", icon: "🎥" },
  { name: "Music & Audio", icon: "🎵" },
  { name: "Programming & Tech", icon: "💻" },
];

const Categories: React.FC = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-center text-2xl font-bold text-gray-700">Explore Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 px-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white p-4 rounded shadow hover:bg-plugbroPurple hover:text-white text-center"
          >
            <span className="text-4xl">{category.icon}</span>
            <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
