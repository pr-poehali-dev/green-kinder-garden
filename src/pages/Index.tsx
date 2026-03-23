import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "goals", label: "Цели и задачи" },
  { id: "gallery", label: "Галерея" },
  { id: "families", label: "Участники" },
];

const GOALS = [
  {
    emoji: "🌳",
    title: "Посадка деревьев",
    desc: "Привлечение детей и родителей к посадке бузины как способу улучшения экологической обстановки детского сада",
    color: "#22c55e",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Сплочение семьи",
    desc: "Совместная деятельность объединяет детей и родителей в общем добром деле на благо природы",
    color: "#f59e0b",
  },
  {
    emoji: "🌱",
    title: "Трудовые навыки",
    desc: "Обучение детей практическим умениям ухода за растениями и работы в саду",
    color: "#06b6d4",
  },
  {
    emoji: "🌍",
    title: "Экологическая культура",
    desc: "Воспитание бережного и ответственного отношения к природе, к высаженным деревьям",
    color: "#ec4899",
  },
];

const FAMILIES = [
  { name: "Семья Пестеревых", child: "София и Эркин", emoji: "🌳🌳" },
  { name: "Семья Толстоуховых", child: "Айна", emoji: "🌿" },
  { name: "Федосеев Эркин", child: "", emoji: "🌱" },
  { name: "Кирсанов Вася", child: "", emoji: "🌿" },
  { name: "Андреева Куннэй", child: "", emoji: "🍀" },
  { name: "Петров Тимур", child: "", emoji: "🌳" },
  { name: "Данилова Милана", child: "", emoji: "🌸" },
  { name: "Голикова Намыына", child: "", emoji: "🌿" },
  { name: "Луковцев Мичил", child: "", emoji: "🌱" },
  { name: "Родионов Айхал", child: "", emoji: "🍃" },
  { name: "Эверстова Айаана", child: "", emoji: "🌼" },
];

const GALLERY_IMAGES = [
  {
    url: "https://cdn.poehali.dev/projects/d3e34ba7-631c-4885-8e22-866909beba16/files/e674d323-71d9-47f1-8fa3-1720bacd4052.jpg",
    caption: "Дружная посадка бузины",
  },
  {
    url: "https://cdn.poehali.dev/projects/d3e34ba7-631c-4885-8e22-866909beba16/files/2806a8e3-efda-4316-96c7-d4f8b0032c80.jpg",
    caption: "Первые саженцы бузины",
  },
  {
    url: "https://cdn.poehali.dev/projects/d3e34ba7-631c-4885-8e22-866909beba16/files/e674d323-71d9-47f1-8fa3-1720bacd4052.jpg",
    caption: "Бережные руки юных экологов",
  },
];

const CARD_COLORS = [
  { bg: "#ede9fe", border: "#c4b5fd" },
  { bg: "#fce7f3", border: "#f9a8d4" },
  { bg: "#dcfce7", border: "#86efac" },
  { bg: "#dbeafe", border: "#93c5fd" },
  { bg: "#fef9c3", border: "#fde68a" },
  { bg: "#ffedd5", border: "#fdba74" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      {/* Floating leaves decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {["🍃", "🌿", "🍀", "🌱", "🍃", "🌿"].map((leaf, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-20 animate-bounce"
            style={{
              left: `${10 + i * 16}%`,
              top: `${5 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            {leaf}
          </span>
        ))}
      </div>

      {/* NAVBAR */}
      <nav
        className="sticky top-0 z-50 shadow-lg"
        style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2"
          >
            <span className="text-3xl">🌳</span>
            <span
              style={{ fontFamily: "'Caveat', cursive", color: "#fff" }}
              className="text-2xl font-bold leading-none"
            >
              ЭкоЧэлгий
            </span>
          </button>
          <div className="hidden md:flex gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                style={{
                  background:
                    activeSection === item.id
                      ? "#fef08a"
                      : "rgba(255,255,255,0.15)",
                  color: activeSection === item.id ? "#166534" : "#fff",
                  fontWeight: 700,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex md:hidden gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-2 py-1 rounded-full text-xs font-bold transition-all duration-200"
                style={{
                  background:
                    activeSection === item.id
                      ? "#fef08a"
                      : "rgba(255,255,255,0.15)",
                  color: activeSection === item.id ? "#166534" : "#fff",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #dcfce7 0%, #fef9c3 40%, #d1fae5 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[30vw] opacity-5 select-none"
            style={{ lineHeight: 1 }}
          >
            🌳
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
          <div
            className="inline-block text-7xl mb-6 animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            🌿
          </div>

          <h1
            style={{
              fontFamily: "'Caveat', cursive",
              color: "#166534",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.1,
            }}
            className="font-bold mb-4 drop-shadow-sm"
          >
            Создание экологической среды
            <br />
            <span style={{ color: "#15803d" }}>в детском саду</span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 font-semibold"
            style={{ color: "#166534", opacity: 0.8 }}
          >
            Вместе мы делаем наш сад{" "}
            <span
              style={{
                background: "#bbf7d0",
                borderRadius: "8px",
                padding: "2px 10px",
              }}
            >
              зеленее и добрее
            </span>{" "}
            🌱
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { icon: "🌳", val: "18+", label: "деревьев посажено" },
              { icon: "👨‍👩‍👧", val: "6", label: "семей участвуют" },
              { icon: "⭐", val: "2024", label: "год старта" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-4 rounded-3xl shadow-md"
                style={{ background: "#fff", border: "3px solid #86efac" }}
              >
                <span className="text-3xl mb-1">{stat.icon}</span>
                <span
                  className="text-3xl font-black"
                  style={{ color: "#16a34a" }}
                >
                  {stat.val}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#4b7c5a" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTo("goals")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-black shadow-lg hover:scale-105 transition-transform duration-200"
            style={{ background: "#16a34a", color: "#fff" }}
          >
            Узнать о проекте
            <Icon name="ArrowDown" size={20} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* GOALS */}
      <section id="goals" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-5xl">🎯</span>
            <h2
              className="text-4xl md:text-5xl font-black mt-2"
              style={{ fontFamily: "'Caveat', cursive", color: "#166534" }}
            >
              Цели и задачи проекта
            </h2>
            <p className="mt-3 text-lg font-semibold" style={{ color: "#4b7c5a" }}>
              На территории нашего сада была посажена бузина — первый шаг к большому зелёному будущему!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOALS.map((goal, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 shadow-md"
                style={{
                  background: `${goal.color}18`,
                  border: `3px solid ${goal.color}55`,
                }}
              >
                <span className="text-5xl mb-4">{goal.emoji}</span>
                <h3
                  className="text-xl font-black mb-3"
                  style={{ color: goal.color }}
                >
                  {goal.title}
                </h3>
                <p className="text-sm font-semibold leading-relaxed" style={{ color: "#374151" }}>
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-16 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #dcfce7, #d1fae5)" }}
          >
            <div className="absolute top-4 right-6 text-6xl opacity-20">🌳</div>
            <h3
              className="text-2xl md:text-3xl font-black mb-4"
              style={{ fontFamily: "'Caveat', cursive", color: "#166534" }}
            >
              О нашем проекте 🌿
            </h3>
            <p className="text-lg font-semibold leading-relaxed" style={{ color: "#166534" }}>
              В нашем детском саду реализуется экологический проект по созданию зелёной среды на территории.
              Вместе с детьми и их родителями мы посадили{" "}
              <strong>бузину</strong> — красивое и полезное растение, которое будет радовать всех ещё многие годы.
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed" style={{ color: "#166534" }}>
              Этот проект помогает воспитывать у детей бережное отношение к природе,
              развивать трудолюбие и укреплять семейные ценности через совместный труд.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-20"
        style={{ background: "linear-gradient(180deg, #fef9c3 0%, #fef9c3 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-5xl">📸</span>
            <h2
              className="text-4xl md:text-5xl font-black mt-2"
              style={{ fontFamily: "'Caveat', cursive", color: "#92400e" }}
            >
              Галерея посадок
            </h2>
            <p className="mt-3 text-lg font-semibold" style={{ color: "#78350f" }}>
              Наши маленькие экологи за работой!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ border: "4px solid #fde68a" }}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-56 object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: "rgba(22, 101, 52, 0.9)" }}
                >
                  <p className="text-white font-bold text-sm text-center">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 text-center rounded-3xl py-8 px-6"
            style={{
              background: "#fff",
              border: "3px dashed #fbbf24",
            }}
          >
            <span className="text-4xl">🖼️</span>
            <p
              className="mt-2 text-lg font-bold"
              style={{ color: "#92400e" }}
            >
              Здесь появятся ваши настоящие фотографии!
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: "#b45309" }}>
              Напишите нам, чтобы добавить фото посадок
            </p>
          </div>
        </div>
      </section>

      {/* FAMILIES */}
      <section id="families" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-5xl">👨‍👩‍👧‍👦</span>
            <h2
              className="text-4xl md:text-5xl font-black mt-2"
              style={{ fontFamily: "'Caveat', cursive", color: "#1d4ed8" }}
            >
              Участники проекта
            </h2>
            <p className="mt-3 text-lg font-semibold" style={{ color: "#2563eb" }}>
              Дружные семьи, которые делают наш сад лучше
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAMILIES.map((family, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 hover:scale-105 transition-transform duration-200 shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${CARD_COLORS[i % 6].bg}, #fff)`,
                  border: `3px solid ${CARD_COLORS[i % 6].border}`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-black" style={{ color: "#1f2937" }}>
                      {family.name}
                    </h3>
                    {family.child && (
                      <p className="text-sm font-semibold mt-1 flex items-center gap-1" style={{ color: "#6b7280" }}>
                        <Icon name="User" size={14} />
                        {family.child}
                      </p>
                    )}
                  </div>
                  <span className="text-3xl">{family.emoji}</span>
                </div>
                <div
                  className="flex items-center gap-2 mt-4 px-3 py-2 rounded-2xl"
                  style={{ background: "#f0fdf4" }}
                >
                  <Icon name="TreePine" size={16} color="#16a34a" />
                  <span className="text-sm font-bold" style={{ color: "#16a34a" }}>
                    Участник проекта 🌿
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-3xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
              border: "3px solid #93c5fd",
            }}
          >
            <span className="text-5xl">➕</span>
            <h3
              className="text-2xl font-black mt-3"
              style={{ fontFamily: "'Caveat', cursive", color: "#1d4ed8" }}
            >
              Ваша семья тоже участвует?
            </h3>
            <p className="mt-2 font-semibold" style={{ color: "#2563eb" }}>
              Напишите нам, и мы добавим вашу семью в список участников проекта!
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 text-center"
        style={{ background: "#16a34a", color: "#fff" }}
      >
        <div className="flex justify-center gap-3 text-4xl mb-4">
          {["🌳", "🌿", "🌱", "🍀", "🌳"].map((e, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
              {e}
            </span>
          ))}
        </div>
        <p
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Зелёный детский сад
        </p>
        <p className="text-sm opacity-75 font-semibold">
          Экологический проект по созданию зелёной среды · 2024
        </p>
        <p className="mt-2 text-sm opacity-60 font-semibold">
          Вместе — мы сила! 💚
        </p>
      </footer>
    </div>
  );
};

export default Index;