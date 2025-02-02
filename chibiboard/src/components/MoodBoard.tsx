import { motion } from "framer-motion";

const MoodBoard = ({ title, images }: { title: string; images: string[] }) => {
    return (
        <div className="bg-sakura p-4 rounded-2xl shadow-lg">
            <h2 className="text-lg font-bold text-white">{title}</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
                {images.map((img, idx) => (
                    <motion.img
                        key={idx}
                        src={img}
                        className="rounded-lg w-full h-auto"
                        whileHover={{ scale: 1.1 }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MoodBoard;
