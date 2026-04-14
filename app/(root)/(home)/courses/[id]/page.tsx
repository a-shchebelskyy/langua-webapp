"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "../../../../../lib/courseInfo.json";

const CoursesPage = () => {
    const params = useParams();
    const id = params?.id;
    if (!id || Array.isArray(id)) {
        return <div>Invalid course</div>;
    }
    const courseId = parseInt(id, 10);
    const courseData = data[courseId];

    return (
        <section className="flex flex-col min-h-screen p-8 gap-4 bg-slate-200 dark:bg-slate-950">
            <Link href={'/courses'}>
                <p className="text-sm text-slate-700 dark:text-slate-300">Назад до курсів</p>
            </Link>
            <div className="flex flex-row gap-8">
                <div className="flex flex-col flex-1">
                    <Image
                        src={courseData.bannerUrl}
                        alt={''}
                        width={345}
                        height={345}
                        className="rounded-xl"
                    />
                    <div className="flex flex-row gap-4 mt-8">
                        <Image
                            src={courseData.bannerUrl}
                            alt={''}
                            width={64}
                            height={64}
                            className="rounded-full"
                        />
                        <div className="flex flex-col gap-2">
                            <p className="text-base text-slate-950 dark:text-slate-50">{courseData.teacher}</p>
                            <div className="flex flex-row gap-4">
                                <p className="text-xs text-slate-500">10 студентів</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] w-full my-4 border border-slate-500"/>
                    <div className="flex flex-col p-4 gap-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                        <h1 className="text-lg font-semibold text-slate-950 dark:text-slate-50">Опис</h1>
                            <p className="text-xs text-slate-700 dark:text-slate-300">{courseData.description}</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col w-[256px] p-4 gap-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                        <p className="text-base font-semibold text-slate-950 dark:text-slate-50">Ціна</p>
                        <div className="flex items-center justify-center">
                            <h1 className="text-6xl font-semibold text-slate-950 dark:text-slate-50">₴{courseData.price}</h1>
                        </div>
                        <div className="flex items-center justify-end">
                            <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">за годину</p>
                        </div>
                        <button className="flex mx-auto px-6 py-4 rounded-xl bg-blue-500 hover:bg-blue-700">
                            <p className="text-base font-semibold text-slate-50">Зв&apos;яжіться</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default CoursesPage;