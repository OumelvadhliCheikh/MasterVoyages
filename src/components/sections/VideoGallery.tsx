import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { RiPlayFill, RiVideoFill, RiFacebookFill } from "react-icons/ri";

export function VideoGallery() {
  const { t } = useLanguage();

  const openVideo = (url: string) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <section id="videos" className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary w-fit font-medium text-sm mx-auto mb-4">
            <RiVideoFill size={15} /> {t.videoGallery.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.videoGallery.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.videoGallery.videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openVideo(video.url)}
              data-testid={`card-video-${index}`}
              className={`group bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(244,169,26,0.15)] ${video.url ? "cursor-pointer" : "opacity-60 cursor-default"}`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-[#1a1000] to-[#0d0d0d] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/30">
                  <RiPlayFill size={28} className="text-black ms-1" />
                </div>
                {video.url && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#1877F2] text-white text-xs px-2 py-1 rounded-full font-medium">
                    <RiFacebookFill size={12} /> Facebook
                  </div>
                )}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="absolute top-0 bottom-0 border-l border-white/20" style={{ left: `${i * 15}%` }} />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">{video.tag}</span>
                <h3 className="text-white font-semibold mt-2">{video.title}</h3>
                {!video.url && <p className="text-white/30 text-xs mt-1">Bientôt disponible</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
