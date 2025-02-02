import { useEffect, useState } from "react";
import MoodBoard from "@/components/MoodBoard";

type MoodBoardType = {
    title: string;
    images: string[];
};

export default function Home() {
    const [moodBoards, setMoodBoards] = useState<MoodBoardType[]>([]);

    useEffect(() => {
        fetch("/api/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: `{ getMoodBoards { title images } }` }),
        })
            .then((res) => res.json())
            .then((data) => setMoodBoards(data.data.getMoodBoards));
    }, []);

    return (
        <div className="min-h-screen bg-pastelBlue p-8">
            <h1 className="text-3xl font-bold text-white">ChibiBoard 🎨</h1>
            <div className="grid gap-4 mt-4">
                {moodBoards.map((board, idx) => (
                    <MoodBoard key={idx} {...board} />
                ))}
            </div>
        </div>
    );
}
