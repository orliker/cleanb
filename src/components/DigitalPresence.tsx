import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Send } from 'lucide-react';
import { companyData } from '../data/companyData';
import { VisualImage } from './VisualImage';

const DigitalPresence = () => {
  return (
    <section className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs">Presença Digital</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 text-white tracking-tighter">
              Siga a nossa <span className="text-gradient-teal italic">jornada</span> no Instagram.
            </h2>
          </div>
          <a 
            href={companyData.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all"
          >
            <Instagram size={20} />
            {companyData.contact.instagramUser}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {companyData.digitalPresence.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden group"
            >
              {/* Post Header */}
              <div className="p-6 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {companyData.brandName[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm tracking-tight">{companyData.brandName}</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest">Publicação oficial</p>
                  </div>
                </div>
                <Instagram size={18} className="text-slate-500" />
              </div>

              {/* Post Image */}
              <div className="aspect-square overflow-hidden relative">
                <VisualImage 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-2"><Heart fill="white" size={24} /> <span className="font-bold">128</span></div>
                  <div className="flex items-center gap-2"><MessageCircle fill="white" size={24} /> <span className="font-bold">12</span></div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6 text-white">
                  <Heart size={24} className="hover:text-red-500 cursor-pointer transition-colors" />
                  <MessageCircle size={24} className="hover:text-brand-primary cursor-pointer transition-colors" />
                  <Send size={24} className="hover:text-brand-primary cursor-pointer transition-colors" />
                </div>
                
                <h4 className="text-white font-bold mb-3">{post.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {post.description}
                </p>
                
                <p className="text-brand-primary text-[10px] font-bold uppercase tracking-widest mt-6">
                  #limpeza #portugal #angola #infinityclean
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalPresence;
