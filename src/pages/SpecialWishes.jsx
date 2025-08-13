import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import vidioWishes from '../assets/videos/Wishes.mp4'

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false)

  const wishes = `
Sayangku 💖, setiap hari aku bersyukur pada Tuhan karena telah menghadirkanmu dalam hidupku 🙏. Kamu adalah anugerah terindah 🌹, yang membuat dunia ini terasa lebih hangat 🌈✨.

Aku tahu hidup kadang tidak mudah 🌧️, tapi aku ingin kamu selalu ingat… kamu tidak pernah sendiri 🤝. Aku akan selalu ada untukmu 💞, memelukmu saat kamu rapuh 🤗, dan menguatkanmu ketika dunia terasa terlalu berat 🛡️.

Kamu punya hati yang begitu tulus 💓, senyum yang selalu menenangkan hatiku 😊, dan jiwa yang indah luar dalam 🌹. Aku sering berpikir… bagaimana bisa aku seberuntung ini dipertemukan dengan seseorang sebaik kamu 🌍❤️.

Aku percaya penuh padamu 🙌. Kamu kuat 💥, kamu hebat 🦋, dan kamu pantas mendapatkan kebahagiaan yang tak ada ujungnya 🏆. Kalau suatu hari kamu merasa lelah 😔, biarkan aku menjadi tempatmu pulang 🏠, tempat di mana kamu bisa menangis, tertawa, dan merasa aman.

Sayang… terima kasih sudah mau berjalan bersama di hidupku 💗. Aku mencintaimu bukan hanya dengan kata, tapi dengan seluruh jiwa yang aku punya 💍. Dan aku berjanji… aku akan selalu menggenggam tanganmu, sampai kapan pun 🫶.
  `

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>
        
        <div className="mb-8">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split('\n').map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? 'Sembunyikan Cintaku' : 'Lihat Cintaku'}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">
                  ❤️
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Nata 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default SpecialWishes