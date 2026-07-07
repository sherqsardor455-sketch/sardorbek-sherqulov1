/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, Trash2, Inbox } from 'lucide-react';
import { personalInfo } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load messages from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem('sardorbek_portfolio_msgs');
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse messages', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: fullName,
      email: email,
      message: message,
      timestamp: new Date().toLocaleString('uz-UZ'),
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem('sardorbek_portfolio_msgs', JSON.stringify(updatedMessages));

    // Reset inputs & trigger success state
    setFullName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem('sardorbek_portfolio_msgs', JSON.stringify(updated));
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-transparent border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 font-sans text-xs uppercase tracking-[0.25em] font-extrabold mb-3 block">
              BOG'LANISH
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Men bilan <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-extrabold">aloqa</span>
            </h2>
            <p className="text-slate-300 font-sans text-base md:text-lg mb-12 max-w-md font-light leading-relaxed">
              Sizga ma'lumotlar tahlili yoki veb-sayt kerakmi? Men bilan bog'laning va biz eng yaxshi yechimni topamiz.
            </p>

            <div className="space-y-8">
              {/* Phone card */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 flex items-center justify-center rounded-xl text-purple-400 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans text-[10px] uppercase tracking-widest text-slate-400/50 font-bold mb-1">
                    Telefon
                  </h5>
                  <p className="font-sans text-lg md:text-xl font-extrabold text-purple-400">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 flex items-center justify-center rounded-xl text-purple-400 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans text-[10px] uppercase tracking-widest text-slate-400/50 font-bold mb-1">
                    Email
                  </h5>
                  <p className="font-sans text-lg md:text-xl font-extrabold text-purple-400">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              {/* Location card */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 flex items-center justify-center rounded-xl text-purple-400 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans text-[10px] uppercase tracking-widest text-slate-400/50 font-bold mb-1">
                    Manzil
                  </h5>
                  <p className="font-sans text-lg md:text-xl font-extrabold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative shadow-xl"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-purple-500/15 rounded-full flex items-center justify-center text-purple-400 mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-sans text-2xl font-extrabold text-white mb-3">
                    Xabar muvaffaqiyatli yuborildi!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mb-6 leading-relaxed font-light">
                    Sizning so'rovingiz qabul qilindi. Tez orada siz bilan ko'rsatilgan kontakt orqali bog'lanaman.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs uppercase tracking-wider font-sans font-bold text-purple-400 hover:underline"
                  >
                    Yangi xabar yuborish
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="font-sans text-[10px] uppercase tracking-widest text-slate-400/50 font-extrabold mb-3 block">
                      To'liq ismingiz
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Sherqulov Sardorbek"
                      className="w-full bg-transparent border-0 border-b border-white/10 py-3.5 focus:ring-0 focus:border-purple-400 transition-colors text-white placeholder:text-white/15 font-sans"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[10px] uppercase tracking-widest text-slate-400/50 font-extrabold mb-3 block">
                      Email manzilingiz
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@gmail.com"
                      className="w-full bg-transparent border-0 border-b border-white/10 py-3.5 focus:ring-0 focus:border-purple-400 transition-colors text-white placeholder:text-white/15 font-sans"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-[10px] uppercase tracking-widest text-slate-400/50 font-extrabold mb-3 block">
                      Xabaringiz
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Loyihangiz haqida qisqacha..."
                      className="w-full bg-transparent border-0 border-b border-white/10 py-3.5 focus:ring-0 focus:border-purple-400 transition-colors text-white placeholder:text-white/15 resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4.5 rounded-xl font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 hover:opacity-90 active:scale-[0.98] hover:shadow-[0_10px_20px_rgba(147,51,234,0.3)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    XABARNI YUBORISH
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Demo Message Inbox Panel for easy testing */}
        <div className="mt-20 border-t border-white/5 pt-12 flex flex-col items-center">
          <button
            onClick={() => setShowInbox(!showInbox)}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-purple-400 px-5 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-extrabold transition-all active:scale-95"
          >
            <Inbox className="w-4 h-4" />
            {showInbox ? "Inboxni yashirish" : "Yuborilgan Xabarlar Inboxini Ko'rish (Test uchun)"}
            <span className="ml-1.5 px-2 py-0.5 bg-purple-500/15 text-purple-400 rounded-full text-[10px]">
              {messages.length}
            </span>
          </button>

          <AnimatePresence>
            {showInbox && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full max-w-4xl mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-sans text-sm uppercase tracking-wider font-extrabold text-white">
                    Test Inbox: Yuborilgan So'rovlar
                  </h4>
                  {messages.length > 0 && (
                    <button
                      onClick={() => {
                        setMessages([]);
                        localStorage.removeItem('sardorbek_portfolio_msgs');
                      }}
                      className="text-xs text-red-400 hover:text-red-300 font-bold transition-colors"
                    >
                      Barchasini tozalash
                    </button>
                  )}
                </div>

                {messages.length === 0 ? (
                  <p className="text-center text-xs text-slate-400/50 py-8 italic font-light">
                    Hozircha xabarlar yo'q. Yuqoridagi formani to'ldirib, test xabar yuborib ko'ring!
                  </p>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className="bg-[#0f172a]/60 border border-white/5 p-5 rounded-xl flex justify-between gap-4 items-start hover:border-purple-500/20 transition-colors"
                      >
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                            <span className="font-sans text-sm font-bold text-white">
                              {msg.name}
                            </span>
                            <span className="text-xs text-purple-400 font-sans font-medium">
                              ({msg.email})
                            </span>
                            <span className="text-[10px] text-slate-400/40 font-mono">
                              {msg.timestamp}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                            {msg.message}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="p-1.5 text-slate-400/40 hover:text-red-400 transition-colors"
                          title="Xabarni o'chirish"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
