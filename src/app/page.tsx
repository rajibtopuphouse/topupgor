return (
    <main className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">🔥 Free Fire Top-Up</h1>
        <p className="text-xl mb-8">সরাসরি ডায়মন্ড কিনুন সাশ্রয়ী মূল্যে!</p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {[25, 50, 100, 200].map((d) => (
            <div key={d} className="bg-red-700 p-4 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">{d} 💎</p>
              <p className="text-sm">মাত্র {d * 2} টাকা</p>
              <button className="mt-2 bg-yellow-500 text-black px-4 py-1 rounded-full">কিনুন</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
