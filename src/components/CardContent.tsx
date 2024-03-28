import { remark } from 'remark';
import html from 'remark-html';

interface CardContentProps {
    readonly content: string;
    readonly className: string;
}

export default function CardContent({content, className}: CardContentProps) {
    content = remark().use(html).processSync(content).toString();
    return (
        <div className="card-content text-2xl">
            <div className={className} dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )
}