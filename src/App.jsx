import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FoodGrid from './components/FoodGrid';
import FoodDetailModal from './components/FoodDetailModal';
import Footer from './components/Footer';

export default function App() {
  // 5 ta kategoriya
  const categories = [
    { id: 'all', nom: 'Barchasi', emoji: '🍽️' },
    { id: 'milliy', nom: 'Milliy taomlar', emoji: '🍲' },
    { id: 'fastfood', nom: 'Fast Food', emoji: '🍔' },
    { id: 'pizza', nom: 'Pitsa', emoji: '🍕' },
    { id: 'ichimlik', nom: 'Ichimliklar', emoji: '🥤' },
  ];

  // Taomlar nomi, rasmlari va to'liq ma'lumotlari
  const taomlar = [
    {
      id: 1,
      nom: "Toshkent To'y Oshi",
      narx: 45000,
      emoji: '🍛',
      rasm: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'milliy',
      tavsif: "Dangasada pishirilgan maxsus devzira guruch, sarxil lahm qo'y go'shti, sarg'ish sabzi, qazi va bedana tuxumlari bilan tayyorlangan afsonaviy milliy palov.",
      tarkibi: "Lahm qo'y go'shti, Devzira guruch, sariq va qizil sabzi, no'xat, mayiz, zira, qazi va bedana tuxumi",
      vaqti: "25-30 daqiqa",
      kaloriya: "680 kkal",
      vazn: "450 gr",
    },
    {
      id: 2,
      nom: 'Tandir Somsa',
      narx: 12000,
      emoji: '🥟',
      rasm: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'milliy',
      tavsif: "Tandirda qarsildoq bo'lib pishirilgan, mayin qo'y go'shti va piyoz solingan, ustiga sedana sepilgan issiq milliy somsa.",
      tarkibi: "Qatlama xamir, maydalangan qo'y go'shti, dumba yog'i, to'g'ralgan piyoz, zira, sedana",
      vaqti: "15-20 daqiqa",
      kaloriya: "340 kkal",
      vazn: "1 dona (160 gr)",
    },
    {
      id: 3,
      nom: "Qo'y Go'shtli Shashlik",
      narx: 22000,
      emoji: '🍢',
      rasm: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'milliy',
      tavsif: "Ochiq ko'mir cho'g'ida pishirilgan suvli lahm qo'y go'shti, marinovka qilingan yangi piyoz va anor donalari bilan.",
      tarkibi: "Sarxil qo'y go'shti, maxsus sharqona ziravorlar, yangi uzilgan piyoz, kashnich",
      vaqti: "20-25 daqiqa",
      kaloriya: "420 kkal",
      vazn: "3 six (240 gr)",
    },
    {
      id: 4,
      nom: "Mol Go'shtli Manti",
      narx: 8000,
      emoji: '🥟',
      rasm: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'milliy',
      tavsif: "Yupqa xamir ichiga maydalangan sarxil mol go'shti va piyoz solinib, mantiqasqonda bug'da pishirilgan mazali milliy taom.",
      tarkibi: "Yupqa bug'doy xamiri, mol go'shti, dumba yog'i, piyoz, qora murch",
      vaqti: "25 daqiqa",
      kaloriya: "310 kkal",
      vazn: "1 porsiya (4 dona)",
    },
    {
      id: 5,
      nom: 'Klassik Lavash Big',
      narx: 35000,
      emoji: '🌯',
      rasm: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'fastfood',
      tavsif: "Grilda pishirilgan shirador mol go'shti, qarsildoq kartoshka chipslari, barra bodring, pomidor va maxsus oq sous.",
      tarkibi: "Yupqa lavash xamiri, qovurilgan mol go'shti, kartoshka chipslari, barra pomidor va bodring, sarimsoqli oq sous",
      vaqti: "15 daqiqa",
      kaloriya: "560 kkal",
      vazn: "380 gr",
    },
    {
      id: 6,
      nom: 'Double Cheeseburger',
      narx: 38000,
      emoji: '🍔',
      rasm: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'fastfood',
      tavsif: "Ikkita suvli mol go'shti kotleti, ikki qavat eritilgan Chedder pishlog'i, aysberg salati va yumshoq kunchutli bulochka.",
      tarkibi: "Suvli mol go'shti kotletlari (2 dona), Chedder pishlog'i, marinadlangan bodring, pomidor, maxsus burger sousi",
      vaqti: "15 daqiqa",
      kaloriya: "650 kkal",
      vazn: "320 gr",
    },
    {
      id: 7,
      nom: 'Xot-dog Maxsus',
      narx: 20000,
      emoji: '🌭',
      rasm: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'fastfood',
      tavsif: "Yumshoq frantsuzcha bulochka ichida qovurilgan suvli sosiska, qarsildoq salat, ketchup va mayonez sousi bilan.",
      tarkibi: "Halol sosiska, yumshoq bulochka, aysberg salati, pomidorli sous, mayonez",
      vaqti: "10-15 daqiqa",
      kaloriya: "390 kkal",
      vazn: "220 gr",
    },
    {
      id: 8,
      nom: 'Fri Kartoshkasi',
      narx: 15000,
      emoji: '🍟',
      rasm: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'fastfood',
      tavsif: "Oltinrang qilib qovurilgan, usti qarsildoq va ichi yumshoq klassik fri kartoshkasi.",
      tarkibi: "Saralangan sifatli yangi kartoshka, tozalangan o'simlik yog'i, dengiz tuzi",
      vaqti: "10 daqiqa",
      kaloriya: "280 kkal",
      vazn: "150 gr",
    },
    {
      id: 9,
      nom: 'Pepperoni Pitsa',
      narx: 65000,
      emoji: '🍕',
      rasm: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'pizza',
      tavsif: "Yupqa italyancha xamir, boy pomidor sousi, cho'ziluvchan motsarella pishlog'i va halol pepperoni kolbasasi.",
      tarkibi: "Yupqa pitsa xamiri, motsarella pishlog'i, xushbo'y pepperoni kolbasasi, oregano, pomidor sousi",
      vaqti: "20-25 daqiqa",
      kaloriya: "780 kkal",
      vazn: "30 sm (550 gr)",
    },
    {
      id: 10,
      nom: 'Margarita Pitsa',
      narx: 55000,
      emoji: '🍕',
      rasm: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'pizza',
      tavsif: "Klassik Neapolitan pitsasi: xushbo'y rayhon barglari, mo'l motsarella pishlog'i va yangi pomidor sousi.",
      tarkibi: "Yupqa xamir, mayin pomidor sousi, cho'ziluvchan motsarella, barra rayhon",
      vaqti: "20 daqiqa",
      kaloriya: "690 kkal",
      vazn: "30 sm (500 gr)",
    },
    {
      id: 11,
      nom: 'Coca-Cola (1L)',
      narx: 14000,
      emoji: '🥤',
      rasm: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'ichimlik',
      tavsif: "Muzdek sovutilgan, tetiklantiruvchi klassik gazlangan ichimlik.",
      tarkibi: "Gazlangan tozalangan suv, tabiiy ekstraktlar, karamel, kofein",
      vaqti: "5 daqiqa",
      kaloriya: "140 kkal",
      vazn: "1 Litr",
    },
    {
      id: 12,
      nom: 'Meva Sharbatlari',
      narx: 16000,
      emoji: '🧃',
      rasm: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
      kategoriya: 'ichimlik',
      tavsif: "Yangi uzilgan mevalardan siqib olingan, vitaminlarga boy tabiiy sharbat.",
      tarkibi: "100% tabiiy meva sharbati, shakar qo'shilmagan barra mevalar",
      vaqti: "5 daqiqa",
      kaloriya: "110 kkal",
      vazn: "0.5 Litr",
    },
  ];

  // Tanlangan toifa holati
  const [activeCategory, setActiveCategory] = useState('all');

  // Tanlangan taom holati (batafsil ma'lumot modalini ochish uchun)
  const [selectedFood, setSelectedFood] = useState(null);

  // Kunduzgi / Tungi rejim holati (localStorage bilan)
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('teztaom_theme');
      return savedTheme || 'light';
    } catch {
      return 'light';
    }
  });

  // Rejim o'zgarganda body klassini va localStorage ni yangilash
  useEffect(() => {
    try {
      localStorage.setItem('teztaom_theme', theme);
    } catch (e) {
      console.error(e);
    }
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Savatdagi taomlar holati: localStorage orqali saqlash (sahifa yangilanganda o'chib ketmaydi)
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('teztaom_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Savat ma'lumotini o'qishda xatolik:", e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Savat o'zgarganda avtomatik localStorage ga saqlash
  useEffect(() => {
    try {
      localStorage.setItem('teztaom_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Savat ma'lumotini saqlashda xatolik:", e);
    }
  }, [cart]);

  // Savatga taom qo'shish funksiyasi (1 ta yoki bir nechta)
  const handleAddToCart = (food, count = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === food.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === food.id ? { ...item, soni: item.soni + count } : item
        );
      }
      return [...prevCart, { ...food, soni: count }];
    });

    const addText = count > 1 ? `(${count} ta)` : '(+1)';
    setToastMessage(`«${food.nom}» savatga qo'shildi! ${addText} 🛒`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  // Hero dagi "Buyurtma berish" tugmasi bosilganda:
  const handleHeroOrder = () => {
    const somsa = taomlar.find((t) => t.id === 2) || taomlar[0];
    handleAddToCart(somsa, 1);

    const el = document.getElementById('menu-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Savatdagi sonni o'zgartirish
  const handleUpdateQuantity = (foodId, change) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === foodId) {
            const yangiSoni = item.soni + change;
            return yangiSoni > 0 ? { ...item, soni: yangiSoni } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  // Har bir taomning savatdagi soni
  const cartMap = useMemo(() => {
    return cart.reduce((acc, item) => {
      acc[item.id] = item.soni;
      return acc;
    }, {});
  }, [cart]);

  // Tanlangan toifadagi taomlar
  const filteredTaomlar =
    activeCategory === 'all'
      ? taomlar
      : taomlar.filter((item) => item.kategoriya === activeCategory);

  const totalItemsCount = cart.reduce((sum, item) => sum + item.soni, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.narx * item.soni, 0);

  return (
    <div className="app">
      {/* 1. Navbar */}
      <Navbar
        cartCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* 2. Hero */}
      <Hero onOrderClick={handleHeroOrder} />

      {/* 3. Kategoriyalar */}
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 4. Taomlar grid (har bir taom ustiga bosganda batafsil modal ochiladi) */}
      <FoodGrid
        taomlar={filteredTaomlar}
        onAddToCart={handleAddToCart}
        onSelectFood={(food) => setSelectedFood(food)}
        cartMap={cartMap}
      />

      {/* 5. Footer */}
      <Footer />

      {/* 6. Taom haqida To'liq Ma'lumot Modali */}
      <FoodDetailModal
        food={selectedFood}
        onClose={() => setSelectedFood(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 7. Savat Modali */}
      {isCartOpen && (
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Savatingiz ({totalItemsCount} ta taom)</h3>
              <button
                className="modal-close-btn"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#64748b', padding: '30px 0' }}>
                Savatingiz hozircha bo'sh. Taom qo'shish uchun «Savatga» tugmasini bosing!
              </p>
            ) : (
              <>
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item-row">
                      <div className="cart-item-left">
                        {item.rasm ? (
                          <img
                            src={item.rasm}
                            alt={item.nom}
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <span className="cart-item-emoji">{item.emoji}</span>
                        )}
                        <div>
                          <div className="cart-item-name">{item.nom}</div>
                          <div className="cart-item-price">
                            {(item.narx * item.soni).toLocaleString('en-US')} so'm
                          </div>
                        </div>
                      </div>

                      <div className="cart-stepper">
                        <button
                          className="cart-step-btn"
                          onClick={() => handleUpdateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span style={{ fontWeight: '700', padding: '0 6px' }}>
                          {item.soni}
                        </span>
                        <button
                          className="cart-step-btn"
                          onClick={() => handleUpdateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="modal-footer">
                  <div className="cart-total-row">
                    <span>Jami to'lov:</span>
                    <span className="cart-total-price">
                      {totalPrice.toLocaleString('en-US')} so'm
                    </span>
                  </div>
                  <button
                    className="cart-checkout-btn"
                    onClick={() => {
                      alert("Buyurtmangiz muvaffaqiyatli qabul qilindi! Kuryer 30 daqiqada yetkazadi. 🚀");
                      setCart([]);
                      setIsCartOpen(false);
                    }}
                  >
                    Buyurtmani tasdiqlash
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Bildirishnoma */}
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
}
