"use client";

import { useEffect, useState } from "react";

type Props = {
    label: string;
};

export default function TopicPill({ label }: Props) {
    const [topic, setTopic] = useState<string | null>(null);

    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        const t = sp.get("topic");
        setTopic(t ? t : null);
    }, []);

    if (!topic) return null;

    return (
        <p className="mt-3 inline-flex rounded-2xl border border-zinc-200/70 bg-white px-4 py-2 text-sm font-medium text-zinc-800">
            {label}: {topic}
        </p>
    );
}
