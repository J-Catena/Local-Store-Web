type Props = {
    embedUrl: string;
    title?: string;
};

export default function MapEmbed({ embedUrl, title = "Mapa" }: Props) {
    return (
        <div className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm">
            <div className="aspect-16/10 w-full">
                <iframe
                    title={title}
                    src={embedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                />
            </div>
        </div>
    );
}
