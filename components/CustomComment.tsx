import { Formatter } from "@/utils/formatter";

interface CustomCommentProps {
    date: Date;
    comment: string;
    autor: string;
    email?: string;
}

export default function CustomComment({
    date,
    comment,
    autor,
    email
}: CustomCommentProps) {
    return (
        <div className="flex items-center gap-2 rounded-sm bg-zinc-800 p-4 flex-col mb-4 w-114">
            <div className="flex w-full justify-between">
                <div className="flex flex-col">
                    <p className="font-medium text-heading truncate">
                        {autor}
                    </p>
                    <p className="text-sm text-body truncate text-gray-500">
                        {email || "Usuario Anónimo"}
                    </p>
                </div>
                <div className="inline-flex items-center font-medium text-heading">
                    {Formatter.formatDate(date)}
                </div>
            </div>
            <hr className="my-2 border-t border-gray-700 w-full" />
            <div className="w-full">
                <p className="text-body text-gray-300">
                    {comment}
                </p>
            </div>
        </div>
    )
}