import Link from "next/link";
import Image from "next/image";

interface BannerCardProps {
    img: string;
    alt?: string;
    label: string;
    title: string;
    desc?: string;
    author?: {
        name: string;
        url?: string;
    };
    usernameTags?: string[];
    publishedAt?: string;
    slug: string;
}
export default function BannerCard(props: BannerCardProps) {
    return (
        <div className="bannercard">
            <Link href={`/blog/${props.slug}`}>
                <Image
                    src={props.img}
                    alt={props.alt || props.title}
                    width={490}       // Add appropriate fixed width here
                    height={338}      // Add appropriate fixed height here
                    className="img-fluid"
                />
            </Link>

            <label>{props.label}</label>
            <Link href={`/blog/${props.slug}`}><h4>{props.title}</h4></Link>
            <p>
                {props.desc
                    ? props.desc.split(" ").slice(0, 10).join(" ") +
                    (props.desc.split(" ").length > 10 ? "..." : "")
                    : ""}
            </p>


            <div>
                {props.usernameTags?.map((tag, idx) => (
                    <Link key={idx} href={`/blog/tag/${tag}`}>
                        <button className={`tag-btn tag-btn-green ms-${idx > 0 ? 2 : 0}`}>
                            {tag}
                        </button>
                    </Link>
                ))}
            </div>
            <div className="mt-4">
                <p className="posted-date">
                    {props.author?.url ? (
                        <Link
                            href={props.author.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="author-name px-2"
                            style={{ color: '#1163EA', fontWeight: '600' }}
                        >
                            {props.author.name}
                        </Link>
                    ) : (
                        <span className="author-name px-2" style={{ color: '#1163EA', fontWeight: '600' }}>
                            {props.author?.name}
                        </span>
                    )}

                    <span style={{ fontWeight: '400' }}>
                        {props.publishedAt ? new Date(props.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : ""}
                    </span>
                </p>
            </div>


        </div>
    );
}
