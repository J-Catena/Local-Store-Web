import type { Dictionary } from "@/lib/getDictionary";

export default function Services({ dict }: { dict: Dictionary }) {
    return (
        <section className="mx-auto max-w-5xl px-6 pb-16">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900">
                    {dict.home.servicesTitle}
                </h2>
                <p className="mt-2 text-gray-600">{dict.home.servicesSubtitle}</p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                        <div className="text-sm font-semibold text-gray-900">
                            {dict.home.services.oneTitle}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            {dict.home.services.oneDesc}
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                        <div className="text-sm font-semibold text-gray-900">
                            {dict.home.services.twoTitle}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            {dict.home.services.twoDesc}
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                        <div className="text-sm font-semibold text-gray-900">
                            {dict.home.services.threeTitle}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            {dict.home.services.threeDesc}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
