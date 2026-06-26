export default function PaymentButton({ amount }: { amount: number }) {
  return (
    <button 
      onClick={() => alert(`পেমেন্ট প্রক্রিয়াধীন: ${amount} টাকা`)}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition"
    >
      💳 পেমেন্ট করুন
    </button>
  );
}
