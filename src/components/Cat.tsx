import type { CatBreed } from "../types";

const CatCard = ({ cat }: { cat: CatBreed }) => {
  const traits = [
    { label: "Adaptability", value: cat.adaptability },
    { label: "Affection", value: cat.affection_level },
    { label: "Child Friendly", value: cat.child_friendly },
    { label: "Dog Friendly", value: cat.dog_friendly },
    { label: "Energy", value: cat.energy_level },
    { label: "Intelligence", value: cat.intelligence },
    { label: "Social Needs", value: cat.social_needs },
  ];

  return (
    <div className="max-w-md bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={cat.image}
        alt={cat.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold">{cat.name}</h2>

        <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
          <span>{cat.origin}</span>
          <span>•</span>
          <span>{cat.life_span} yrs</span>
          <span>•</span>
          <span>{cat.weight.metric} kg</span>
        </div>

        <p className="text-sm text-gray-700 line-clamp-4">{cat.description}</p>

        <div className="flex flex-wrap gap-2">
          {cat.temperament.split(",").map((t) => (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {t.trim()}
            </span>
          ))}
        </div>

        <div className="space-y-1">
          {traits.map((t) => (
            <div key={t.label}>
              <div className="flex justify-between text-xs">
                <span>{t.label}</span>
                <span>{t.value}/5</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded">
                <div
                  className="bg-black h-1.5 rounded"
                  style={{ width: `${(t.value / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-2 text-sm">
          {cat.wikipedia_url && (
            <a
              href={cat.wikipedia_url}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Wikipedia
            </a>
          )}
          {cat.cfa_url && (
            <a
              href={cat.cfa_url}
              target="_blank"
              className="text-gray-500 hover:underline"
            >
              CFA
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { CatCard };
