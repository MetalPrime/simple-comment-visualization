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
        <div className="flex items-center gap-2">
            <div className="flex-1 min-w-0 ms-2">
                <p className="font-medium text-heading truncate">
                    {autor}
                </p>
                <p className="text-sm text-body truncate">
                    {email || "Usuario Anónimo"}
                </p>
            </div>
            <div className="inline-flex items-center font-medium text-heading">
                {Formatter.formatDate(date)}
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